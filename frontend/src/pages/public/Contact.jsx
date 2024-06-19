import BreadCrumb from "../../components/BreadCrumb.jsx";
import NewsLetter from "../../components/NewsLetter.jsx";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <BreadCrumb title="Contact Us" />
      <div class="page">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 contact-form3 bg-light h-100">
              <div class="contact-image bg-light">
                <i class="fas fa-envelope bg-light"></i>
              </div>
              <h5 class="text-center mt-3">Send us a message</h5>
              <div id="contact_form">
                <form>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-12">
                        <label>
                          Name<span class="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          class="form-control input-field"
                          required=""
                          {...register("name")}
                        />
                      </div>
                      <div class="col-md-12">
                        <label>
                          Email address <span class="required">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          class="form-control input-field"
                          required=""
                          {...register("email")}
                        />
                      </div>
                      <div class="col-md-12">
                        <label>Subject</label>
                        <input
                          type="text"
                          name="subject"
                          class="form-control input-field"
                          {...register("Subject")}
                        />
                      </div>
                      <div class="col-md-12">
                        <label>
                          Message<span class="required">*</span>
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          class="textarea-field form-control"
                          rows="3"
                          required=""
                          {...register("message")}></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit_btn"
                      value="Submit"
                      class="btn btn-primary btn-block mt-3">
                      Send message
                    </button>
                  </div>
                </form>
                <div id="contact_results"></div>
              </div>
            </div>
            <div class="col-lg-7 offset-lg-1 res-margin">
              <h4>Contact Information</h4>
              {/* <div class="contact-info res-margin">
                <div class="row res-margin mt-3 res-margin">
                  <div class="col-lg-4 mt-5">
                    <div class="contact-icon bg-light">
                      <i class="fa fa-envelope top-icon"></i>
                      <div class="contact-icon-info">
                        <h5>Write us</h5>
                        <p>
                          <a href="mailto:email@yoursite.com">
                            email@yoursite.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mt-5 res-margin">
                    <div class="contact-icon bg-light">
                      <i class="fa fa-map-marker top-icon"></i>
                      <div class="contact-icon-info">
                        <h5>Visit us</h5>
                        <p>Pet Street 123 - New York</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mt-5 res-margin">
                    <div class="contact-icon bg-light">
                      <i class="fa fa-phone top-icon"></i>
                      <div class="contact-icon-info">
                        <h5>Call us</h5>
                        <p>(123) 456-789</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <p>
                In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor
                placerat, nec elementum ipsum convall.
              </p>
              <ul class="list-inline mt-3 list-contact colored-icons">
                <li class="list-inline-item">
                  <i class="fa fa-envelope margin-icon"></i>
                  <a href="mailto:email@yoursite.com">email@yoursite.com</a>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-phone margin-icon"></i>(123) 456-789
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-map-marker margin-icon"></i>Pet Street 123 -
                  New York
                </li>
              </ul>
              {/* <div id="map-canvas" class="mt-5"></div> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.7198965452226!2d74.87098017541098!3d31.641518774158857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964a7aa0ac8b9%3A0x130013f4e7d88ff!2sMall%20Rd%2C%20White%20Avenue%2C%20Amritsar%2C%20Punjab%20143001!5e0!3m2!1sen!2sin!4v1716439953914!5m2!1sen!2sin"
                // width="700"
                height="450"
                className="col-lg-10"
                // style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
}

export default Contact;
