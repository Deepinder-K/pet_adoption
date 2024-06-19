import { Link, useNavigate } from "react-router-dom";

const HeaderLinks = () => {
  const navigate = useNavigate();

  function AdminLogout(e) {
    e.preventDefault();
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  }

  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item home-menu">
        <Link className="nav-link " to="/admin/dashboard">
          Dashboard
        </Link>
      </li>

      <li className="nav-item home-menu">
        <Link className="nav-link " to="/admin/category">
          Category
        </Link>
      </li>

      <li className="nav-item home-menu">
        <Link className="nav-link " to="/admin/sub-category">
          SubCategory
        </Link>
      </li>

      <li className="nav-item home-menu">
        <Link className="nav-link " to="/admin/manage-pets">
          Pets
        </Link>
      </li>

      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          href="#"
          id="adoption-dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Adoption Request
        </Link>
        <div
          className="dropdown-menu pattern2"
          aria-labelledby="adoption-dropdown">
          <Link className="dropdown-item" to="/admin/adoption-request">
            Pending Adoption
          </Link>
          <Link className="dropdown-item" to="/admin/approved-adoption-request">
            Approved Adoption
          </Link>
          <Link className="dropdown-item" to="/admin/rejected-adoption-request">
            Rejected Adoption
          </Link>
        </div>
      </li>

      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="#"
          id="services-dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Settings
        </Link>
        <div
          className="dropdown-menu pattern2"
          aria-labelledby="services-dropdown">
          <Link className="dropdown-item" to="/admin/change-password">
            Change Password
          </Link>
          <Link
            className="dropdown-item"
            to="/admin/logout"
            onClick={AdminLogout}>
            Logout
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default HeaderLinks;
