import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {ErrorMessage} from "@hookform/error-message"
import BreadCrumb from "../../components/BreadCrumb.jsx";

function AdminLogin() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    async function onSubmit(data) {
        // console.log(data);
        let url = "http://localhost:5000/adminLogin";
        //send data in backend
        let response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        });
        response = await response.json();
        console.log(response);

        if (response.error != "") {
            Qual.errordb("Error", response.error);
        } else {
            // window.location.href = "/dashboard";
            // Qual.successdb("Success", response.message);
            // console.log(response.token);
            localStorage.setItem("adminToken", response.token);
            navigate("/admin/dashboard");
        }
    }

    return (
        <>
            <BreadCrumb title="Admin Login"/>

            <div className="page container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="border border-3 border-light py-5 px-3 rounded shadow-lg">
                            <p>*All fields are required</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <input className="form-control" type="email"
                                           placeholder="Enter Email" {...register("email", {required: 'This filed is required.'})}/>
                                    <ErrorMessage errors={errors} name="email"
                                                  render={({message}) => <p className="text-danger">{message}</p>}
                                    />
                                </div>

                                <div className="">
                                    <input className="form-control" type="password"
                                           placeholder="Enter Password" {...register("password", {required: 'This filed is required.'})}
                                    />
                                    <ErrorMessage errors={errors} name="password"
                                                  render={({message}) => <p className="text-danger">{message}</p>}
                                    />
                                </div>

                                <button className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default AdminLogin;
