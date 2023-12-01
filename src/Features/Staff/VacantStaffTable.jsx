import { useSelector } from "react-redux";
import VacantStaffItem from "./VacantStaffItem";

function VacantStaffTable() {
  const data = useSelector((state) => state.newStaff.newStaffs);

  const vacant = data.reduce((acc, staff) => {
    if (
      (staff.department === "" || staff.department === undefined) &&
      (staff.type === "" || staff.type === undefined)
    ) {
      return [
        ...acc,
        {
          id: staff.id,
          name: staff.name,
          notDefinedValue: "Department and Staff Type",
        },
      ];
    } else if (staff.type === "" || staff.type === undefined) {
      return [
        ...acc,
        { id: staff.id, name: staff.name, notDefinedValue: "Staff Type" },
      ];
    } else if (staff.department === "" || staff.department === undefined) {
      return [
        ...acc,
        { id: staff.id, name: staff.name, notDefinedValue: "Department" },
      ];
    }
    return acc;
  }, []);

  if (!vacant.length) {
    return (
      <div className="container">
        <h1 className="heading">No Vacant staff to Display</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="heading">Avilable free Staff</h1>
      <div className="head">
        <div className="styledhead styledvacant">
          <div>Name</div>
          <div>Not defined value</div>
        </div>
      </div>
      {vacant.map((item) => (
        <VacantStaffItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default VacantStaffTable;
