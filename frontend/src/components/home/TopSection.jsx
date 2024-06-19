import { Link } from "react-router-dom";

const TopSection = () => {
  return (
    <>
      <section
        id="intro-home"
        className="container-fluid bg-light pattern4-right">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h3>Quality & Experience </h3>
              <p>
                At United Pets, we are dedicated to ensuring the well-being and
                happiness of every animal in our care. Our commitment to quality
                and experience shines through every step of the adoption
                process.Our furry friends receive the highest standard of care,
                including regular veterinary check-ups, nutritious meals, and
                comfortable living environments.Experience a warm and welcoming
                environment at our adoption center. Our dedicated staff and
                volunteers are here to make your adoption journey a joyful one.
              </p>
            </div>
            <div className="col-lg-3 justify-content-center align-self-center">
              <Link
                to="/contact"
                className="btn btn-secondary"
                data-aos="zoom-out">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="call-widget" className="container-fluid pt-0 pb-0">
        <div className="row p-0">
          <div className="call-box col-lg-4 p-0">
            <Link to="/adoption-stories">
              <img
                src="img/example.jpg"
                alt=""
                height="349px"
                className="center-block img-responsive"
              />
              <div className="call-title">
                <div className="call-info text-center">
                  <p className="subtitle text-light">more info</p>
                  <h3 className="text-light">Adoption Stories</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="call-box col-lg-4 p-0">
            <Link to="/about">
              <img
                src="img/box2.jpg"
                alt=""
                className="center-block img-responsive"
              />
              <div className="call-title">
                <div className="call-info text-center">
                  <p className="subtitle text-light">more info</p>
                  <h3 className="text-light">About us</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="call-box col-lg-4 p-0">
            <Link to="/team">
              <img
                src="img/box3.jpg"
                alt=""
                className="center-block img-responsive"
              />
              <div className="call-title">
                <div className="call-info text-center">
                  <p className="subtitle text-light">more info</p>
                  <h3 className="text-light">Our Team</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="about-home" className="overlay-light">
        <div className="container">
          <div className="section-heading text-center">
            <p className="subtitle">Get to know us</p>
            <h2>About us</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <Link
                    className="nav-item nav-link active"
                    id="tab1-tab"
                    data-bs-toggle="tab"
                    to="#tab1"
                    role="tab"
                    aria-selected="true">
                    Our Mission
                  </Link>

                  <Link
                    className="nav-item nav-link"
                    id="tab3-tab"
                    data-bs-toggle="tab"
                    to="#tab3"
                    role="tab"
                    aria-selected="false">
                    Testimonials
                  </Link>
                </div>
              </nav>
              <div
                className="tab-content block-padding"
                id="nav-tabContent"
                style={{ paddingBottom: "100px" }}>
                <div
                  className="tab-pane  fade show active"
                  id="tab1"
                  role="tabpanel"
                  aria-labelledby="tab1-tab">
                  <div className="row">
                    <div
                      className="col-lg-5 position-relative"
                      data-aos="zoom-out">
                      <div className="img-zoom-hover">
                        <img
                          src="img/abouttab1.jpg"
                          alt=""
                          className="img-rotate-outline  img-left-absolute img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-lg-7 res-margin">
                      <h3>Your pets deserve the best</h3>
                      <hr className="small-divider left" />
                      <p>
                        Approximately 1478 dogs & cats die every day on road in
                        India. United Pets is on a mission to provide every dog
                        and cat a home before 2035. It’s just one of the many
                        ways United Pets! gives back and helps you become a part
                        of something larger. Join United Pets Community and help
                        setting up Pet houses in your surrounding for strays.
                      </p>
                      <div className="accordion">
                        <div className="card">
                          <div className="card-header">
                            <a
                              className="card-link"
                              data-bs-toggle="collapse"
                              href="#collapseOne">
                              Our Philosophy
                            </a>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse show"
                            data-bs-parent=".accordion">
                            <div className="card-body">
                              <p>
                                Our philosophy is simple yet profound: to
                                rescue, rehabilitate, and rehome. We are
                                committed to providing a safe haven for animals
                                in need, nurturing them back to health and
                                happiness, and ultimately finding them loving
                                families where they can thrive.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <a
                              className="collapsed card-link"
                              data-bs-toggle="collapse"
                              href="#collapseTwo">
                              Our Organization
                            </a>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            data-bs-parent=".accordion">
                            <div className="card-body">
                              <p>
                                United Pets was established in 2016 with the
                                goal of addressing the growing issue of pet
                                homelessness in our community. Since then, we
                                have grown into a trusted resource for pet
                                adoption, education, and advocacy.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <a
                              className="collapsed card-link"
                              data-bs-toggle="collapse"
                              href="#collapseThree">
                              Partnerships with our team
                            </a>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            data-bs-parent=".accordion">
                            <div className="card-body">
                              <p>
                                Our success wouldn't be possible without the
                                dedication of our incredible team. From
                                experienced animal care professionals to
                                passionate volunteers, each member of our team
                                plays a vital role in our mission. Together, we
                                work tirelessly to ensure that every pet
                                receives the care, attention, and love they
                                deserve.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link to="/about" className="btn btn-primary mt-4">
                        More about us
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="tab3"
                  role="tabpanel"
                  aria-labelledby="tab3-tab">
                  <div className="row">
                    <div className="col-lg-7">
                      <h3>Testimonials</h3>
                      <hr className="small-divider left" />
                      <p>
                        At United Pets, we take pride in the impact we make on
                        the lives of pets and people.
                      </p>

                      <p>
                        But don't just take our word for it—here's what our
                        community has to say:
                      </p>
                      <div className="mt-5">
                        <div
                          className="carousel-1item card bg-light owl-carousel owl-theme col-md-12"
                          style={{ width: "550px" }}>
                          <div className="testimonial">
                            <div className="content">
                              <p className="description">
                                I adopted my best friend from United pets last
                                year, and it was the best decision I ever made.
                                The staff were so helpful and supportive
                                throughout the entire process, and I couldn't be
                                happier with my furry companion
                              </p>
                            </div>
                            {/* <div className="testimonial-pic">
                              <img
                                src="img/team/team1.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div> */}
                            <div className="testimonial-review">
                              <h5 className="testimonial-title">John Doe</h5>
                            </div>
                          </div>
                          {/* <div className="testimonial">
                            <div className="content">
                              <p className="description">
                                Aliquam erat volutpat In id fermentum augue, ut
                                pellentesque leo. Maecenas at arcu risus. Donec
                                commodo sodales ex, scelerisque laoreet nibh
                                hendrerit id. In aliquet magna nec lobortis
                                maximus. Etiam rhoncus leo a dolor placerat, nec
                                elementum ipsum convall.
                              </p>
                            </div>
                            <div className="testimonial-pic">
                              <img
                                src="img/team/team2.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="testimonial-review">
                              <h5 className="testimonial-title">John Sadana</h5>
                              <span>Doctor</span>
                            </div>
                          </div>
                          <div className="testimonial">
                            <div className="content">
                              <p className="description">
                                Aliquam erat volutpat In id fermentum augue, ut
                                pellentesque leo. Maecenas at arcu risus. Donec
                                commodo sodales ex, scelerisque laoreet nibh
                                hendrerit id. In aliquet magna nec lobortis
                                maximus. Etiam rhoncus leo a dolor placerat, nec
                                elementum ipsum convall.
                              </p>
                            </div>
                            <div className="testimonial-pic">
                              <img
                                src="img/team/team3.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="testimonial-review">
                              <h5 className="testimonial-title">Jane Janeth</h5>
                              <span>Librarian</span>
                            </div>
                          </div> */}
                        </div>
                      </div>
                      {/* changes */}
                      <div className="col-lg-10 text-center">
                        <Link
                          to="/adoption-stories"
                          className="btn btn-secondary"
                          data-aos="zoom-out">
                          see more
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5 res-margin position-relative">
                      <div className="img-zoom-hover">
                        <img
                          src="img/abouttab3.jpg"
                          alt=""
                          className="img-rotate-outline  img-right-absolute img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TopSection;
