import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import Window from "./Window";
import ConfirmDelete from "./ConfirmDelete";
import OnBoardStaffForm from "./OnBoardStaffForm";
import { deleteStaff } from "./newStaffSlice";

function OnBoardItem({ item }) {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [isOpenDeleteModel, setIsOpenDeleteModel] = useState(false);
  const dispatch = useDispatch();
  console.log(item.id);

  function handleDelete() {
    dispatch(deleteStaff(item.id));
    setIsOpenDeleteModel(false);
    toast.success("Deleted successfully ");
  }

  return (
    <div className="newitem">
      <h1>{item.name}</h1>
      <h3>{item.gender}</h3>
      <h3>{item.type}</h3>
      <h3>{item.department}</h3>
      <Button onClick={() => setIsOpenModel((show) => !show)}>Edit</Button>
      <Button onClick={() => setIsOpenDeleteModel((show) => !show)}>
        Delete
      </Button>

      {isOpenModel && (
        <Window onClose={() => setIsOpenModel(false)}>
          <OnBoardStaffForm
            onClose={() => setIsOpenModel(false)}
            staffToEdit={item}
          />
        </Window>
      )}
      {isOpenDeleteModel && (
        <Window onClose={() => setIsOpenDeleteModel(false)}>
          <ConfirmDelete
            resourceName={item.name}
            onCloseModal={() => setIsOpenDeleteModel(false)}
            onConfirm={() => handleDelete()}
          />
        </Window>
      )}
    </div>
  );
}

export default OnBoardItem;
