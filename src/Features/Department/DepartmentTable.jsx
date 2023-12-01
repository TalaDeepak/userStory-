import { useSelector } from "react-redux";
import TableItem from "../TableItem";

function DepartmentTable() {
  const data = useSelector((state) => state.department.departments);

  if (!data.length) {
    return (
      <div className="container">
        <h1 className="heading">No Department type to Display</h1>
        <p className="text" style={{ textAlign: "center" }}>
          Start by adding Depatment Type using above form
        </p>
      </div>
    );
  }

  return (
    <div className="table container">
      <h1 className="heading">Avilable Departments type</h1>
      {data.map((item) => (
        <TableItem itemName="departmentName" item={item} key={item.id} />
      ))}
    </div>
  );
}

export default DepartmentTable;
