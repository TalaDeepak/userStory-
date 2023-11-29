import { useSelector } from "react-redux";
import TableItem from "./TableItem";

function StaffTable() {
  const data = useSelector((state) => state.staff.staffTypes);

  if (!data.length) {
    return (
      <div className="container">
        <h1 className="heading">No staff type to Display</h1>
        <p className="text" style={{ textAlign: "center" }}>
          {" "}
          Start by adding staff Type using above form{" "}
        </p>
      </div>
    );
  }

  return (
    <div className="table container">
      <h1 className="heading">Avilable staff type</h1>
      {data.map((item) => (
        <TableItem itemName="staffName" item={item} key={item.id} />
      ))}
    </div>
  );
}

export default StaffTable;
