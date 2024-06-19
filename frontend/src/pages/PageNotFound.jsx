import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <>
      <div className="page pattern1">
        <div className="container" id="not-found">
          <div className="row  text-center">
            <div className="col-lg-12 mb-3" data-aos="fade-down">
              <h1>404</h1>
              <span>Nothing found</span>
            </div>
            <div className="col-lg-12 text-center" data-aos="fade-up">
              <Link to="/" className="btn btn-secondary ">
                Back to home page
              </Link>{" "}
              <Link href="contact.html" className="btn btn-primary me-2">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default PageNotFound;
