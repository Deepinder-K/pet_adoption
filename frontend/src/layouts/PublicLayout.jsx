import {useEffect, useContext} from "react";
import {Outlet, useLocation} from "react-router-dom";

import {UserContext} from "../context/User.js";
import Footer from "../components/Footer";
import PublicNavbar from "../components/PublicNavbar.jsx";

function UserLayout() {
    let {userLoggedIn, setUserLoggedIn} = useContext(UserContext);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        let token = localStorage.getItem("userToken");
        !token ? setUserLoggedIn(false) : setUserLoggedIn(true)
    }, [location]);

    return (
        <>
            <PublicNavbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default UserLayout;
