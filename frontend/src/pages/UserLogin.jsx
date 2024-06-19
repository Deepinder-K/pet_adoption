import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import PublicNavbar from "../components/PublicNavbar";

function UserLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);
    let url = "http://localhost:5000/user-login";
    //send data in backend
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    response = await response.json();
    console.log(response);

    if (response.error !== "") {
      Qual.errordb("Error", response.error);
    } else {
      Qual.successdb("Success", response.message);
      // console.log(response.token);
      localStorage.setItem("userToken", response.token);
      navigate("/user/dashboard");
    }
  }

  return (
    <div className="container-fluid">
      <div className="user">
        <div className="container">
          <div className="card-box">
            <div className="box">
              <img src="/img/heart.png" alt="Man with his pet dog" />
              <span>
                <h2>Hi, Welcome Back!</h2>
              </span>

              <p style={{ color: "#874ad1" }}>SIGN INTO YOUR ACCOUNT</p>

              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field d-flex align-items-center ">
                  <i className="fa fa-envelope"></i>
                  <input
                    className="form-control mx-2"
                    {...register("email", {
                      required: "This field is required",
                    })}
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <p className="error-msg">{message}</p>
                  )}
                />

                <div className="form-field d-flex align-items-center">
                  <span className="fas fa-key"></span>
                  <input
                    className="form-control mx-2"
                    {...register("password", {
                      required: "This field is required",
                    })}
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => (
                    <p className="error-msg">{message}</p>
                  )}
                />

                <div className="col-12">
                  <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                    <label>
                      <input type="checkbox" />
                      <span> </span>Remember me
                    </label>
                    <a href="#">Forget password?</a>
                  </div>
                </div>
                <button className="login_btn">LOGIN</button>

                <div className="d-flex align-items-center mt-30 mb-10">
                  <div className="line"></div>
                  <span className="pe-3 ps-3">OR</span>
                  <div className="line"></div>
                </div>

                <div className="row">
                  {/*<div className="col-md-6">*/}
                  {/*    <a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">*/}
                  {/*        <img src="img/login/google.png" alt="login with google"/>*/}
                  {/*        <span className="ps-2">Login with Google</span>*/}
                  {/*    </a>*/}
                  {/*</div>*/}

                  {/*<div className="col-md-6">*/}
                  {/*    <a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">*/}
                  {/*        <img src="/img/login/fbk.png" alt="login with facebook"/>*/}
                  {/*        <span className="ps-2">Login with Facebook</span>*/}
                  {/*    </a>*/}
                  {/*</div>*/}
                </div>

                <div className="text-center">
                  <p>
                    Don't have an account?<a href="/sign-up">Sign up</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
