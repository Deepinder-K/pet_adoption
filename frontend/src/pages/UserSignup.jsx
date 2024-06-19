import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import PublicNavbar from "../components/PublicNavbar";
// import { useRef } from "react";

function UserSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); //return object
  async function onSubmit(data) {
    // console.log(data);
    const url = "http://localhost:5000/user-signup";
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
      Qual.successdb("Success", response.message);
    }
  }

  return (
    <>
      {/* <div className="col-md-12 bg-primary pattern1 p-5"> */}
      <PublicNavbar />
      <div className="user">
        <div className="container">
          <div className="card-box">
            <div className="box1" style={{ marginTop: "200px" }}>
              <img src="/img/heart.png" alt="heart image" />
              <span>
                <h2>Create Account</h2>
              </span>
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="form-control mt-5 mb-3"
                  {...register("full_name", {
                    required: "This field is required",
                  })}
                  type="text"
                  placeholder="Enter Your Name"
                />
                <ErrorMessage
                  errors={errors}
                  name="full_name"
                  render={({ message }) => (
                    <p className="error-msg">{message}</p>
                  )}
                />
                <input
                  className="form-control mb-3"
                  {...register("email", { required: "This field is required" })}
                  type="email"
                  placeholder="Enter Email"
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <p className="error-msg">{message}</p>
                  )}
                />
                <input
                  className="form-control mb-3"
                  {...register("password", {
                    required: "This field is required",
                  })}
                  type="password"
                  placeholder="Enter Password"
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => (
                    <p className="error-msg">{message}</p>
                  )}
                />
                <input
                  className="form-control mb-3"
                  {...register("phone", { required: "This field is required" })}
                  type="tel"
                  placeholder="Enter Mobile Number"
                />
                <ErrorMessage
                  errors={errors}
                  name="phone"
                  render={({ message }) => (
                    <p className="error-msg">{message}</p>
                  )}
                />
                <select
                  className="form-control mb-3"
                  {...register("gender", {
                    required: "This field is required",
                  })}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <ErrorMessage
                  errors={errors}
                  name="gender"
                  render={({ message }) => (
                    <p className="error-msg">{message}</p>
                  )}
                />
                <textarea
                  className="form-control mb-3"
                  {...register("address", {
                    required: "This field is required",
                  })}
                  rows="5"
                  cols="21"
                  placeholder="Enter Address"
                />
                <ErrorMessage
                  errors={errors}
                  name="address"
                  render={({ message }) => (
                    <p className="error-msg">{message}</p>
                  )}
                />
                <select
                  className="form-control mb-3"
                  {...register("state", {
                    required: "This field is required",
                  })}>
                  <option value="">Select state</option>
                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CH">Chandigarh</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="DN">Dadra and Nagar Haveli</option>
                  <option value="DD">Daman and Diu</option>
                  <option value="DL">Delhi</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu and Kashmir</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="LA">Ladakh</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OR">Odisha</option>
                  <option value="PY">Puducherry</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="WB">West Bengal</option>
                </select>
                <ErrorMessage
                  errors={errors}
                  name="state"
                  render={({ message }) => (
                    <p className="error-msg">{message}</p>
                  )}
                />
                <select
                  className="form-control mb-3"
                  {...register("city", { required: "This field is required" })}>
                  <option value="">Select City</option>
                  <option value="Abohar">Abohar</option>
                  <option value="Adampur">Adampur</option>
                  <option value="Ajitgarh">Ajitgarh</option>
                  <option value="Ajnala">Ajnala</option>
                  <option value="Akalgarh">Akalgarh</option>
                  <option value="Alawalpur">Alawalpur</option>
                  <option value="Amloh">Amloh</option>
                  <option value="Amritsar">Amritsar</option>
                  <option value="Anandpur Sahib">Anandpur Sahib</option>
                  <option value="Badhni Kalan">Badhni Kalan</option>
                  <option value="Bagha Purana">Bagha Purana</option>
                  <option value="Bakloh">Bakloh</option>
                  <option value="Balachor">Balachor</option>
                  <option value="Banga">Banga</option>
                  <option value="Banur">Banur</option>
                  <option value="Barnala">Barnala</option>
                  <option value="Batala">Batala</option>
                  <option value="Begowal">Begowal</option>
                  <option value="Bhadaur">Bhadaur</option>
                  <option value="Bhatinda">Bhatinda</option>
                  <option value="Bhawanigarh">Bhawanigarh</option>
                  <option value="Bhikhi">Bhikhi</option>
                  <option value="Bhogpur">Bhogpur</option>
                  <option value="Bholath">Bholath</option>
                  <option value="Budhlada">Budhlada</option>
                  <option value="Chima">Chima</option>
                  <option value="Dasuya">Dasuya</option>
                  <option value="Dera Baba Nanak">Dera Baba Nanak</option>
                  <option value="Dera Bassi">Dera Bassi</option>
                  <option value="Dhanaula">Dhanaula</option>
                  <option value="Dhariwal">Dhariwal</option>
                  <option value="Dhilwan">Dhilwan</option>
                  <option value="Dhudi">Dhudi</option>
                  <option value="Dhuri">Dhuri</option>
                  <option value="Dina Nagar">Dina Nagar</option>
                  <option value="Dirba">Dirba</option>
                  <option value="Doraha">Doraha</option>
                  <option value="Faridkot">Faridkot</option>
                  <option value="Fatehgarh Churian">Fatehgarh Churian</option>
                  <option value="Fatehgarh Sahib">Fatehgarh Sahib</option>
                  <option value="Fazilka">Fazilka</option>
                  <option value="Firozpur">Firozpur</option>
                  <option value="Firozpur District">Firozpur District</option>
                  <option value="Gardhiwala">Gardhiwala</option>
                  <option value="Garhshankar">Garhshankar</option>
                  <option value="Ghanaur">Ghanaur</option>
                  <option value="Giddarbaha">Giddarbaha</option>
                  <option value="Gurdaspur">Gurdaspur</option>
                  <option value="Guru Har Sahai">Guru Har Sahai</option>
                  <option value="Hajipur">Hajipur</option>
                  <option value="Hariana">Hariana</option>
                  <option value="Hoshiarpur">Hoshiarpur</option>
                  <option value="Ishanpur">Ishanpur</option>
                  <option value="Jagraon">Jagraon</option>
                  <option value="Jaito">Jaito</option>
                  <option value="Jalalabad">Jalalabad</option>
                  <option value="Jalandhar">Jalandhar</option>
                  <option value="Jandiala">Jandiala</option>
                  <option value="Jandiala Guru">Jandiala Guru</option>
                  <option value="Kalanaur">Kalanaur</option>
                  <option value="Kapurthala">Kapurthala</option>
                  <option value="Kartarpur">Kartarpur</option>
                  <option value="Khamanon">Khamanon</option>
                  <option value="Khanna">Khanna</option>
                  <option value="Kharar">Kharar</option>
                  <option value="Khemkaran">Khemkaran</option>
                  <option value="Kot Isa Khan">Kot Isa Khan</option>
                  <option value="Kotkapura">Kotkapura</option>
                  <option value="Laungowal">Laungowal</option>
                  <option value="Ludhiana">Ludhiana</option>
                  <option value="Machhiwara">Machhiwara</option>
                  <option value="Majitha">Majitha</option>
                  <option value="Makhu">Makhu</option>
                  <option value="Malaut">Malaut</option>
                  <option value="Malerkotla">Malerkotla</option>
                  <option value="Mansa">Mansa</option>
                  <option value="Maur Mandi">Maur Mandi</option>
                  <option value="Moga">Moga</option>
                  <option value="Mohali">Mohali</option>
                  <option value="Morinda">Morinda</option>
                  <option value="Mukerian">Mukerian</option>
                  <option value="Nabha">Nabha</option>
                  <option value="Nakodar">Nakodar</option>
                  <option value="Nangal">Nangal</option>
                  <option value="Nawanshahr">Nawanshahr</option>
                  <option value="Nurmahal">Nurmahal</option>
                  <option value="Nurpur Kalan">Nurpur Kalan</option>
                  <option value="Pathankot">Pathankot</option>
                  <option value="Patiala">Patiala</option>
                  <option value="Patti">Patti</option>
                  <option value="Phagwara">Phagwara</option>
                  <option value="Phillaur">Phillaur</option>
                  <option value="Qadian">Qadian</option>
                  <option value="Rahon">Rahon</option>
                  <option value="Raikot">Raikot</option>
                  <option value="Rajasansi">Rajasansi</option>
                  <option value="Rajpura">Rajpura</option>
                  <option value="Ram Das">Ram Das</option>
                  <option value="Rampura">Rampura</option>
                  <option value="Rupnagar">Rupnagar</option>
                  <option value="Samrala">Samrala</option>
                  <option value="Sanaur">Sanaur</option>
                  <option value="Sangrur">Sangrur</option>
                  <option value="Sardulgarh">Sardulgarh</option>
                  <option value="Shahid Bhagat Singh Nagar">
                    Shahid Bhagat Singh Nagar
                  </option>
                  <option value="Shahkot">Shahkot</option>
                  <option value="Sham Churasi">Sham Churasi</option>
                  <option value="Sirhind-Fategarh">Sirhind-Fategarh</option>
                  <option value="Sri Muktsar Sahib">Sri Muktsar Sahib</option>
                  <option value="Sultanpur Lodhi">Sultanpur Lodhi</option>
                  <option value="Sunam">Sunam</option>
                  <option value="Talwandi Bhai">Talwandi Bhai</option>
                  <option value="Talwara">Talwara</option>
                  <option value="Tarn Taran Sahib">Tarn Taran Sahib</option>
                  <option value="Zira">Zira</option>
                </select>
                <ErrorMessage
                  errors={errors}
                  name="city"
                  render={({ message }) => (
                    <p className="error-msg">{message}</p>
                  )}
                />

                <label>
                  <input type="checkbox" />
                  <span> </span>
                  By clicking on sign up, you agree to
                  <a href="#">Terms Conditions</a>&{" "}
                  <a href="#">Privacy Policy</a>
                </label>
                <button className="login_btn">Sign Up</button>
                <div className="text-center">
                  <p>
                    Have an account?<a href="/user-login">Sign In</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
export default UserSignup;
