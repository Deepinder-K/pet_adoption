// import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb.jsx";

function Team() {
  return (
    <>
      <BreadCrumb title="Our Team" />
      <div className="container block-padding">
        {/* <h3 className="text-center">Team Style 3</h3> */}
        {/* <div className="col-md-12 carousel-3items owl-carousel owl-theme mt-5 p-2"> */}
        <div className="row p-2">
          <figure className="col-lg-3 team-style3">
            <img
              src="img/team/team1.jpg"
              className="img-fluid rounded-circle"
              alt=""
            />
            <div className="icons">
              <a href="#">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <figcaption>
              <a href="team-single.html">
                <h4>Laura Smith</h4>
              </a>
              <h6>Veterinarian</h6>
              <p>
                Veterinarians are trained medical professionals specializing in
                animal health and medicine. In a pet adoption setting, a
                veterinarian plays a crucial role in ensuring the health and
                well-being of the animals available for adoption.Their
                responsibilities may include conducting health examinations,
                administering vaccinations, diagnosing and treating medical
                conditions,providing advice to adopters on pet care and health
                maintenance, and addressing any health concerns of adopted pets
                post-adoption.
              </p>
            </figcaption>
          </figure>
          {/* Cat specialist */}
          <figure className="col-lg-3 team-style3">
            <img
              src="img/team/team3.jpg"
              className="img-fluid rounded-circle"
              alt=""
            />
            <div className="icons">
              <a href="#">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <figcaption>
              <a href="team-single.html">
                <h4>Meghan Smith</h4>
              </a>
              <h6>Cat Specialist</h6>
              <p>
                A cat specialist is an individual with extensive knowledge and
                experience in caring for cats. In a pet adoption setting, a cat
                specialist focuses specifically on the needs and behaviors of
                cats available for adoption.Their responsibilities may include
                evaluating the temperament and personality of cats, providing
                enrichment and socialization activities to improve adoptability,
                offering advice to potential adopters on selecting the right cat
                for their lifestyle and preferences, and addressing any
                behavioral issues or concerns related to cats.
              </p>
            </figcaption>
          </figure>
          <figure className="col-lg-3 team-style3">
            <img
              src="img/team/team4.jpg"
              className="img-fluid rounded-circle"
              alt=""
            />
            <div className="icons">
              <a href="#">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <figcaption>
              <a href="team-single.html">
                <h4>Mika Doe</h4>
              </a>
              <h6>Adoption manager</h6>
              <p>
                The adoption manager oversees the pet adoption process from
                start to finish. They are responsible for coordinating all
                aspects of the adoption program, including screening and
                approving potential adopters, matching adopters with suitable
                pets, facilitating adoption paperwork and contracts, organizing
                adoption events and promotions, and ensuring that adopted pets
                are placed in loving and responsible homes.
              </p>
            </figcaption>
          </figure>
          <figure className="col-lg-3 team-style3">
            <img
              src="img/team/team5.jpg"
              className="img-fluid rounded-circle"
              alt=""
            />
            <div className="icons">
              <a href="#">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <figcaption>
              <a href="team-single.html">
                <h4>Jillian Smith</h4>
              </a>
              <h6>Vet Assistant</h6>
              <p>
                Veterinary assistants provide support to veterinarians and
                veterinary technicians in the care and treatment of animals. In
                a pet adoption setting, a vet assistant may assist veterinarians
                during health examinations and medical procedures, help with the
                handling and restraint of animals, maintain cleanliness and
                organization in the veterinary clinic or shelter facility,
                prepare and sterilize equipment, administer medications as
                directed by the veterinarian, and provide general care and
                comfort to animals in the facility
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
export default Team;
