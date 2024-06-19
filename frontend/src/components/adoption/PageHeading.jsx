import { Link } from "react-router-dom";

const PageHeading = () => {
  return (
    <div className="row">
      <div className="col-lg-7">
        <h2>Re-Home and Adopt a Pet in India</h2>
        <p className="mt-4">
          Planning to Adopt a Pet? You'r come to the right place! We provide
          healthy puppies and dogs for adoption in India. Find animal shelters
          and pet adoption centers in India near you. Urgent Need for pet
          adopters near me. Pets for adoption in India - Find puppies and dogs
          for adoption in India. Pets are available for adoption through free
          animal rescue centers near you. United Pets with the absolute
          responsibility of completing your family with your dream companion and
          giving pets a loving home. Let's find the perfect match for you! We
          ensure that you Find puppies that are healthy and happy. We are also a
          one-stop online pet shop near you for all that your dog solution
          needs. We are proficient in shipping and can arrange transportation to
          get your puppy safely to your home. We take pride and joy in raising
          high-quality dogs in India. Call us today at 7597972222 and we'd love
          to answer any of your pet-related queries.
        </p>
        <p className="font-weight-bold">
          If you have any doubts or need more information, please{" "}
          <Link to="/contact" style={{ color: "rgb(214, 28, 98)" }}>
            contact us
          </Link>
        </p>
      </div>
      <div className="col-lg-5 card bg-light">
        <h5>Ready for adoption</h5>
        <ul className="checkmark ps-0 font-weight-bold">
          <li>All pets are neutered and vaccinated</li>
          <li>All pets are examined by a vet and treated as required</li>
          <li>We help to match you with a pet that meet you needs</li>
        </ul>
      </div>
    </div>
  );
};
export default PageHeading;
