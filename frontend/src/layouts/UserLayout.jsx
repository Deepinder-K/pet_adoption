import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";

function UserLayout() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        let token = localStorage.getItem("userToken");

        if (!token) {
            navigate("/user-login");
        } else {
            // console.log(token);
        }
    }, [location, navigate]);

    return (
        <>
            <UserNavbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default UserLayout;
