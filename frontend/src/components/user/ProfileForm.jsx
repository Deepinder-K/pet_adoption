import {useForm} from "react-hook-form";

const ProfileForm = ({profileData}) => {
    // console.log(profileData);
    const {
        register,
        handleSubmit
    } = useForm({defaultValues: profileData});

    async function onSubmit(data) {
        const token = localStorage.getItem("userToken");
        let url = "http://localhost:5000/profile-update";

        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data),
        });
        response = await response.json();
        console.log(response);

        if (response.error !== "") {
            Qual.errordb('Error', response.error);
        } else {
            Qual.successdb('Success', response.message);

            setTimeout(() => window.location.reload(), 1200);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6">
                        <input {...register('full_name')} className="form-control mb-3" type="text" name="full_name"/>
                    </div>

                    <div className="col-md-6">
                        <input {...register('email')} className="form-control mb-3" type="email" name="email"/>
                    </div>

                    <div className="col-md-6">
                        <input {...register('phone')} className="form-control mb-3" type="tel" name="phone"/>
                    </div>

                    <div className="col-md-6">
                        <select {...register('gender')} className="form-control mb-3" name="gender">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <select {...register('state')} className="form-control mb-3" name="state">
                            <option value="">Select State</option>
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
                            <option value="Punjab">Punjab</option>
                            <option value="RJ">Rajasthan</option>
                            <option value="SK">Sikkim</option>
                            <option value="TN">Tamil Nadu</option>
                            <option value="TG">Telangana</option>
                            <option value="TR">Tripura</option>
                            <option value="UP">Uttar Pradesh</option>
                            <option value="UT">Uttarakhand</option>
                            <option value="WB">West Bengal</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <select {...register('city')} className="form-control mb-3" name="city">
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
                    </div>

                    <div className="col-md-12">
                        <textarea {...register('address')} className="form-control mb-3" name="address"/>
                    </div>

                    <div className="col-md-4 offset-md-4">
                        <button type="submit" className="btn btn-primary w-100">
                            Edit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default ProfileForm;