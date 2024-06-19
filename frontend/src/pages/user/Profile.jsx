import { useEffect, useState } from "react";
import BreadCrumbUser from "../../components/BreadCrumbUser.jsx";
import ProfileForm from "../../components/user/ProfileForm.jsx";

const Profile = () => {
  const [fetched, setFetched] = useState(false);
  const [profileData, setProfileData] = useState({});

  async function ReadProfileData() {
    try {
      const token = localStorage.getItem("userToken");

      const path = "http://localhost:5000/user-details";
      const response = await fetch(path, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.error !== "") {
        Qual.errordb("Error", data.error);
      } else {
        setProfileData(data.records[0]);
        setFetched(true);
      }
    } catch (error) {
      console.error("Error reading profile data:", error);
    }
  }

  useEffect(() => {
    ReadProfileData().then();
  }, []);

  return (
    <>
      <BreadCrumbUser title="My Profile" />

      <div className="container mb-5 col-lg-6">
        <div className="serviceBox1 bg-primary pattern3">
          <div className="service-content bg-light mt-4">
            <div className="service-icon">
              {/* <img
                src="/img/services/service1.jpg"
                className="img-fluid rounded-circle"
                alt=""
              /> */}
            </div>
            <h3 className="title">My Profile </h3>

            {/* Profile Table */}
            <div className="page container">
              <table className="table">
                <tbody>
                  <tr>
                    <th className="text-end">Full&nbsp;Name</th>
                    <td className="text-start">{profileData?.full_name}</td>
                  </tr>
                  <tr>
                    <th className="text-end">Email</th>
                    <td className="text-start">{profileData?.email}</td>
                  </tr>
                  <tr>
                    <th className="text-end">Phone&nbsp;Number</th>
                    <td className="text-start">{profileData?.phone}</td>
                  </tr>
                  <tr>
                    <th className="text-end">Gender</th>
                    <td className="text-capitalize text-start">
                      {profileData?.gender}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-end">State</th>
                    <td className="text-start">{profileData?.state}</td>
                  </tr>
                  <tr>
                    <th className="text-end">City</th>
                    <td className="text-start">{profileData?.city}</td>
                  </tr>
                  <tr>
                    <th className="text-end" style={{ width: "50%" }}>
                      Address
                    </th>
                    <td className="text-start">{profileData?.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => ReadProfileData()}
              data-bs-toggle="modal"
              data-bs-target="#EditProfileModal">
              Modify
            </button>
          </div>
        </div>
      </div>

      <div className="modal fade" id="EditProfileModal">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Edit Profile</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <div className="card-body col-lg-12">
                {fetched && profileData && (
                  <ProfileForm profileData={profileData} />
                )}
              </div>
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
    </>
  );
};

export default Profile;
