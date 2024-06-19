import BreadCrumbUser from "../../components/BreadCrumbUser.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const MyAdoptions = () => {
  const navigate = useNavigate();
  const [adoptions, setAdoptions] = useState([]);

  async function ReadAdoptions() {
    let token = localStorage.getItem("userToken");
    // console.log(token)

    let path = "http://localhost:5000/my-adoptions";
    let res = await fetch(path, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    res = await res.json();
    // console.log(res);

    if (res.jwt) {
      localStorage.removeItem("userToken");
      navigate("/user-login");
    } else if (res.error) {
      setAdoptions([]);
      Qual.error("Error", res.error);
    } else if (res.records.length > 0) {
      // console.log(res.records);
      setAdoptions(res.records);
    }
  }

  useEffect(() => {
    ReadAdoptions().then();
  }, []);

  //Upload
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [petid, setPetid] = useState("");
  async function onSubmit(data) {
    data["token"] = localStorage.getItem("userToken");
    let path = "http://localhost:5000/post-feedback/" + petid;
    let response = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    response = await response.json();
    console.log(response);
    if (response.error != "") {
      Qual.errordb("Error", response.error);
    } else {
      reset();
      Qual.successdb("Success", response.message);
    }
  }

  return (
    <>
      <BreadCrumbUser title="My Adopiotns" />
      <div className="page container">
        <div className="table-responsive">
          {/* TABLE */}
          <table className="table table-striped table-hover">
            <thead className="alert alert-secondary">
              <tr>
                <th>#</th>
                <th>Pet Photo</th>
                <th>Pet Name</th>
                <th>Gender</th>
                <th>Color</th>
                <th>Weight</th>
                <th>Age</th>
                <th>Vaccinated</th>
                <th>Friendly with pets</th>
                <th>Children friendly</th>
                <th>Adoption Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {adoptions.map((x, index) => (
                <tr key={x.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={"http://localhost:5000" + x.photo}
                      height={50}
                      alt=""
                    />{" "}
                    <br />
                  </td>
                  <td>{x.name}</td>
                  <td>{x.gender}</td>
                  <td>{x.color}</td>
                  <td>{x.weight} Kg</td>
                  <td>{x.age} Years</td>
                  <td>
                    {x.vaccinated === "yes" ? (
                      <span className="badge bg-success">Yes</span>
                    ) : (
                      <span className="badge bg-danger">No</span>
                    )}
                  </td>
                  <td>
                    {x.friendly_to_other_pets === "yes" ? (
                      <span className="badge bg-success">Yes</span>
                    ) : (
                      <span className="badge bg-danger">No</span>
                    )}
                  </td>
                  <td>
                    {x.children_friendly === "yes" ? (
                      <span className="badge bg-success">Yes</span>
                    ) : (
                      <span className="badge bg-danger">No</span>
                    )}
                  </td>
                  <td className="fw-bold">{x.adoption_status}</td>
                  <td>
                    {x.adoption_status === "Approved" ? (
                      <button
                        className="btn-secondary p-1 rounded"
                        onClick={() => setPetid(x.id)}
                        data-bs-toggle="modal"
                        data-bs-target="#feedbackModal">
                        Feedback
                      </button>
                    ) : (
                      <span></span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* MODAL FEEDBACK */}
        <div
          className="modal fade"
          id="feedbackModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Feedback
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* changes in body */}
                <div class="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">
                      <textarea
                        {...register("feedback", {
                          required: "Please enter your feedback",
                        })}
                        class="form-control"
                        rows="5"
                        cols="40"></textarea>
                      <ErrorMessage
                        errors={errors}
                        name="feedback"
                        render={({ message }) => (
                          <span className="error-msg">{message}</span>
                        )}
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
                {/* <textarea className="form-control input-field" rows="5"/>
                <div className="mt-3">
                  <button
                    type="button"
                    className="btn btn-primary">
                    Submit
                  </button>
                </div> */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAdoptions;
