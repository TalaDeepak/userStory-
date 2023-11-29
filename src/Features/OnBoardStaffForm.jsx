import { useState } from "react";
import Form from "../UI/Form";
import FormRow from "../UI/FormRow";
import { useDispatch, useSelector } from "react-redux";
import Option from "./Option";
import Button from "../UI/Button";
import { addNewStaff, editStaff } from "./newStaffSlice";
import toast from "react-hot-toast";

function OnBoardStaffForm({ onClose, staffToEdit = {} }) {
  const { id: idToEdit } = staffToEdit;
  const isEditSession = Boolean(onClose);

  const dispatch = useDispatch();

  const staffType = useSelector((state) => state.staff.staffTypes);
  const departments = useSelector((state) => state.department.departments);

  const initialData = {
    name: "",
    gender: "Male",
    type: staffType[0]?.staffName,
    department: departments[0]?.departmentName,
  };

  const [formData, setFormData] = useState(
    isEditSession ? staffToEdit : initialData
  );

  function handleSumbit(e) {
    e.preventDefault();
    if (isEditSession) {
      dispatch(editStaff(idToEdit, formData));
      toast.success("Edited staff successfully");
      onClose();
    } else {
      if (formData.name === "") return toast.error("Please fill the data");
      dispatch(addNewStaff(formData));
      setFormData(initialData);
    }
  }

  return (
    <div className="container">
      <Form onSubmit={handleSumbit}>
        <FormRow label="Staff Name">
          <input
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
            className="input"
            placeholder="Enter staff name"
          />
        </FormRow>
        <FormRow label="Staff Gender">
          <select
            value={formData.gender}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, gender: e.target.value }))
            }
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non Binary">Non Binary</option>
          </select>
        </FormRow>
        <FormRow label="Staff Type">
          <select
            value={formData.type}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, type: e.target.value }))
            }
          >
            {staffType.map((staff) => (
              <Option key={staff.id} item={staff.staffName} />
            ))}
          </select>
        </FormRow>
        <FormRow label="Staff Department">
          <select
            value={formData.department}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, department: e.target.value }))
            }
          >
            {departments.map((dep) => (
              <Option key={dep.id} item={dep.departmentName} />
            ))}
          </select>
        </FormRow>

        <Button>{isEditSession ? "Save" : "Create"}</Button>
      </Form>
    </div>
  );
}

export default OnBoardStaffForm;
