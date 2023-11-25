import { useState } from "react";
import StaffTypeForm from "./StaffTypeForm";
import StaffTable from "./StaffTable";

const fakeData = [
  {
    id: 1,
    staffName: "Admin",
  },
  {
    id: 2,
    staffName: "WatchMan",
  },
  {
    id: 3,
    staffName: "Wardboy",
  },
];
function Staff() {
  const [data, setData] = useState(fakeData);
  return (
    <>
      <StaffTypeForm setData={setData} />
      <StaffTable data={data} setData={setData} />
    </>
  );
}

export default Staff;
