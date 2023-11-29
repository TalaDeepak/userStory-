import { useSelector } from "react-redux";
import OnBoardItem from "./onBoardItem";

function OnBoardStaffTable() {
  const data = useSelector((state) => state.newStaff.newStaffs);

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
      <h1 className="heading">Avilable staff</h1>
      <div className="head">
        <div className="styledhead">
          <div>Name</div>
          <div>Gender</div>
          <div>Type</div>
          <div>Department</div>
        </div>
      </div>
      {data.map((item) => (
        <OnBoardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default OnBoardStaffTable;
