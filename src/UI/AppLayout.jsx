import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

/* <Link className="link" to="/staff">
        Staff types
      </Link>
      <Link className="link" to="/departments">
        Departments
      </Link>
      <Link className="link" to="/newstaff">
        Add new Staff member
      </Link> */

function AppLayout() {
  return (
    <div className="layout">
      <Header />
      <SideBar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
