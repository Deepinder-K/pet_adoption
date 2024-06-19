import {useEffect, useState} from "react";
import {useLocation, useNavigate, Link} from "react-router-dom";
import BreadCrumb from "../BreadCrumb.jsx";

const AdoptionForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [pet, setPet] = useState({});

    useEffect(() => {
        if (!location.state) {
            navigate("/")
        } else {
            // console.log(location.state.pet)
            setPet(location.state.pet);
        }
    }, [location])

    return (
        <>
            <BreadCrumb title="Adoption Form"/>

            <div className="page container">
                <div className="row">
                    <div className="col-12">
                        <h2>Adopt a Pet</h2>

                        <p className="fw-bold">
                            If you have any doubts or need more information, please <a href=""
                                                                                       style={{color: 'rgb(214, 28, 98)'}}>contact
                            us</a>
                        </p>
                    </div>

                    <div className="col-md-3">
                        <img src={"http://localhost:5000" + pet?.photo} alt="" width="100%"/>
                        <h4>{pet?.name}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdoptionForm;