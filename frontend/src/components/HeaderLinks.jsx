import { Link } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item home-menu">
        <a className="nav-link" href="/">
          Home
        </a>
      </li>

      <li className="nav-item home-menu">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>

      <li className="nav-item home-menu">
        <Link className="nav-link" to="/pet-gallery">
          Adopt
        </Link>
      </li>

      <li className="nav-item home-menu">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default HeaderLinks;
