import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

function AdminLayout() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        let token = localStorage.getItem("adminToken");

        if (!token) {
            navigate("/admin-login");
        } else {
            // console.log(token);
        }
    });

    return (
        <>
            <AdminNavbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default AdminLayout;
