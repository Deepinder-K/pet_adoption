import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EditPetForm = ({ pet, category, getsubcategory, breed }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: pet });

  const navigate = useNavigate();

  async function onSubmit(data) {
    const path = "http://localhost:5000/manage-pets/" + data.id;

    let response = await fetch(path, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    response = await response.json();
    // console.log(response);

    if (response.error !== "") {
      Qual.errordb("Error", response.error);
    } else {
      reset();
      navigate("/admin/manage-pets");
      Qual.successdb("Success", response.message);
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="box1 col-md-12 bg-primary pattern1 text-light">
        <img src="/img/heart.png" alt="Heart Image" />
        <h2>Edit pet</h2>

        <div className="text-center">
          <img
            src={"http://localhost:5000" + pet.photo}
            alt="Pet"
            style={{ width: "180px", height: "115px" }}
          />
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            {/* Pet Name */}
            <div className="col-md-6">
              <label>
                Pet Name <span className="required">*</span>
              </label>
              <input
                className="form-control input-field"
                type="text"
                {...register("name", { required: "This field is required" })}
              />
              <ErrorMessage
                errors={errors}
                name="petName"
                render={({ message }) => (
                  <span className="error-msg">{message}</span>
                )}
              />
            </div>

            {/* Color */}
            <div className="col-md-6">
              <label htmlFor="">
                Color <span className="required">*</span>
              </label>
              <input
                className="form-control input-field"
                type="text"
                {...register("color", { required: "This field is required" })}
              />
              <ErrorMessage
                errors={errors}
                name="color"
                render={({ message }) => (
                  <span className="error-msg">{message}</span>
                )}
              />
            </div>
          </div>

          <div className="row">
            {/* Weight */}
            <div className="col-md-6">
              <label>
                Weight<span className="required">*</span>
              </label>
              <input
                className="form-control input-field"
                type="text"
                {...register("weight", { required: "This field is required" })}
              />
              <ErrorMessage
                errors={errors}
                name="weight"
                render={({ message }) => (
                  <span className="error-msg">{message}</span>
                )}
              />
            </div>

            {/* Gender */}
            <div className="col-md-6">
              <label>
                Gender<span className="required">*</span>
              </label>
              <select
                className="form-select"
                {...register("gender", {
                  required: "This Field is required.",
                })}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <ErrorMessage
                errors={errors}
                name="gender"
                render={({ message }) => (
                  <span className="error-msg">{message}</span>
                )}
              />
            </div>
          </div>

          <div className="row">
            {/* Age */}
            <div className="col-md-6">
              <label htmlFor="">
                Age<span className="required">*</span>
              </label>
              <input
                className="form-control input-field"
                type="text"
                {...register("age", { required: "This Field is required." })}
              />
              <ErrorMessage
                errors={errors}
                name="age"
                render={({ message }) => (
                  <span className="error-msg">{message}</span>
                )}
              />
            </div>

            {/* Vaccinated */}
            <div className="col-md-6">
              <label htmlFor="">
                Vaccinated<span className="required">*</span>
              </label>
              <select
                className="form-select"
                {...register("vaccinated", {
                  required: "This Field is required.",
                })}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <ErrorMessage
                errors={errors}
                name="vaccinated"
                render={({ message }) => (
                  <span className="error-msg">{message}</span>
                )}
              />
            </div>
          </div>

          <div className="row">
            {/* Friendly with other Pets */}
            <div className="col-md-6">
              <label>
                Friendly with other Pets<span className="required">*</span>
              </label>
              <select
                className="form-select"
                {...register("friendly", {
                  required: "This Field is required.",
                })}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <ErrorMessage
                errors={errors}
                name="friendly"
                render={({ message }) => (
                  <span className="error-msg">{message}</span>
                )}
              />
            </div>

            {/* Children friendly*/}
            <div className="col-md-6">
              <label htmlFor="">
                Children friendly<span className="required">*</span>
              </label>
              <select
                className="form-select"
                {...register("children", {
                  required: "This Field is required.",
                })}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <ErrorMessage
                errors={errors}
                name="children"
                render={({ message }) => <p className="error-msg">{message}</p>}
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="row">
            <div className="col-12">
              <label htmlFor="">
                Additional Information<span className="required">*</span>
              </label>
              <textarea
                className="form-control input-field"
                rows="5"
                {...register("about", { required: "This Field is required." })}
              />

              <ErrorMessage
                errors={errors}
                name="info"
                render={({ message }) => (
                  <span className="error-msg">{message}</span>
                )}
              />
            </div>
          </div>

          <button className="login_btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditPetForm;
