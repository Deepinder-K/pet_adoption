import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const PetsTabs = () => {
    const [pets, setPets] = useState(null);
    const [category, setCategory] = useState(null);

    // const [categoryPet, setCategoryPet] = useState(null);

    async function ReadCategory() {
        // let url = "http://localhost:5000/category";
        let url = "http://localhost:5000/pets-gallery";

        let response = await fetch(url);
        response = await response.json();
        // console.log(response);

        if (response.error !== "") {
            setCategory([]);
        } else {
            let petArr = [];

            for (let x of response.records) {
                petArr.push(x.subCategory);
            }

            setPets(petArr.flat(Infinity))
            setCategory([{category_id: 0, categoryName: 'All', subCategory: {}}, ...response.records]);
        }
    }

    useEffect(() => {
        ReadCategory().then();
    }, []);

    function FilterPets(categoryName) {
        if (categoryName === 'All') {
            let petArr = [];

            let filterData = category.filter(x => x.categoryName !== 'All');
            for (let x of filterData) {
                petArr.push(x.subCategory);
            }

            setPets(petArr.flat(Infinity))
        } else {
            let filterData = category.filter(x => x.categoryName === categoryName)[0];
            setPets(filterData.subCategory)
        }

    }

    return (
        <>
            <ul className="nav nav-pills category-isotope center-nav mt-5">
                {/*<li className="nav-item" onClick={() => FilterPets('All')}>*/}
                {/*    <a className="nav-link active" href="#" data-bs-toggle="tab" data-filter="*">All</a>*/}
                {/*</li>*/}

                {category && category.length > 0 ? category.map(value =>
                    <li key={value.category_id} className="nav-item">
                        <a className="nav-link" href="#" data-bs-toggle="tab"
                           onClick={() => FilterPets(value.categoryName)} data-filter={"." + value.categoryName}>
                            {value.categoryName}
                        </a>
                    </li>
                ) : null
                }
            </ul>

            {category && category.length > 0 &&
                <div id="gallery-isotope" className="row row-eq-height mt-lg-5">
                    {pets.map(p =>
                        <div key={p.id} className={p.categoryName + " col-lg-6 "}>
                            <div className="isotope-item">
                                <div className="adopt-card res-margin row bg-light pattern2">
                                    <div className="col-md-5">
                                        <div className="adopt-image d-flex flex-wrap align-items-center ">
                                            <a href="">
                                                <img src={"http://localhost:5000" + p.photo}
                                                     className="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-7 res-margin">
                                        <div className="caption-adoption">
                                            <h5 className="adoption-header">{p.name}</h5>
                                            <ul className="list-unstyled">
                                                <li><strong>Gender:</strong> {p.gender}</li>
                                                <li><strong>Age:</strong> {p.age} years</li>
                                                <li><strong>Breed:</strong> {p.subCategoryName}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-3">
                                        <div className="text-center">
                                            <Link to="/pet-detail" className="btn btn-primary" state={{pet: p}}>
                                                More Info
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
        </>
    )
}
export default PetsTabs;