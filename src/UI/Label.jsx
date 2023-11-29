function Label({ children }) {
  return (
    <label className="text" htmlFor="type">
      {children}
    </label>
  );
}

export default Label;
