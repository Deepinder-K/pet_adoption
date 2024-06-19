import { Link } from "react-router-dom";

const BottomSection = () => {
  return (
    <>
      <section id="team-home" className="container">
        <div className="section-heading text-center">
          <p className="subtitle">Qualified Professionals</p>
          <h2>Our Team</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 justify-content-center align-self-center text-lg-left text-sm-center text-xs-center">
            <h3>Meet our professionals</h3>
            <p className="h7">
              We have an experienced qualified team to take care of your best
              friend
            </p>
            <Link to="/team" className="btn btn-secondary mt-2">
              View all team
            </Link>
          </div>
          <div className="col-lg-8 offset-lg-1 res-margin">
            <div className="row">
              {/* Veterinarian */}
              <div className="team-style2 col-lg-6">
                <div className="img-box">
                  <div className="text-center">
                    <img
                      src="img/team/team1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <a href="team-single.html">
                  <h5 className="team-header">Laura Smith</h5>
                </a>
                <span>Veterinarian</span>
                <hr className="small-divider left" />
                <p>
                  Veterinarians are trained medical professionals specializing
                  in animal health and medicine
                </p>
              </div>
              {/* Cat specialist */}
              <div className="team-style2 col-lg-6">
                <div className="img-box">
                  <div className="text-center">
                    <img
                      src="img/team/team3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <a href="team-single.html">
                  <h5 className="team-header">Meghan Smith</h5>
                </a>
                <span>Cat Specialist</span>
                <hr className="small-divider left" />
                <p>
                  A cat specialist is an individual with extensive knowledge and
                  experience in caring for cats
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="counter-section"
        className="container-fluid counter-calltoaction bg-fixed overlay">
        <div id="counter" className="container">
          <div className="row col-lg-10 offset-lg-1">
            <div className="col-xl-3 col-md-6">
              <div className="counter">
                <i className="counter-icon flaticon-dog-in-front-of-a-man"></i>
                <div className="counter-value" data-count="14">
                  0
                </div>
                <h3 className="title">Professionals</h3>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="counter">
                <i className="counter-icon flaticon-dog-2"></i>
                <div className="counter-value" data-count="100">
                  0
                </div>
                <h3 className="title">Adopted Pets</h3>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="counter">
                <i className="counter-icon flaticon-prize-badge-with-paw-print"></i>
                <div className="counter-value" data-count="12">
                  0
                </div>
                <h3 className="title">Awards</h3>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="counter">
                <i className="counter-icon flaticon-dog-18"></i>
                <div className="counter-value" data-count="1200">
                  0
                </div>
                <h3 className="title">Clients</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-home" className="container-fluid">
        <div className="section-heading text-center">
          <p className="subtitle">Get in touch</p>
          <h2>Contact us</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="position-relative">
              <img
                src="img/contactbg1.png"
                className="img-fluid contact-home-img hidden-medium-small"
                alt=""
              />
            </div>
            <div className="col-lg-5 offset-lg-2 h-100">
              <div className="contact-form3 bg-secondary" data-aos="flip-right">
                <div className="contact-image bg-secondary">
                  <i className="fas fa-envelope bg-secondary"></i>
                </div>
                <h4 className="text-center mt-3 text-light">
                  Send us a message
                </h4>
                <div id="contact_form">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-12">
                        <label>
                          Name<span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control input-field"
                          required=""
                        />
                      </div>
                      <div className="col-md-12">
                        <label>
                          Email address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control input-field"
                          required=""
                        />
                      </div>
                      <div className="col-md-12">
                        <label>Subject</label>
                        <input
                          type="text"
                          name="subject"
                          className="form-control input-field"
                        />
                      </div>
                      <div className="col-md-12">
                        <label>
                          Message<span className="required">*</span>
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className="textarea-field form-control"
                          rows="3"
                          required=""></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit_btn"
                      value="Submit"
                      className="btn btn-quaternary btn-block mt-3">
                      Send message
                    </button>
                  </div>
                  <div id="contact_results"></div>
                </div>
              </div>
            </div>
            <div className="text-center col-lg-5 res-margin">
              <h3>Get in Touch</h3>

              <ul className="list-inline mt-3 list-contact colored-icons font-weight-bold">
                <li className="list-inline-item">
                  <i className="fa fa-envelope margin-icon"></i>
                  <a href="mailto:support@unitedpets.com">
                    support@unitedpets.com
                  </a>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-phone margin-icon"></i>+91 1234567890
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-map-marker margin-icon"></i>Mall
                  Road,Amritsar
                </li>
              </ul>
              <hr className="mt-2" />
              {/* <div id="map-canvas" className="mt-5"></div> */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.7198965452226!2d74.87098017541098!3d31.641518774158857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964a7aa0ac8b9%3A0x130013f4e7d88ff!2sMall%20Rd%2C%20White%20Avenue%2C%20Amritsar%2C%20Punjab%20143001!5e0!3m2!1sen!2sin!4v1716439953914!5m2!1sen!2sin"
                // width="600"
                height="450"
                className="col-lg-8"
                // style="border:0;"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BottomSection;
