import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <ul className="navlist">
        <li>
          <NavLink className="navlink" to="/staff">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/departments">
            Add new Department
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/newstaff">
            Onborading staff
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
