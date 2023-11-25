import { useState } from "react";
import Button from "./Button";
import toast from "react-hot-toast";

function StaffTypeForm({ onClose, setData, staffToEdit = {} }) {
  const { staffName, id: idToEdit } = staffToEdit;
  const isEditSession = Boolean(onClose);

  const [formData, setFormData] = useState(isEditSession ? staffName : "");

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditSession) {
      setData((pre) =>
        pre.map((item) => {
          if (item.id === idToEdit) return { ...item, staffName: formData };
          else return item;
        })
      );
      toast.success("Edited successfully");
      onClose();
    } else {
      if (formData === "") return;
      setData((prev) => [
        ...prev,
        { id: Math.random() * 10, staffName: formData },
      ]);
      setFormData("");
      toast.success("Created successfully");
    }
  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="regular">
          <label className="text" htmlFor="type">
            Staff Type
          </label>
          <input
            onChange={(e) => setFormData(e.target.value)}
            className="input"
            value={formData}
            type="text"
            id="type"
            placeholder="Enter staff type here (Wardboy, Admin, WatchMan)"
          />
        </div>

        <Button>Save</Button>
      </form>
    </div>
  );
}

export default StaffTypeForm;
