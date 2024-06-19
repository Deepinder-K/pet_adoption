import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import BreadCrumb from "../../components/BreadCrumb.jsx";
import {ErrorMessage} from "@hookform/error-message";
import EditPetForm from "../../components/admin/EditPetForm.jsx";

const EditPet = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [form, setForm] = useState(false);

    useEffect(() => {
        if (!location.state) {
            navigate("/admin/manage-pets");
        } else {
            // console.log(location.state.pet);
            setForm(true);
        }
    }, [location, navigate]);

    /* ----------------------------------------------------- */
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

    /* ----------------------------------------------------- */


    return (
        <>
            <BreadCrumb title="Edit Pet Detail"/>

            <div className="page container">
                {form && <EditPetForm
                    pet={location.state.pet}
                    category={category}
                    getsubcategory={getsubcategory}
                    breed={breed
                    }/>}
            </div>
        </>
    )
}
export default EditPet;