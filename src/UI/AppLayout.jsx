import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Link className="link" to="/staff">
        Staff types
      </Link>
      <Link className="link" to="/departments">
        Departments
      </Link>
      <Link className="link" to="/newstaff">
        Add new Staff member
      </Link>
      <Outlet />
    </div>
  );
}

export default AppLayout;
