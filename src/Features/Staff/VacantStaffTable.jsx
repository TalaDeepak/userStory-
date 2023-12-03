import { useSelector } from "react-redux";
import OnBoardItem from "./OnBoardingStaff/onBoardItem";

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
          ...staff,
        },
      ];
    } else if (staff.type === "" || staff.type === undefined) {
      return [...acc, { ...staff }];
    } else if (staff.department === "" || staff.department === undefined) {
      return [...acc, { ...staff }];
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
    <div className="table container">
      <h1 className="heading">Avilable free Staff</h1>
      <div className="head">
        {/* <div className="styledhead styledvacant">
          <div>Name</div>
          <div>Not defined value</div>
        </div> */}
        <div className="styledhead">
          <div>Name</div>
          <div>Gender</div>
          <div>Type</div>
          <div>Department</div>
        </div>
      </div>
      {vacant.map((item) => (
        <OnBoardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default VacantStaffTable;
