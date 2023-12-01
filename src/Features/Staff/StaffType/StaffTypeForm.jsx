import { useState } from "react";
import Button from "../../../UI/Button";
import toast from "react-hot-toast";
import Form from "../../../UI/Form";
import FormRow from "../../../UI/FormRow";
import { useDispatch } from "react-redux";
import { addStaffType, editStaffType } from "./staffSlice";

function StaffTypeForm({ onClose, staffToEdit = {} }) {
  const { staffName, id: idToEdit } = staffToEdit;
  const isEditSession = Boolean(onClose);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(isEditSession ? staffName : "");

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditSession) {
      dispatch(editStaffType(idToEdit, formData));
      toast.success("Edited staff type successfully");
      onClose();
    } else {
      if (formData === "") return toast.error("Enter the details");
      dispatch(addStaffType(formData));
      setFormData("");
      toast.success("Staff type Created successfully");
    }
  }

  return (
    <div className="container">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormRow label="Staff type">
          <input
            onChange={(e) => setFormData(e.target.value)}
            className="input"
            value={formData}
            type="text"
            id="type"
            placeholder="Enter staff type (Wardboy, Admin)"
          />
        </FormRow>

        <Button>Save</Button>
      </Form>
    </div>
  );
}

export default StaffTypeForm;
