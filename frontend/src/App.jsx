import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// layouts...
import { UserContext } from "./context/User.js";

// layouts...
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout.jsx";

// public
import Home from "./pages/Home";
import PetGallery from "./pages/public/PetGallery.jsx";
import PetDetail from "./pages/public/PetDetail.jsx";
import AdoptionForm from "./components/adoption/AdoptionForm.jsx";
import About from "./pages/public/About.jsx";
import Contact from "./pages/public/Contact.jsx";
import Team from "./pages/public/Team.jsx";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/admin/AdminLogin";
import PageNotFound from "./pages/PageNotFound";

// admin
import Dashboard from "./pages/admin/Dashboard";
import Category from "./pages/admin/Category";
import SubCategory from "./pages/admin/SubCategory";
import ManagePets from "./pages/admin/ManagePets";
import EditPet from "./pages/admin/EditPet.jsx";
import AdoptionRequests from "./pages/admin/AdoptionRequests.jsx";
import ApprovedAdoptionRequests from "./pages/admin/ApprovedAdoptionRequests.jsx";
import RejectedAdoptionRequests from "./pages/admin/RejectedAdoptionRequests.jsx";
import ChangePassword from "./pages/admin/ChangePassword";

// user / customer
import UserDashboard from "./pages/user/UserDashboard";
import MyAdoptions from "./pages/user/MyAdoptions.jsx";
import Profile from "./pages/user/Profile.jsx";
import AdoptionStories from "./pages/public/AdoptionStories.jsx";
import UserChangePassword from "./pages/user/UserChangePassword.jsx";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="pet-gallery" element={<PetGallery />} />
            <Route path="pet-detail" element={<PetDetail />} />
            <Route path="pet-adoption" element={<AdoptionForm />} />
            <Route path="admin-login" element={<AdminLogin />} />
            <Route path="sign-up" element={<UserSignup />} />
            <Route path="user-login" element={<UserLogin />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="team" element={<Team />} />
            <Route path="adoption-stories" element={<AdoptionStories />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="category" element={<Category />} />
            <Route path="sub-category" element={<SubCategory />} />
            <Route path="manage-pets" element={<ManagePets />} />
            <Route path="edit-pet" element={<EditPet />} />
            <Route path="adoption-request" element={<AdoptionRequests />} />
            <Route
              path="approved-adoption-request"
              element={<ApprovedAdoptionRequests />}
            />
            <Route
              path="rejected-adoption-request"
              element={<RejectedAdoptionRequests />}
            />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>

          <Route path="/user" element={<UserLayout />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="my-adoptions" element={<MyAdoptions />} />
            <Route path="profile" element={<Profile />} />
            <Route path="change-password" element={<UserChangePassword />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
