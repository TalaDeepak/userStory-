import Label from "./Label";

function FormRow({ label, children }) {
  return (
    <div className="regular">
      {label && <Label>{label}</Label>}
      {children}
    </div>
  );
}

export default FormRow;
