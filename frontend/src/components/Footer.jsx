function Footer() {
  return (
    <footer className="bg-light pattern1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 text-center my-auto">
            <img src="/img/logo.png" className="logo-footer img-fluid" alt="" />
            <ul className="social-list text-center list-inline">
              <li className="list-inline-item">
                <a title="Facebook" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a title="Twitter" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a title="Instagram" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>About us</h5>
            <hr className="small-divider left" />
            <p className="mt-3">
              United Pets is India’s first digital pet adoption platform. United
              Pets allows aspiring pet parents to search for their furry
              companion as well as existing pet parents to rehome their pet
              conveniently
            </p>
          </div>
          <div className="col-lg-3">
            <h5>Contact Us</h5>
            <hr className="small-divider left" />
            <ul className="list-unstyled mt-3">
              <li className="mb-1">
                <i className="fas fa-phone margin-icon "></i>+91 1234567890
              </li>
              <li className="mb-1">
                <i className="fas fa-envelope margin-icon"></i>
                <a href="mailto:email@yoursite.com">support@unitedpets.com</a>
              </li>
              <li>
                <i className="fas fa-map-marker margin-icon"></i>Mall
                Road,Amritsar
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Working Hours</h5>
            <hr className="small-divider left" />
            <ul className="list-unstyled mt-3">
              <li className="mb-1">Open from 9am - 6pm</li>
              <li className="mb-1">Holidays - Closed</li>
              <li>Weekends - Closed</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="credits col-sm-12">
            <p>
              Copyright 2019 - 2023 / Designed by{" "}
              <a href="http://www.ingridkuhn.com/">Ingridk</a>
            </p>
          </div>
        </div>
      </div>
      <div className="page-scroll hidden-sm hidden-xs">
        <a href="#top" className="back-to-top">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
