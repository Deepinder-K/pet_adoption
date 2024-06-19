import {Link} from "react-router-dom";

const PetsCard = ({pet}) => {
    return (
        <div className="col-md-6">
            <div className="adopt-card res-margin row bg-light pattern2">
                <div className="col-md-5">
                    <div className="adopt-image d-flex flex-wrap align-items-center ">
                        <a href="/">
                            <img src={"http://localhost:5000" + pet.photo} className="img-fluid" alt=""/>
                        </a>
                    </div>
                </div>

                <div className="col-md-7 res-margin">
                    <div className="caption-adoption">
                        <h5 className="adoption-header">
                            <a href="/">{pet.name}</a>
                        </h5>
                        <ul className="list-unstyled">
                            <li><strong>Gender:</strong> {pet.gender}</li>
                            <li><strong>Age:</strong> {pet.age} years</li>
                            <li><strong>Breed:</strong> {pet.subcat_name}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <div className="text-center">
                        <Link to="/pet-detail" className="btn btn-primary" state={{pet: pet}}>
                            More Info
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PetsCard;