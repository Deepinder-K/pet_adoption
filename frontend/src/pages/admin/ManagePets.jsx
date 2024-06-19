import {useState, useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {ErrorMessage} from "@hookform/error-message";
import BreadCrumb from "../../components/BreadCrumb";

function ManagePets() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const [category, setCategory] = useState([]);

    async function ReadCategory() {
        let url = "http://localhost:5000/category";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);
        if (response.error != "") {
            alert(response.error);
        } else {
            setCategory(response.records);
        }
    }

    useEffect(() => {
        ReadCategory().then();
    }, []);

    async function onSubmit(data) {
        // console.log(data);
        let response = await fetch("http://localhost:5000/manage-pets", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        });
        response = await response.json();
        // console.log(response);
        if (response.error !== "") {
            Qual.errordb("Error", response.error);
        } else {
            reset();
            ReadPetsDetails().then();
            Qual.successdb("Success", response.message);
        }
    }

    const [breed, setBreed] = useState([]);

    async function getsubcategory(e) {
        // console.log(e.target.value);
        let cat_id = e.target.value;
        let path = "http://localhost:5000/get-breed-by-category/" + cat_id;
        let res = await fetch(path);
        res = await res.json();
        console.log(res);
        if (res.error != "") {
            setBreed([]);
        } else {
            setBreed(res.records);
        }
    }

    const [pets, setPets] = useState([]);

    async function ReadPetsDetails() {
        let url = "http://localhost:5000/manage-pets";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);
        if (response.error != "") {
            alert(response.error);
        } else {
            setPets(response.records);
        }
    }

    useEffect(() => {
        ReadPetsDetails().then();
    }, []);

    const [petid, setPetid] = useState("");
    const photoRef = useRef(null);

    async function UploadPhoto() {
        if (!photoRef.current.files[0]) {
            Qual.errordb("Error", "Please Upload photo");
        } else {
            let formData = new FormData();
            formData.append("petid", petid);
            formData.append("photo", photoRef.current.files[0]);

            let path = "http://localhost:5000/upload-pet-photo";

            let res = await fetch(path, {
                method: "POST",
                body: formData,
            });
            res = await res.json();
            console.log(res);
            if (res.error != "") {
                Qual.errordb("Error", res.error);
            } else {
                ReadPetsDetails();
            }
        }
    }

    const [galleryid, setGalleryid] = useState("");
    const galleryRef = useRef(null);

    async function UploadGallery() {
        if (!galleryRef.current.files[0]) {
            Qual.errordb("Error", "Please Upload photo");
        } else {
            let formData = new FormData();
            formData.append("galleryid", galleryid);
            formData.append("photo", galleryRef.current.files[0]);

            let path = "http://localhost:5000/upload-gallery-photo";

            let res = await fetch(path, {
                method: "POST",
                body: formData,
            });
            res = await res.json();
            console.log(res);

            // if (res.error != "") {
            //   Qual.errordb("Error", res.error);
            // } else {
            //   ReadPetsDetails();
            // }
        }
    }

    const [form, setForm] = useState(false);

    const tableHeadings = ["#", "Name", "Color", "Weight", "M/F", "Age", "Vaccinated", "Friendly with pets", "Children friendly", "Status", "Photo", "", "", ""];

    async function DeletePet(petId) {
        if (confirm('Are you sure?')) {
            let url = "http://localhost:5000/manage-pets/" + petId;

            let response = await fetch(url, {method: 'DELETE'});
            response = await response.json();
            // console.log(response);

            if (response.error !== "") {
                Qual.errordb('Error', response.error)
            } else {
                ReadPetsDetails().then();
                Qual.successdb('Success', response.message)
            }
        }
    }

    return (
        <>
            <BreadCrumb title="Manage Pets"/>

            <div className="page container">
                {/* FORM */}
                {form &&
                    <>
                        <div className="text-center">
                            <button onClick={() => setForm(false)} className="btn btn-danger">
                                <i className="fa fa-times"></i> Hide Form
                            </button>
                        </div>

                        <div className="row justify-content-center">
                            <div className="box1 col-md-12 bg-primary pattern1 text-light">
                                <img src="/img/heart.png" alt="Heart Image"/>
                                <h2>Add new pet</h2>
                                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        {/* Category */}
                                        <div className="col-md-6">
                                            <label>
                                                Select Category<span className="required">*</span>
                                            </label>
                                            <select
                                                className="form-select"
                                                {...register("category", {
                                                    required: "This Field is required",
                                                })}
                                                onChange={getsubcategory}>
                                                <option value="">Select Category</option>
                                                {category.map((x, index) => (
                                                    <option key={index} value={x.category_id}>
                                                        {x.categoryName}
                                                    </option>
                                                ))}
                                            </select>
                                            <ErrorMessage
                                                errors={errors}
                                                name="category"
                                                render={({message}) => (
                                                    <span className="error-msg">{message}</span>
                                                )}
                                            />
                                        </div>

                                        {/* Subcategory */}
                                        <div className="col-md-6">
                                            <label>
                                                Select Subcategory <span className="required">*</span>
                                            </label>
                                            <select
                                                className="form-select"
                                                {...register("breed", {
                                                    required: "This Field is required.",
                                                })}>
                                                <option value="">Select subcategory</option>
                                                {breed.map((x, index) => (
                                                    <option key={index} value={x.subcategory_id}>
                                                        {x.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <ErrorMessage
                                                errors={errors}
                                                name="breed"
                                                render={({message}) => (
                                                    <span className="error-msg">{message}</span>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        {/* Pet Name */}
                                        <div className="col-md-6">
                                            <label>
                                                Pet Name <span className="required">*</span>
                                            </label>
                                            <input
                                                className="form-control input-field"
                                                type="text"
                                                {...register("petName", {
                                                    required: "This field is required",
                                                })}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="petName"
                                                render={({message}) => (
                                                    <span className="error-msg">{message}</span>
                                                )}
                                            />
                                        </div>

                                        {/* Color */}
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Color <span className="required">*</span>
                                            </label>
                                            <input
                                                className="form-control input-field"
                                                type="text"
                                                {...register("color", {
                                                    required: "This field is required",
                                                })}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="color"
                                                render={({message}) => (
                                                    <span className="error-msg">{message}</span>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        {/* Weight */}
                                        <div className="col-md-6">
                                            <label>
                                                Weight<span className="required">*</span>
                                            </label>
                                            <input className="form-control input-field" type="text"
                                                   {...register("weight", {
                                                       required: "This field is required",
                                                   })}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="weight"
                                                render={({message}) => (
                                                    <span className="error-msg">{message}</span>
                                                )}
                                            />
                                        </div>

                                        {/* Gender */}
                                        <div className="col-md-6">
                                            <label>
                                                Gender<span className="required">*</span>
                                            </label>
                                            <select
                                                className="form-select"
                                                {...register("gender", {
                                                    required: "This Field is required.",
                                                })}>
                                                <option value="">Select gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                            <ErrorMessage
                                                errors={errors}
                                                name="gender"
                                                render={({message}) => (
                                                    <span className="error-msg">{message}</span>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        {/* Age */}
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Age<span className="required">*</span>
                                            </label>
                                            <input className="form-control input-field" type="text"
                                                   {...register("age", {
                                                       required: "This Field is required.",
                                                   })}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="age"
                                                render={({message}) => (
                                                    <span className="error-msg">{message}</span>
                                                )}
                                            />
                                        </div>

                                        {/* Vaccinated */}
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Vaccinated<span className="required">*</span>
                                            </label>
                                            <select
                                                className="form-select"
                                                {...register("vaccinated", {
                                                    required: "This Field is required.",
                                                })}>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                            <ErrorMessage
                                                errors={errors}
                                                name="vaccinated"
                                                render={({message}) => (
                                                    <span className="error-msg">{message}</span>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        {/* Friendly with other Pets */}
                                        <div className="col-md-6">
                                            <label>
                                                Friendly with other Pets<span className="required">*</span>
                                            </label>
                                            <select
                                                className="form-select"
                                                {...register("friendly", {
                                                    required: "This Field is required.",
                                                })}>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                            <ErrorMessage
                                                errors={errors}
                                                name="friendly"
                                                render={({message}) => (
                                                    <span className="error-msg">{message}</span>
                                                )}
                                            />
                                        </div>

                                        {/* Children friendly*/}
                                        <div className="col-md-6">
                                            <label htmlFor="">
                                                Children friendly<span className="required">*</span>
                                            </label>
                                            <select
                                                className="form-select"
                                                {...register("children", {
                                                    required: "This Field is required.",
                                                })}>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                            <ErrorMessage
                                                errors={errors}
                                                name="children"
                                                render={({message}) => (
                                                    <p className="error-msg">{message}</p>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    {/* Additional Information */}
                                    <div className="row">
                                        <div className="col-12">
                                            <label htmlFor="">
                                                Additional Information<span className="required">*</span>
                                            </label>
                                            <textarea
                                                className="form-control input-field"
                                                rows="5"
                                                {...register("info", {
                                                    required: "This Field is required.",
                                                })}
                                            />

                                            <ErrorMessage
                                                errors={errors}
                                                name="info"
                                                render={({message}) => (
                                                    <span className="error-msg">{message}</span>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <button className="login_btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </>}

                {!form && <div className="text-end mb-4">
                    <button onClick={() => setForm(true)} className="btn btn-success">
                        <i className="fa fa-plus"></i> Add New Pet
                    </button>
                </div>}

                {/* AVAILABLE TABLE */}
                <h4>AVAILABLE PETS</h4>
                <div className="table-responsive mb-5">
                    <table className="table table-striped table-hover">
                        <thead className="alert alert-secondary">
                        <tr>
                            {tableHeadings.map((x, i) => <th key={i}>{x}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {pets.filter(p => p.is_available !== "Adopted")?.map((value, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.color}</td>
                                <td>{value.weight} Kg</td>
                                <td className="text-capitalize">{value.gender}</td>
                                <td>{value.age}</td>
                                <td>
                                    {value.vaccinated === "yes" ? (
                                        <span className="badge bg-success">Yes</span>
                                    ) : (
                                        <span className="badge bg-danger">No</span>
                                    )}
                                </td>
                                <td>
                                    {value.friendly_to_other_pets === "yes" ? (
                                        <span className="badge bg-success">Yes</span>
                                    ) : (
                                        <span className="badge bg-danger">No</span>
                                    )}
                                </td>
                                <td>
                                    {value.children_friendly === "yes" ? (
                                        <span className="badge bg-success">Yes</span>
                                    ) : (
                                        <span className="badge bg-danger">No</span>
                                    )}
                                </td>
                                <td>{value.is_available}</td>
                                <td>
                                    {value.photo ? (
                                        <div className="img-zoom-hover">
                                            <img
                                                className="img-fluid"
                                                width="60"
                                                alt={value.name}
                                                src={"http://localhost:5000" + value.photo}
                                            />
                                        </div>
                                    ) : (
                                        <button style={{fontSize: '12px'}} className="btn-primary p-1 rounded"
                                                onClick={() => setPetid(value.id)}
                                                data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Upload&nbsp;Photo
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button className="btn-success py-1 px-2 rounded"
                                            style={{fontSize: '12px', border: 'none'}}
                                            data-bs-toggle="modal" data-bs-target="#galleryModal"
                                            onClick={() => setGalleryid(value.id)}>
                                        Pet&nbsp;Gallery
                                    </button>
                                </td>
                                <td>
                                    <button className="btn-secondary py-1 px-3 rounded"
                                            style={{fontSize: '12px', border: 'none'}}
                                            onClick={() => DeletePet(value.id)}>
                                        Delete
                                    </button>
                                </td>

                                <td>
                                    <Link to="/admin/edit-pet" state={{pet: value}}
                                          className="btn-warning py-2 px-4 rounded" style={{fontSize: '12px'}}>
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* ADOPTED TABLE */}
                <h4>ADOPTED PETS</h4>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="alert alert-secondary">
                        <tr>
                            {tableHeadings.map((x, i) => <th key={i}>{x}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {pets.filter(p => p.is_available === "Adopted")?.map((value, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.color}</td>
                                <td>{value.weight} Kg</td>
                                <td className="text-capitalize">{value.gender}</td>
                                <td>{value.age}</td>
                                <td>
                                    {value.vaccinated === "yes" ? (
                                        <span className="badge bg-success">Yes</span>
                                    ) : (
                                        <span className="badge bg-danger">No</span>
                                    )}
                                </td>
                                <td>
                                    {value.friendly_to_other_pets === "yes" ? (
                                        <span className="badge bg-success">Yes</span>
                                    ) : (
                                        <span className="badge bg-danger">No</span>
                                    )}
                                </td>
                                <td>
                                    {value.children_friendly === "yes" ? (
                                        <span className="badge bg-success">Yes</span>
                                    ) : (
                                        <span className="badge bg-danger">No</span>
                                    )}
                                </td>
                                <td>
                                    {value.is_available === "Adopted" ?
                                        <span className="badge bg-danger"
                                              style={{fontSize: '14px'}}>{value.is_available}</span> :
                                        <span className="text-success fw-bold">{value.is_available}</span>}</td>
                                <td>
                                    {value.photo ? (
                                        <div className="img-zoom-hover">
                                            <img
                                                className="img-fluid"
                                                width="60"
                                                alt={value.name}
                                                src={"http://localhost:5000" + value.photo}
                                            />
                                        </div>
                                    ) : (
                                        <button
                                            className="btn-primary p-1 rounded"
                                            onClick={() => setPetid(value.id)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                            Upload&nbsp;Photo
                                        </button>
                                    )}
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Photo */}
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Upload Pet Photo
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* changes in body */}
                            <input type="file" ref={photoRef} className="form-control"/>
                            <div className="mt-3">
                                <button
                                    type="button"
                                    onClick={UploadPhoto}
                                    className="btn btn-primary">
                                    Upload
                                </button>
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

            {/* Modal Gallery */}
            <div className="modal fade" id="galleryModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Pet Gallery
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="file" ref={galleryRef} className="form-control"/>
                            <div className="mt-3">
                                <button
                                    type="button"
                                    onClick={UploadGallery}
                                    className="btn btn-primary">
                                    Upload
                                </button>
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
}

export default ManagePets;
