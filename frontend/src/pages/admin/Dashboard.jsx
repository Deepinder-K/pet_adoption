import BreadCrumbAdmin from "../../components/BreadCrumbAdmin.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function Dashboard() {
    const [records, setRecords] = useState(null);

    async function ReadPendingAdoptionRequests() {
        let url = "http://localhost:5000/pending-adoption-requests";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);

        if (response.error !== "") {
            alert(response.error);
        } else {
            // console.log(response.records)
            setRecords(response.records);
        }
    }

    useEffect(() => {
        ReadPendingAdoptionRequests().then();
    }, []);

    return (
        <>
            <BreadCrumbAdmin title="Dashboard"/>

            <div className="container mb-5">
                {records && records.length > 0 && (
                    <div id="gallery-isotope" className="row row-eq-height mt-lg-5">
                        <h6 className="text-danger mb-0">
                            Pending Adoption ({records && records.length > 0 ? records.length : 0})
                        </h6>

                        {records.map((p) => (
                            <div key={p.id} className={p.categoryName + " col-lg-6 "}>
                                <div className="isotope-item">
                                    <div className="adopt-card res-margin row bg-light pattern2">
                                        <div className="col-md-5">
                                            <div className="adopt-image d-flex flex-wrap align-items-center ">
                                                <a href="">
                                                    <img
                                                        src={"http://localhost:5000" + p.photo}
                                                        className="rounded img-fluid"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-md-7 res-margin">
                                            <div className="caption-adoption">
                                                <h5 className="adoption-header">
                                                    <strong>Name: </strong>
                                                    {p.name}
                                                </h5>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <strong>Gender:</strong> {p.gender}
                                                    </li>
                                                    <li>
                                                        <strong>Age:</strong> {p.age} years
                                                    </li>
                                                    <li>
                                                        <strong>Color:</strong> {p.color}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="text-center">
                                                <Link to="/admin/adoption-request" className="btn btn-primary">
                                                    More Info
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Dashboard;
