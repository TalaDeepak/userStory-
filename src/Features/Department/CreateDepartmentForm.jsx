import { useState } from "react";
import Form from "../../UI/Form";
import FormRow from "../../UI/FormRow";
import Button from "../../UI/Button";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addDepartmentType, editDepartmentType } from "./departmentSlice";

function CreateDepartmentForm({ onClose, departmentToEdit = {} }) {
  const { departmentName, id: idToEdit } = departmentToEdit;
  const isEditSession = Boolean(onClose);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(isEditSession ? departmentName : "");

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditSession) {
      dispatch(editDepartmentType(idToEdit, formData));
      toast.success("Edited Department type successfully");
      onClose();
    } else {
      if (formData === "") return toast.error("Enter the details");
      dispatch(addDepartmentType(formData));
      setFormData("");
      toast.success("Department Created successfully");
    }
  }

  return (
    <div className="container">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormRow label="Department Name">
          <input
            onChange={(e) => setFormData(e.target.value)}
            className="input"
            value={formData}
            type="text"
            required
            id="type"
            placeholder="Enter Department name here (ICU, Billing )"
          />
        </FormRow>

        <Button>Save</Button>
      </Form>
    </div>
  );
}

export default CreateDepartmentForm;
