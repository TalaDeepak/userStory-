function Button({ children, onClick }) {
  if (onClick)
    return (
      <button onClick={onClick} className="btn">
        {children}
      </button>
    );
  return <button className="btn">{children}</button>;
}

export default Button;
