import { Link } from "react-router-dom";
import TopHeader from "./TopHeader.jsx";
import HeaderLinks from "./HeaderLinks.jsx";
import { useContext } from "react";
import { UserContext } from "../context/User.js";

function PublicNavbar() {
  let { userLoggedIn } = useContext(UserContext);
  // console.log(userLoggedIn)
  return (
    <>
      <nav id="main-nav" className="navbar-expand-xl fixed-top">
        <TopHeader />

        <div className="navbar container-fluid">
          <div className="container">
            <a className="nav-brand" href="/">
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
              <HeaderLinks />

              {userLoggedIn ? (
                <ul className="nav nav-pills">
                  <li className="nav-item p-0">
                    <Link
                      className="nav-link px-4 py-1 text-white"
                      to="/user/dashboard">
                      Dashboard
                    </Link>
                  </li>
                </ul>
              ) : (
                <>
                  <ul className="nav nav-pills">
                    <li className="nav-item p-0">
                      <Link
                        className="nav-link px-4 py-1 text-white"
                        to="/user-login">
                        LOGIN
                      </Link>
                    </li>
                  </ul>

                  <ul className="nav nav-pills">
                    <li className="nav-item p-0">
                      <Link
                        className="btn btn-secondary px-4 my-4"
                        to="/sign-up">
                        {/* <Link className="px-4 py-1 fw-bold" to="/sign-up"> */}
                        Register
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default PublicNavbar;
