const express = require("express");
const app = express();
const cors = require("cors");
const {verify} = require("jsonwebtoken");
const fileUpload = require("express-fileupload");

// controllers...
const userController = require("./controllers/user.controller");
const adminController = require("./controllers/admin.controller");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({}));
app.use(express.static("public"));

// admin authorization middleware...
function adminAuthorization_HTTP_Request(req, res, next) {
    if (!req.body.token) {
        return res.json({error: "Unauthorized Access", message: ""});
    }

    let token = req.body.token;
    let secret = "abc@123";

    try {
        // verify token
        req["adminInfo"] = verify(token, secret); // return data
        next();
    } catch (error) {
        res.json({error: error.message, message: ""});
    }
}

// POST user authorization middleware...
function userAuthorization_HTTP_Request(req, res, next) {
    if (!req.body.token) {
        return res.json({error: "Unauthorized Access", message: ""});
    }

    let token = req.body.token;
    let secret = "abc@123";

    try {
        // verify token
        req["userInfo"] = verify(token, secret); // return data
        next();
    } catch (error) {
        res.json({error: error.message, message: ""});
    }
}

// GET user authorization middleware...
function userAuthorization_GET_Request(req, res, next) {
    let token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.json({jwt: "Unauthorized Access"});
    }

    let secret = "abc@123";

    try {
        // verify token
        req["userInfo"] = verify(token, secret); // return data
        next();
    } catch (error) {
        res.json({jwt: error.message});
    }
}

/* --- PUBLIC -- */
app.get("/pets-home", adminController.GetPetsHome);
app.get("/pets-gallery", adminController.ReadHomePageCategory);
app.get("/pet-gallery-images/:petId", adminController.ReadPetGalleryImages);
app.post(
    "/adoption-request",
    userAuthorization_HTTP_Request,
    userController.AdoptionRequest
);
app.get("/read-feedback", userController.AdoptionStories);

/* --- USER -- */
app.post("/user-login", userController.UserLogin);
app.post("/user-signup", userController.UserSignup);
app.post(
    "/user-changepassword",
    userAuthorization_HTTP_Request,
    userController.UserChangePassword
);
app.get(
    "/my-adoptions",
    userAuthorization_GET_Request,
    userController.MyAdoptions
);
app.get(
    "/user-details",
    userAuthorization_GET_Request,
    userController.GetUserDetails
);
app.post(
    "/user-details",
    userAuthorization_HTTP_Request,
    userController.EditUserDetails
);
app.post("/user-data", userAuthorization_HTTP_Request, userController.UserData);
app.post(
    "/post-feedback/:petid",
    userAuthorization_HTTP_Request,
    userController.FeedBack
);

app.post(
    "/change-password",
    adminAuthorization_HTTP_Request,
    adminController.AdminChangePassword
);
app.post("/profile-update", userAuthorization_GET_Request, userController.UpdateUserProfile);

/* --- ADMIN -- */
app.post("/adminLogin", adminController.AdminLogin);

// dashboard routes...
// app.get("/", adminController.ReadCategory);

// category routes...
app.post("/category", adminController.AddCategory);
app.get("/category", adminController.ReadCategory);
app.delete("/category/:id", adminController.DeleteCategory);

// sub-category routes...
app.post("/sub-category", adminController.SubAddCategory);
app.get("/sub-category", adminController.ReadSubCategory);
app.delete("/sub-category/:id", adminController.DeleteSubCategory);
app.get("/get-breed-by-category/:id", adminController.GetBreedByCategory);

// pet routes...
app.put("/manage-pets/:petId", adminController.UpdatePet);
app.delete("/manage-pets/:petId", adminController.DeletePet);
app.post("/manage-pets", adminController.AddPetsDetails);
app.get("/manage-pets", adminController.GetPetsDetails);
app.post("/upload-pet-photo", adminController.UploadPetPhoto);
app.post("/upload-gallery-photo", adminController.UploadGallery);

// adoption request routes...
app.get(
    "/pending-adoption-requests",
    adminController.GetPendingAdoptionRequests
);
app.get(
    "/approved-adoption-requests",
    adminController.GetApprovedAdoptionRequests
);
app.get(
    "/rejected-adoption-requests",
    adminController.GetRejectedAdoptionRequests
);
app.get("/approve-reject-adoption-request/:id/:status", adminController.ApproveRejectAdoptionRequests);

const Port = 5000;
app.listen(Port, (error) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log("Server is running on port " + Port);
    }
});
