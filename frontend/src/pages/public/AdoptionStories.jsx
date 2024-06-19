import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb.jsx";
import NewsLetter from "../../components/NewsLetter.jsx";
// import { useForm } from "react-hook-form";

const AdoptionStories = () => {
  // const navigate = useNavigate();
  const [adoptions, setAdoptions] = useState([]);
  async function ReadFeedback() {
    let path = "http://localhost:5000/read-feedback";
    let res = await fetch(path);
    res = await res.json();
    console.log(res);
    if (res.error !== "") {
      Qual.errordb("Error", res.error);
    } else {
      setAdoptions(res.records);
    }
  }
  useEffect(() => {
    ReadFeedback();
  }, []);
  return (
    <>
      <BreadCrumb title="Adoption Stories" />
      <div className="container">
        <div class="col-lg-12 my-5">
          <h2>Adoption Stories</h2>
          <span class="h7 mt-0">
            Adoption is an act of love, join one of our events and find your new
            best friend{" "}
          </span>
          <hr class="small-divider left " />
          {adoptions.map((x, index) => (
            <>
              <div class="row mt-5" key={x.id}>
                <div class="col-md-4 d-flex flex-wrap align-items-center pattern1">
                  <img
                    alt="Pet Photo"
                    src={"http://localhost:5000" + x.photo}
                    class="rounded-circle  img-fluid "
                  />
                </div>
                <div class="col-md-8" style={{ alignItems: "center" }}>
                  <h4>
                    {x.full_name} and {x.name}
                  </h4>
                  <p class="res-margin"></p>
                  <blockquote class="blockquote">
                    <p>{x.feedback}</p>
                    <footer class="blockquote-footer">{x.full_name}</footer>
                  </blockquote>
                </div>
              </div>
              <hr />
              {/* <div class="row mt-5">
                <div class="col-md-8">
                  <h4>Luma & Mike Johansen and Pluto</h4>
                  <p class="res-margin"></p>
                  <blockquote class="blockquote">
                    <p>{x.feedback}</p>
                    <footer class="blockquote-footer">
                      Luma & Mike Johansen
                    </footer>
                  </blockquote>
                </div>
                <div class="col-md-4 d-flex flex-wrap align-items-center pattern1">
                  <img
                    alt=""
                    src="img/adoption/adoptionstory2.jpg"
                    class="rounded-circle  img-fluid "
                  />
                </div>
              </div>
              <hr /> */}
            </>
          ))}
          {/* <div class="row mt-5">
            <div class="col-md-4 d-flex flex-wrap align-items-center pattern1">
              <img
                alt=""
                src="img/adoption/adoptionstory3.jpg"
                class="rounded-circle  img-fluid "
              />
            </div>
            <div class="col-md-8">
              <h4>Kristin and Tammy</h4>
              <p class="res-margin">
                Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id.
                In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor
                placerat, nec elementum ipsum convall.
              </p>
              <blockquote class="blockquote">
                <p>
                  Tammy is super low-maintencance and a simple petting session
                  is usually enough to make both of us happy.
                </p>
                <footer class="blockquote-footer">Kristin Doe</footer>
              </blockquote>
            </div>
          </div> */}
          {/* <div class="mt-5">
            <div class="adopt-calltoaction col-md-12 card bg-light no-bg-small">
              <div class="text-center p-3">
                <div class="col-lg-10">
                  <h5>Adopting is an act of love</h5>
                  <p>
                    Aliquam erat volutpat In id fermentum augue, ut pellentesque
                    leo. Maecenas at arcu risus. Donec commodo sodales ex,
                    scelerisque laoreet nibh hendrerit id lorem ipsuet.
                  </p>
                  <div class="text-center">
                    <a href="adoption.html" class="btn btn-primary mt-2">
                      Adopt a pet
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <NewsLetter />
    </>
  );
};
export default AdoptionStories;
