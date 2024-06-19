import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import BreadCrumbUser from "../../components/BreadCrumbUser.jsx";

function ChangePassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data) {
    // console.log(data);
    let token = localStorage.getItem("userToken");
    // console.log(token);
    if (!token) {
      navigate("/user-login");
    } else {
      data["token"] = token;
      // console.log(data["token"]);
      let url = "http://localhost:5000/user-changepassword";
      let response = await fetch(url, {
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
  }

  return (
    <>
      <BreadCrumbUser title="Change Password" />
      <div className="page container">
        <div className="card-box">
          <div className="box col-md-12 bg-primary pattern1 p-5 text-light">
            <img src="/img/heart.png" alt="heart image" />

            <h2>Change Password</h2>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              {/* <label htmlFor="">Current Password</label> */}
              <input
                type="password"
                {...register("password", {
                  required: "This field is required",
                })}
                placeholder="Enter Password"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <p className="error-msg">{message}</p>}
              />
              <br />
              {/* <label htmlFor="">New Password</label> */}
              <input
                type="password"
                {...register("newpassword", {
                  required: "This field is required",
                })}
                placeholder="Enter New Password"
              />
              <ErrorMessage
                errors={errors}
                name="newpassword"
                render={({ message }) => <p className="error-msg">{message}</p>}
              />
              <br />
              {/* <label htmlFor="">Confirm Password</label> */}
              <input
                type="password"
                {...register("confirmpassword", {
                  required: "This field is required",
                })}
                placeholder="Enter Confirm Password"
              />
              <ErrorMessage
                errors={errors}
                name="confirmpassword"
                render={({ message }) => <p className="error-msg">{message}</p>}
              />

              <button className="login_btn mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
