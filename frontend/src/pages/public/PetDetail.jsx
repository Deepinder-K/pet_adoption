import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import BreadCrumb from "../../components/BreadCrumb.jsx";

const PetDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [pet, setPet] = useState({});
  const [gallery, setGallery] = useState(null);

  async function ReadPetGalleryImages(petId) {
    let url = "http://localhost:5000/pet-gallery-images/" + petId;
    let response = await fetch(url);
    response = await response.json();
    // console.log(response);

    if (response.error !== "") {
      setGallery([]);
    } else {
      // console.log(response.records)
      setGallery(response.records);
    }
  }

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    } else {
      // console.log(location.state.pet.id)

      setPet(location.state.pet);
      ReadPetGalleryImages(location.state.pet.id).then();
    }
  }, [location]);

  /* ---------------------------------------------------- */

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showForm, setShowForm] = useState(false);

  function isUserLoggedIn() {
    let token = localStorage.getItem("userToken");

    if (!token) {
      navigate("/user-login");
    } else {
      setShowForm(true);
    }
  }

  async function onSubmit(data) {
    data["token"] = localStorage.getItem("userToken");
    data["pet_id"] = pet.id;

    let response = await fetch("http://localhost:5000/adoption-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    response = await response.json();
    // console.log(response);

    if (response.error !== "") {
      Qual.errordb("Error", response.error);
    } else {
      reset();
      window.scrollTo(0, 0);
      setShowForm(false);
      // navigate("/thank-you");
      Qual.successdb("Success", response.message);
    }
  }

  /* ---------------------------------------------------- */

  return (
    <>
      <BreadCrumb title="Pet Detail" />

      <div className="page container">
        <div className="row">
          <div className="col-lg-12 page-with-sidebar">
            <div className="row">
              <div className="adopt-card col-lg-12">
                <div className="col-md-4 float-start p-0 pe-sm-4">
                  <img
                    src={"http://localhost:5000" + pet?.photo}
                    style={{ height: "240px" }}
                    className="img-fluid rounded"
                    alt={pet?.name}
                  />
                </div>

                <div className="caption-adoption col-md-8 float-end res-margin my-auto">
                  <h2>{pet?.name}</h2>

                  <ul className="list-unstyled mt-3">
                    <li>
                      <strong>Gender:</strong> {pet?.gender}
                    </li>
                    <li>
                      <strong>Age:</strong> {pet?.age} years
                    </li>
                    <li>
                      <strong>Breed:</strong> {pet?.subCategoryName}
                    </li>
                  </ul>

                  <ul className="adopt-card-info list-unstyled">
                    {pet?.vaccinated === "yes" && (
                      <li>
                        <i className="flaticon-syringe"></i>Vaccinated
                      </li>
                    )}
                    {pet?.friendly_to_other_pets === "yes" && (
                      <li>
                        <i className="flaticon-dog-4"></i>Friendly to other
                        animals
                      </li>
                    )}
                    {pet?.children_friendly === "yes" && (
                      <li>
                        <i className="flaticon-dog-20"></i>Children Friendly
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {showForm ? (
              <>
                {/* ---------------------------------------- */}
                {/* ----------------- FORM ----------------- */}
                {/* ---------------------------------------- */}
                <div className="col-lg-12">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btn btn btn-primary mb-4">
                    <i className="fa fa-times"></i> Cancel Adoption
                  </button>

                  <h3>Adopt me</h3>
                  <hr />

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      {/* Personal Details */}
                      <>
                        <div className="col-md-12 mt-3">
                          <p className="fw-bold" style={{ color: "#D61C62" }}>
                            Personal Details
                          </p>
                        </div>

                        <div className="col-md-6 mb-3">
                          <label htmlFor="">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("first_name", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="first_name"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <label htmlFor="">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("last_name", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="last_name"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <label htmlFor="">Age</label>
                          <input
                            type="number"
                            min="0"
                            className="form-control"
                            placeholder="ex: 23"
                            {...register("age", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="age"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <label htmlFor="">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="ex: myname@example.com"
                            {...register("email", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <label htmlFor="">Mobile Number 1</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("mobile_no_1", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="mobile_no_1"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <label htmlFor="">Mobile Number 2</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("mobile_no_2", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="mobile_no_2"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="">City</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("city", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="city"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="">State</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("state", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="state"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="">Postal Code</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("postal_code", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="postal_code"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <label>Address 1</label>
                          <textarea
                            className="form-control"
                            {...register("address_1", {
                              required: "This field is required.",
                            })}></textarea>

                          <ErrorMessage
                            errors={errors}
                            name="address_1"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <label>Address 2</label>
                          <textarea
                            className="form-control"
                            {...register("address_2", {
                              required: "This field is required.",
                            })}></textarea>

                          <ErrorMessage
                            errors={errors}
                            name="address_2"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>
                      </>

                      {/* Other Details */}
                      <>
                        <div className="col-md-12 mt-3">
                          <p className="fw-bold" style={{ color: "#D61C62" }}>
                            Other Details
                          </p>
                        </div>

                        {/* Do you live in a: */}
                        <div className="col-md-6 mb-3">
                          <label htmlFor="">Do you live in a</label>
                          <select
                            className="form-select"
                            {...register("live_in", {
                              required: "This field is required.",
                            })}>
                            <option value="">Please Select</option>
                            <option value="House">House</option>
                            <option value="Townhouse">Townhouse</option>
                            <option value="Apartment">Apartment</option>
                          </select>

                          <ErrorMessage
                            errors={errors}
                            name="live_in"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        {/* Do you have a fenced yard? */}
                        <div className="col-md-6 mb-3">
                          <label htmlFor="">Do you have a fenced yard?</label>
                          <select
                            className="form-select"
                            {...register("fence_yard", {
                              required: "This field is required.",
                            })}>
                            <option value="">Please Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>

                          <ErrorMessage
                            errors={errors}
                            name="fence_yard"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        {/* Does Anyone in your Household have Allergies to Animals? */}
                        <div className="col-md-6 mb-3">
                          <label htmlFor="">
                            Does Anyone in your Household have Allergies to
                            Animals?
                          </label>
                          <select
                            className="form-select"
                            {...register("allergies", {
                              required: "This field is required.",
                            })}>
                            <option value="">Please Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>

                          <ErrorMessage
                            errors={errors}
                            name="allergies"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        {/* Are all members of your Family agreeable to adopting a Pet? */}
                        <div className="col-md-6 mb-3">
                          <label htmlFor="">
                            Are all members of your Family agreeable to adopting
                            a Pet?
                          </label>
                          <select
                            className="form-select"
                            {...register("agreeable", {
                              required: "This field is required.",
                            })}>
                            <option value="">Please Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>

                          <ErrorMessage
                            errors={errors}
                            name="agreeable"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        {/* Describe your Homes Activity Level */}
                        <div className="col-md-6 mb-3">
                          <label htmlFor="">
                            Describe your Homes Activity Level
                          </label>
                          <select
                            className="form-select"
                            {...register("home_activity_level", {
                              required: "This field is required.",
                            })}>
                            <option value="">Please Select</option>
                            <option value="Busy/Noisy">Busy/Noisy</option>
                            <option value="Moderate Comings/Goings">
                              Moderate Comings/Goings
                            </option>
                            <option value="Quiet with Occasional Guests">
                              Quiet with Occasional Guests
                            </option>
                          </select>

                          <ErrorMessage
                            errors={errors}
                            name="home_activity_level"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        {/* How many hours in a day would the pet be left alone? */}
                        <div className="col-md-6 mb-3">
                          <label htmlFor="">
                            How many hours in a day would the pet be left alone?
                          </label>
                          <select
                            className="form-select"
                            {...register("spend_alone_time", {
                              required: "This field is required.",
                            })}>
                            <option value="">Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9 or more">9 or more</option>
                          </select>

                          <ErrorMessage
                            errors={errors}
                            name="spend_alone_time"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>
                      </>

                      {/* Reference 1 */}
                      <>
                        <div className="col-md-12 mt-3">
                          <p className="fw-bold" style={{ color: "#D61C62" }}>
                            Reference #1
                          </p>
                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="">Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("ref_1_ful_name", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="ref_1_ful_name"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("ref_1_email", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="ref_1_email"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="">Mobile Number</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("ref_1_mobile", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="ref_1_mobile"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-12 mb-3">
                          <label htmlFor="">Address</label>
                          <textarea
                            className="form-control"
                            {...register("ref_1_address", {
                              required: "This field is required.",
                            })}></textarea>

                          <ErrorMessage
                            errors={errors}
                            name="ref_1_address"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>
                      </>

                      {/* Reference 2 */}
                      <>
                        <div className="col-md-12 mt-3">
                          <p className="fw-bold" style={{ color: "#D61C62" }}>
                            Reference #2
                          </p>
                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="">Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("ref_2_ful_name", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="ref_2_ful_name"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("ref_2_email", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="ref_2_email"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="">Mobile Number</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("ref_2_mobile", {
                              required: "This field is required.",
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="ref_2_mobile"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>

                        <div className="col-md-12 mb-3">
                          <label htmlFor="">Address</label>
                          <textarea
                            className="form-control"
                            {...register("ref_2_address", {
                              required: "This field is required.",
                            })}></textarea>

                          <ErrorMessage
                            errors={errors}
                            name="ref_2_address"
                            render={({ message }) => (
                              <p className="text-danger">{message}</p>
                            )}
                          />
                        </div>
                      </>

                      <div className="col-md-12">
                        <button className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <>
                {/* Pet Info */}
                <div className="col-lg-12">
                  <h3>About me</h3>
                  <p style={{ textAlign: "justify" }}>{pet?.about}</p>
                  <p className="font-weight-bold">
                    If you have any doubts or need more information, please{" "}
                    <Link to="/contact" style={{ color: "#D61C62" }}>
                      contact us
                    </Link>
                  </p>

                  {/* Adopt me */}
                  {pet?.about && (
                    <>
                      <button
                        type="button"
                        onClick={isUserLoggedIn}
                        className="btn btn btn-secondary mt-2">
                        Adopt me
                      </button>
                    </>
                  )}
                </div>

                {/* Gallery */}
                <div className="col-lg-12">
                  <h4 className="mt-5">My photo gallery</h4>
                  <hr className="small-divider left" />
                  <div className="p-2 magnific-popup row">
                    {/* <div className="carousel-3items owl-carousel p-2 magnific-popup"> */}
                    {gallery &&
                      gallery.length > 0 &&
                      gallery.map((x) => (
                        <div key={x.id} className="col-md-4">
                          <div className="p-2 magnific-popup">
                            <a
                              href={"http://localhost:5000" + x.photo}
                              title="your caption here">
                              <img
                                alt=""
                                src={"http://localhost:5000" + x.photo}
                                className="hover-opacity rounded"
                                width="100%"
                                height={240}
                              />
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Important Information for future pet owners */}
                <div className="col-lg-12">
                  <div className="accordion mt-4"></div>
                  <div
                    className="alert alert-danger col-lg-12 mt-5"
                    role="alert">
                    <h6>Important Information for future pet owners</h6>
                    <p>
                      Owning a pet comes with financial responsibilities,
                      including initial adoption or purchase fees, veterinary
                      care, food, grooming supplies, toys, and potential
                      emergency expenses. Create a budget to ensure you can
                      afford the ongoing costs of pet ownership.
                    </p>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={isUserLoggedIn}
                      className="btn btn btn-secondary mt-4">
                      Adopt me
                    </button>

                    <Link
                      to="/pet-gallery"
                      className="btn btn btn-primary mt-4 ms-2">
                      Go back to adoption gallery
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PetDetail;
