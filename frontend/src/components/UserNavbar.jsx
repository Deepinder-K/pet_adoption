import { Link } from "react-router-dom";
import TopBar from "./user/TopBar.jsx";
import { useContext } from "react";
import { UserContext } from "../context/User.js";
import { useNavigate } from "react-router-dom";

function UserNavbar() {
  const navigate = useNavigate();
  let { setUserLoggedIn } = useContext(UserContext);

  function handleLogout(e) {
    e.preventDefault();
    setUserLoggedIn(false);
    localStorage.removeItem("userToken");
    navigate("/user-login");
  }

  return (
    <>
      <nav id="main-nav" className="navbar-expand-xl fixed-top">
        <TopBar />

        <div className="navbar container-fluid">
          <div className="container ">
            <a className="nav-brand" href="index.html">
              <img src="/img/logo.png" alt="" className="img-fluid" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggle-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item home-menu">
                  <Link className="nav-link " to="/user/dashboard">
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item home-menu">
                  <Link className="nav-link " to="/user/profile">
                    Profile
                  </Link>
                </li>

                <li className="nav-item home-menu">
                  <Link className="nav-link " to="/user/my-adoptions">
                    My Adoptions
                  </Link>
                </li>

                <li className="nav-item home-menu">
                  <Link className="nav-link " to="/user/change-password">
                    Change Password
                  </Link>
                </li>

                <li className="nav-item home-menu">
                  <Link className="nav-link" onClick={handleLogout} to="/">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default UserNavbar;
