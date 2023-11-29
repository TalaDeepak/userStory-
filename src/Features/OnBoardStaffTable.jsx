import { useSelector } from "react-redux";
import TableItem from "./TableItem";

function OnBoardStaffTable() {
  const data = useSelector((state) => state.newStaff.newStaffs);
  console.log(data);
  if (!data.length) {
    return (
      <div className="container">
        <h1 className="heading">No staff to Display</h1>
        <p className="text" style={{ textAlign: "center" }}>
          Start by adding staff using above form
        </p>
      </div>
    );
  }

  return (
    <div className="table container">
      <h1 className="heading">Avilable staff </h1>
      {data.map((item) => (
        <TableItem itemName="name" item={item} key={item.id} />
      ))}
    </div>
  );
}

export default OnBoardStaffTable;
