import TopHeader from "./TopHeader.jsx";
import HeaderLinks from "./admin/HeaderLinks.jsx";

function AdminNavbar() {
    return (
        <nav id="main-nav" className="navbar-expand-xl fixed-top">
            <TopHeader/>

            <div className="navbar container-fluid">
                <div className="container">
                    <a className="nav-brand" href="index.html">
                        <img src="/img/logo.png" alt="" className="img-fluid"/>
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
                        <HeaderLinks/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;
