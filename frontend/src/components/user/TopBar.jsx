import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="container-fluid top-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="contact-details float-start">
              <li>
                <i className="fa fa-map-marker"></i>Mall Road,Amritsar
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <a href="mailto:email@site.com">support@unitedpets.com</a>
              </li>
              <li>
                <i className="fa fa-phone"></i>+91 1234567890
              </li>
            </ul>

            <ul className="social-list float-end list-inline">
              <li className="list-inline-item mt-2">
                <Link to="/pet-gallery">Adopt a pet</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
