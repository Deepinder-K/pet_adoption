import BreadCrumb from "../../components/BreadCrumb.jsx";
import NewsLetter from "../../components/NewsLetter.jsx";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <BreadCrumb title="About Us" />
      <div class="page">
        <div class="container about-section block-padding no-bg-small">
          <div class="row pb-3">
            <div class="col-lg-6">
              <h2>Our Mission</h2>
              <p class="mt-3 res-margin">
                Approximately 1478 dogs & cats die every day on road in India.
                United Pets is on a mission to provide every dog and cat a home
                before 2035. It’s just one of the many ways United Pets! gives
                back and helps you become a part of something larger. Join
                United Pets Community and help setting up Pet houses in your
                surrounding for strays.
              </p>
              <h5 class="mt-2">We have over 20 years of experience</h5>

              <Link to="/contact" class="btn btn-primary mt-4">
                Contact us
              </Link>
              {/* <a href="services.html" class="btn btn-secondary mt-4 ml-1">
                Our services
              </a> */}
            </div>
          </div>
        </div>
        <section
          id="counter-section"
          class="container-fluid counter-calltoaction bg-fixed overlay">
          <div id="counter" class="container">
            <div class="row col-lg-10 offset-lg-1">
              <div class="col-xl-3 col-md-6">
                <div class="counter">
                  <i class="counter-icon flaticon-dog-in-front-of-a-man"></i>
                  <div class="counter-value" data-count="14">
                    0
                  </div>
                  <h3 class="title">Professionals</h3>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="counter">
                  <i class="counter-icon flaticon-dog-2"></i>
                  <div class="counter-value" data-count="100">
                    0
                  </div>
                  <h3 class="title">Adopted Pets</h3>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="counter">
                  <i class="counter-icon flaticon-prize-badge-with-paw-print"></i>
                  <div class="counter-value" data-count="12">
                    0
                  </div>
                  <h3 class="title">Awards</h3>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="counter">
                  <i class="counter-icon flaticon-dog-18"></i>
                  <div class="counter-value" data-count="1200">
                    0
                  </div>
                  <h3 class="title">Clients</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="container block-padding">
          <div class="row ">
            <div class="col-lg-6 my-auto">
              <h3>More About us</h3>
              <span class="h7 mt-0">
                We offer quick & easy services for cats and dogs
              </span>
              <hr class="small-divider left" />
              <p class="res-margin">
                Hundreds of pets are abandoned and rescued in India everyday.
                Although there are many wonderful souls across the nation who
                work extra hours and put in efforts beyond their capacity, there
                is always a shortage of funding and communication across the
                animal activist circuit.United Pets is India’s first digital pet
                adoption platform.
              </p>
              <p>
                United Pets allows aspiring pet parents to search for their
                furry companion as well as existing pet parents to rehome their
                pet conveniently.It does not end here, United Pets refreshes
                your pet parenting journey by sharing weekly articles and
                allowing you to discover pet services near you!
              </p>
            </div>
            <div class="col-lg-6">
              <div class="accordion mt-5">
                <div class="card">
                  <div class="card-header">
                    <a
                      class="card-link"
                      data-bs-toggle="collapse"
                      href="#collapseOne">
                      Why Should You Adopt a Dog or Cat?
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse show"
                    data-bs-parent=".accordion">
                    <div class="card-body">
                      <p>
                        Did you know that over 2000 people per hour in India run
                        a search right here looking to adopt a pet? Pet adoption
                        is becoming the preferred way to find a new pet.
                        Adoption will always be more convenient than buying a
                        puppy for sale from a pet shop or finding a kitten for
                        sale from a litter. Pet adoption brings less stress and
                        more savings! So what are you waiting for? Go find that
                        perfect pet for home!
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a
                      class="collapsed card-link"
                      data-bs-toggle="collapse"
                      href="#collapseTwo">
                      How old do I need to be to adopt a pet?
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    data-bs-parent=".accordion">
                    <div class="card-body">
                      <p>You need to be at least 18+ years old to adopt</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a
                      class="collapsed card-link"
                      data-bs-toggle="collapse"
                      href="#collapseThree">
                      What is the fee to adopt a pet
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    data-bs-parent=".accordion">
                    <div class="card-body">
                      <p>
                        No, there is no fee for pet adoption on ThePetNest.
                        However, if you adopt from a different city pet
                        owner/rescuer can ask for travel charges. In case if you
                        find someone asking for charges you can write us at
                        support@thepetnest.com.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid block-padding bg-light">
          <div class="text-center mb-5">
            <h2>Our Features</h2>
          </div>
          <div class="container">
            <div class="row text-lg-end">
              <div class="col-md-6 col-lg-3 my-auto p-3">
                <div class="feature-with-icon">
                  <div class="icon-features">
                    <i class="flaticon-pet-lotion"></i>
                  </div>
                  <h5>
                    <strong>Natural products</strong>
                  </h5>
                  <p>
                    We believe in using natural and eco-friendly products to
                    keep our pets healthy and happy.
                  </p>
                </div>
                <div class="feature-with-icon">
                  <div class="icon-features">
                    <i class="flaticon-veterinarian-hospital"></i>
                  </div>
                  <h5>
                    <strong>Vet care</strong>
                  </h5>
                  <p>
                    We partner with trusted veterinarians to ensure that all our
                    animals receive the medical attention they need.
                  </p>
                </div>
                <div class="feature-with-icon">
                  <div class="icon-features">
                    <i class="flaticon-dog-training-1"></i>
                  </div>
                  <h5>
                    <strong>Training</strong>
                  </h5>
                  <p>
                    Our experienced trainers offer personalized training
                    programs to help pets develop good manners and behaviors
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 text-start p-3 my-auto pt-sm-0 order-3">
                <div class="feature-with-icon">
                  <div class="icon-features">
                    <i class="flaticon-pet-shelter"></i>
                  </div>
                  <h5>
                    <strong>Housing</strong>
                  </h5>
                  <p>
                    Our facilities provide comfortable and safe living
                    environments for our furry residents.
                  </p>
                </div>
                <div class="feature-with-icon">
                  <div class="icon-features">
                    <i class="flaticon-animal-1"></i>
                  </div>
                  <h5>
                    <strong>Adoption</strong>
                  </h5>
                  <p>
                    Our adoption process is designed to match each pet with the
                    perfect forever home.
                  </p>
                </div>
                <div class="feature-with-icon">
                  <div class="icon-features">
                    <i class="flaticon-pet"></i>
                  </div>
                  <h5>
                    <strong>Quality care</strong>
                  </h5>
                  <p>
                    From regular meals and exercise to socialization and
                    enrichment activities, we provide the highest standard of
                    care to ensure that every pet thrives in our care.
                  </p>
                </div>
              </div>
              <div class="text-center col-lg-6 mx-auto mt-3">
                <img
                  alt=""
                  class="img-fluid rounded"
                  src="img/features.jpg"
                  data-aos="flip-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
}

export default About;
