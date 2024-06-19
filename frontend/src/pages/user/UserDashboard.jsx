import BreadCrumbUser from "../../components/BreadCrumbUser.jsx";
import { useEffect, useState } from "react";

function UserDashboard() {
  const [records, setRecords] = useState(null);

  async function ReadApprovedAdoptionRequests() {
    let token = localStorage.getItem("userToken");
    let data = { token: token };
    let url = "http://localhost:5000/user-data";
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    response = await response.json();
    console.log(response);

    if (response.error !== "") {
      alert(response.error);
    } else {
      setRecords(response.records);
    }
  }
  useEffect(() => {
    ReadApprovedAdoptionRequests().then();
  }, []);
  return (
    <>
      <BreadCrumbUser title="Dashboard" />
      {/* <h1 className="mb-0">Welcome {re.id}</h1> */}
      <div className="page container">
        {records && records.length > 0 ? (
          records.map((x) => (
            <div
              key={x.id}
              className="row border border-1 rounded shadow p-2 mb-5">
              <div className="col-md-6">
                <h6 className="mb-0 fw-bold">Adoption ID #{x.id}</h6>
              </div>

              <div className="col-md-6 d-flex justify-content-between">
                {/* <h6 className="mb-0">
                  Status:{" "}
                  {x.adoption_status === "Pending" ? (
                    <span className="fw-bold text-danger">
                      {x.adoption_status}
                    </span>
                  ) : (
                    <span className="fw-bold text-success">
                      {x.adoption_status}
                    </span>
                  )}
                </h6> */}
              </div>

              <div className="col-md-12">
                <hr />
              </div>

              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src={"http://localhost:5000" + x.photo}
                      height={120}
                      alt=""
                    />
                  </div>
                  <div className="col-md-4">
                    <h5>Name: {x.name}</h5>
                    <p className="mb-0">Age: {x.age} Years</p>
                    <p className="mb-0">Gender: {x.gender}</p>
                    <p className="mb-0">Gender: {x.color}</p>
                  </div>
                  <div className="col-md-3">
                    <h5>Pet Details</h5>
                    <p className="mb-0">Vaccinated: {x.vaccinated}</p>
                    <p className="mb-0">
                      Friendly to other pets: {x.friendly_to_other_pets}
                    </p>
                    <p className="mb-0">
                      Children friendly: {x.children_friendly}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h5 className="mb-0 text-center text-danger">No Data Available</h5>
          </div>
        )}
      </div>
    </>
  );
}

export default UserDashboard;
