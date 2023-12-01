function VacantStaffItem({ item }) {
  return (
    <div className="item">
      <h1>{item.name}</h1>
      <p style={{ fontSize: "30px", fontWeight: "800" }}>
        {item.notDefinedValue}
      </p>
    </div>
  );
}

export default VacantStaffItem;
