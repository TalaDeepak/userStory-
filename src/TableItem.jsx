import { useState } from "react";
import Button from "./Button";
import EditStaffForm from "./EditStaffForm";
import StaffTypeForm from "./StaffTypeForm";
import toast from "react-hot-toast";

function TableItem({ item, setData }) {
  const [isOpenModel, setIsOpenModel] = useState(false);

  function handleDelete() {
    setData((pre) => pre.filter((staff) => staff.id !== item.id));
    toast.success("Deleted successfully ");
  }

  return (
    <div className="item">
      <h1>{item.staffName}</h1>
      <Button onClick={() => setIsOpenModel((show) => !show)}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
      {isOpenModel && (
        <EditStaffForm onClose={() => setIsOpenModel(false)}>
          <StaffTypeForm
            onClose={() => setIsOpenModel(false)}
            setData={setData}
            staffToEdit={item}
          />
        </EditStaffForm>
      )}
    </div>
  );
}

export default TableItem;
