import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import BreadCrumb from "../../components/BreadCrumbAdmin";
import { ErrorMessage } from "@hookform/error-message";

function Category() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    // console.log(data);
    let response = await fetch("http://localhost:5000/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    response = await response.json();
    // console.log(response);

    if (response.error != "") {
      Qual.errordb("Error", response.error);
    } else {
      reset();
      ReadCategory();
      Qual.successdb("Success", response.message);
    }
  }

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

  async function DeleteCategory(id) {
    if (confirm("Are you sure you want to delete?")) {
      let url = `http://localhost:5000/category/${id}`;
      let response = await fetch(url, { method: "DELETE" });
      response = await response.json();
      console.log(response);
      ReadCategory();
    }
  }

  return (
    <>
      <BreadCrumb title="Manage Category" />

      <div className="page container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {/* FORM */}
            <div className="border border-3 border-light py-5 px-3 rounded shadow-lg">
              <h5>Add new category</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    {...register("categoryName", {
                      required: "This field is required.",
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="categoryName"
                    render={({ message }) => (
                      <p className="text-danger">{message}</p>
                    )}
                  />
                </div>
                <button className="btn btn-primary">Add Category</button>
              </form>
            </div>

            {/* TABLE */}
            <div className="table-responsive mt-5">
              <h5>Category List</h5>
              <table className="table table-striped table-hover">
                <thead className="alert alert-secondary">
                  <tr>
                    <th>#</th>
                    <th>Category Name</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {category.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <b>{value.categoryName}</b>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn-secondary p-1 rounded"
                          onClick={() => DeleteCategory(value?.category_id)}>
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

export default Category;
