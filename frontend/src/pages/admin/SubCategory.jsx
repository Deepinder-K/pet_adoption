import {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import BreadCrumb from "../../components/BreadCrumbAdmin.jsx";

function SubCategory() {
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
        console.log(response);
        if (response.error != "") {
            alert(response.error);
        } else {
            setCategory(response.records);
        }
    }

    useEffect(() => {
        ReadCategory();
    }, []);

    async function onSubmit(data) {
        console.log(data);
        let response = await fetch("http://localhost:5000/sub-category", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        });
        response = await response.json();
        // console.log(response);
        if (response.error != "") {
            Qual.errordb("Error", response.error);
        } else {
            reset();
            Qual.successdb("Success", response.message);
            ReadSubCategory();
        }
    }

    const [subcategory, setSubCategory] = useState([]);

    async function ReadSubCategory() {
        let url = "http://localhost:5000/sub-category";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        if (response.error != "") {
            alert(response.error);
        } else {
            setSubCategory(response.records);
        }
    }

    useEffect(() => {
        ReadSubCategory();
    }, []);

    async function DeleteSubCategory(id) {
        let url = `http://localhost:5000/sub-category/${id}`;
        let response = await fetch(url, {method: "DELETE"});
        response = await response.json();
        console.log(response);
        ReadSubCategory();
    }

    return (
        <>
            <BreadCrumb title="Manage SubCategory"/>

            <div className="page container">
                <div className="card-box">
                    <div className="card col-md-12 bg-primary pattern1 p-5 text-light">
                        <img src="/img/heart.png" alt="Man with his pet dog"/>
                        <h2>SubCategory Form</h2>

                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <select
                                className="form-control"
                                {...register("category", {
                                    required: "This field is required",
                                })}>
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
                                render={({message}) => <p className="error-msg">{message}</p>}
                            />

                            <input
                                type="text"
                                {...register("categoryName", {
                                    required: "This field is required",
                                })}
                                placeholder="Enter Breed"
                            />
                            <ErrorMessage
                                errors={errors}
                                name="text"
                                render={({message}) => <p className="error-msg">{message}</p>}
                            />
                            <br/>
                            <button className="login_btn">Submit</button>
                        </form>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="table-responsive mt-5">
                            <h5>SubCategory List</h5>
                            <table className="table table-striped table-hover">
                                <thead className="alert alert-secondary">
                                <tr>
                                    <th>#</th>
                                    <th>Sub Category</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {subcategory.map((value, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.name}</td>
                                        <td>
                                            <button type="button" className="btn-secondary p-1 rounded"
                                                    onClick={() => DeleteSubCategory(value.subcategory_id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubCategory;
