import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Window({ children, onClose }) {
  const ref = useRef();

  useEffect(function () {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [ onClose]);

  return createPortal(
    <div className="overlay">
      <div ref={ref} className="modal ">
        <button onClick={onClose} className="close_btn">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Window;
