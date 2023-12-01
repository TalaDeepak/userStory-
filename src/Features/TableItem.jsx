import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import Button from "../UI/Button";
import StaffTypeForm from "./Staff/StaffType/StaffTypeForm.jsx";
import CreateDepartmentForm from "./Department/CreateDepartmentForm.jsx";
import { deleteStaffType } from "./Staff/StaffType/staffSlice.js";
import { deleteDepartmentType } from "./Department/departmentSlice.js";
import Window from "./Window.jsx";
import ConfirmDelete from "./ConfirmDelete.jsx";

function TableItem({ itemName, item }) {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [isOpenDeleteModel, setIsOpenDeleteModel] = useState(false);
  const dispatch = useDispatch();

  function handleDelete() {
    if (itemName === "staffName") {
      dispatch(deleteStaffType(item));
    }
    if (itemName === "departmentName") {
      dispatch(deleteDepartmentType(item));
    }
    toast.success("Deleted successfully ");
  }

  return (
    <div className="item">
      <h1>{item[itemName]}</h1>
      <Button onClick={() => setIsOpenModel((show) => !show)}>Edit</Button>
      <Button onClick={() => setIsOpenDeleteModel((show) => !show)}>
        Delete
      </Button>
      {isOpenModel && (
        <Window onClose={() => setIsOpenModel(false)}>
          {Object.keys(item)[1] === "staffName" && (
            <StaffTypeForm
              onClose={() => setIsOpenModel(false)}
              staffToEdit={item}
            />
          )}
          {Object.keys(item)[1] === "departmentName" && (
            <CreateDepartmentForm
              onClose={() => setIsOpenModel(false)}
              departmentToEdit={item}
            />
          )}
        </Window>
      )}
      {isOpenDeleteModel && (
        <Window onClose={() => setIsOpenDeleteModel(false)}>
          <ConfirmDelete
            resourceName={itemName}
            onCloseModal={() => setIsOpenDeleteModel(false)}
            onConfirm={() => handleDelete()}
          />
        </Window>
      )}
    </div>
  );
}

export default TableItem;
