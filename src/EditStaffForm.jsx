import { createPortal } from "react-dom";

function EditStaffForm({ children, onClose }) {
  return createPortal(
    <div className="overlay">
      <div className="modal ">
        <button onClick={onClose} className="close_btn">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default EditStaffForm;
