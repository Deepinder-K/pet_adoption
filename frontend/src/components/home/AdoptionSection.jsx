import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PetsCard from "./PetsCard.jsx";

const AdoptionSection = () => {
    const [pets, setPets] = useState([]);

    async function ReadPets() {
        let url = "http://localhost:5000/pets-home";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);

        if (response.error != "") {
            alert(response.error);
        } else {
            // console.log(response.records)
            setPets(response.records);
        }
    }

    useEffect(() => {
        ReadPets().then();
    }, []);

    return (
        <section id="adoption-home" className="container-fluid ps-0 pr-0 overlay-dark bg-fixed">
            <div className="section-heading text-center text-light">
                <p className="subtitle">Find your friend</p>
                <h2>Adoption</h2>
            </div>

            <div className="container">
                <div className="col-lg-10 offset-lg-1 text-center text-light">
                    <h3>
                        Adopting is an act of <span className="text-tertiary">love</span>
                    </h3>
                </div>

                <div className="row">
                    {pets.map(pet => <PetsCard key={pet.id} pet={pet}/>)}
                </div>

                <div className="col-lg-12 text-center">
                    <Link to="/pet-gallery" className="btn btn-secondary mt-3">
                        See adoption gallery
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AdoptionSection;