const connection = require("../connection");
const {sign} = require("jsonwebtoken");

function UserSignup(req, res) {
    console.log(req.body);
    const {full_name, email, password, phone, gender, address, state, city} =
        req.body;
    let checkentry = `SELECT * FROM user_signup where email='${email}'`;
    connection.query(checkentry, (error, records) => {
        if (error) {
            res.json({error: error.message, message: ""});
        } else {
            // Check user exists
            if (records.length > 0) {
                res.json({error: "User already exists", message: ""});
            } else {
                const insertCommand = `Insert Into user_signup(full_name,email,password,phone,gender,address,state,city) Values('${full_name}','${email}','${password}','${phone}','${gender}','${address}','${state}','${city}')`;
                // console.log(insertCommand);
                connection.query(insertCommand, (error) => {
                    if (error) {
                        res.json({error: error.message, message: ""});
                    } else {
                        res.json({error: "", message: "User Created"});
                    }
                });
            }
        }
    });
}

function UserLogin(req, res) {
    // console.log(req.body);
    let {email, password} = req.body;

    if (email === "" || password === "") {
        res.json({error: "All fields are required", message: ""});
    } else {
        //Authenticate User
        let checkUser = `SELECT * FROM user_signup WHERE email='${email}' and password=${password}`;
        // console.log(checkUser);
        connection.query(checkUser, (error, record) => {
            if (error) {
                res.json({error: error.message, message: ""});
            } else {
                // console.log(record);
                if (record.length === 0) {
                    res.json({error: "Invalid Email or Password", message: ""});
                } else {
                    // generate JWT
                    let payload = {
                        id: record[0].id,
                        email: record[0].email,
                        full_name: record[0].full_name,
                        phone: record[0].phone,
                        address: record[0].address,
                        state: record[0].state,
                        city: record[0].city,
                    };

                    let secret = "abc@123";
                    let expiry = 60 * 60 * 24;

                    let token = sign(payload, secret, {expiresIn: expiry});
                    res.json({error: "", message: "Login success", token: token});
                }
            }
        });
    }
}

function AdoptionRequest(req, res) {
    try {
        let {id} = req["userInfo"];
        let {
            first_name,
            last_name,
            age,
            email,
            mobile_no_1,
            mobile_no_2,
            city,
            state,
            postal_code,
            address_1,
            address_2,
            live_in,
            fence_yard,
            allergies,
            agreeable,
            home_activity_level,
            spend_alone_time,
            ref_1_ful_name,
            ref_1_email,
            ref_1_mobile,
            ref_1_address,
            ref_2_ful_name,
            ref_2_email,
            ref_2_mobile,
            ref_2_address,
            pet_id,
        } = req.body;

        const payload = [
            first_name,
            last_name,
            age,
            address_1,
            address_2,
            city,
            state,
            postal_code,
            mobile_no_1,
            mobile_no_2,
            email,
            live_in,
            fence_yard,
            spend_alone_time,
            home_activity_level,
            allergies,
            agreeable,
            ref_1_ful_name,
            ref_1_email,
            ref_1_address,
            ref_1_mobile,
            ref_2_ful_name,
            ref_2_email,
            ref_2_address,
            ref_2_mobile,
            pet_id,
            id,
        ];
        const insertCommand = `Insert Into applicant_details(first_name, last_name, age, address_1, address_2, city, state, postal_code, mobile_no_1, mobile_no_2, email, live_in, fence_yard, spend_alone_time, home_activity_level, allergies, agreeable, ref_1_ful_name, ref_1_email, ref_1_address, ref_1_mobile, ref_2_ful_name, ref_2_email, ref_2_address, ref_2_mobile, pet_id, user_id) Values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        connection.query(insertCommand, payload, (error) => {
            if (error) {
                res.json({error: error.message, message: ""});
            } else {
                let status = "Adopted";

                let updatePetStatus = `Update pets Set is_available=? Where id=?`;
                connection.query(updatePetStatus, [status, pet_id], (error) => {
                    if (error) {
                        res.json({error: error.message, message: ""});
                    }
                });

                res.json({error: "", message: "Form Submitted Successfully."});
            }
        });
    } catch (e) {
        res.json({error: e.message, message: ""});
    }
}

function MyAdoptions(req, res) {
    let {id} = req["userInfo"];

    let sqlCommand = `SELECT * FROM applicant_details Inner Join pets On applicant_details.pet_id=pets.id Where applicant_details.user_id=${id}`;
    connection.query(sqlCommand, (error, records) => {
        if (error) {
            res.json({error: error.message});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function FeedBack(req, res) {
    // console.log(req.body);
    // console.log(req.params);
    let {feedback} = req.body;
    let {petid} = req.params;
    let {id} = req["userInfo"];
    let insertCommand = `Insert Into feedback(user_id,pet_id,feedback) Values(${id},${petid},'${feedback}')`;
    connection.query(insertCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ""});
        } else {
            res.json({error: "", message: "Feedback Submitted Successfully!"});
        }
    });
}

function AdoptionStories(req, res) {
    let readCommand = `SELECT * FROM feedback Inner Join user_signup inner join pets On feedback.user_id=user_signup.id and feedback.pet_id=pets.id  `;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function UserData(req, res) {
    let {id} = req["userInfo"];
    let readCommand = `Select pets.* FROM applicant_details JOIN pets on applicant_details.pet_id = pets.id where user_id=${id} and adoption_status='Approved'`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function GetUserDetails(req, res) {
    let {id} = req["userInfo"];

    let sqlCommand = `SELECT * FROM user_signup where id=${id}`;
    connection.query(sqlCommand, (error, records) => {
        if (error) {
            res.json({error: error.message});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function EditUserDetails(req, res) {
    try {
        const {full_name, email, phone, gender, state, city, address} = req.body;
        const {id} = req.userInfo;
        console.log(req.body);
        // Update user profile in the database
        const updateProfileQuery = `UPDATE user_signup SET full_name='${full_name}', email='${email}', phone=${phone}, gender='${gender}', state='${state}', city='${city}', address='${address}' WHERE id=${id}`;
        console.log(updateProfileQuery);
        connection.query(updateProfileQuery, (error) => {
            if (error) {
                res.json({error: error.message, message: ""});
            } else {
                res.json({
                    error: "",
                    message: "Profile Updated successfully",
                });
            }
        });
    } catch (error) {
        console.error("Error updating profile:", error);
    }
}

function UserChangePassword(req, res) {
    try {
        let {password, newpassword, confirmpassword} = req.body;
        console.log(req.body);
        let {id} = req["userInfo"];
        // console.log(id);
        let checkOldPassword = `select * from user_signup where id=${id}`;
        connection.query(checkOldPassword, (error, record) => {
            if (error) {
                res.json({error: error.message, message: ""});
            } else {
                if (record[0].password != password) {
                    res.json({error: "Invalid Current Password.", message: ""});
                } else {
                    /* new code */
                    if (newpassword != confirmpassword) {
                        res.json({
                            error: "New Password and confirm Password must be same",
                            message: "",
                        });
                    } else {
                        let updatePassword = `Update user_signup Set password='${newpassword}' Where id=${id}`;
                        connection.query(updatePassword, (error) => {
                            if (error) {
                                res.json({error: error.message, message: ""});
                            } else {
                                res.json({
                                    error: "",
                                    message: "Password Updated successfully",
                                });
                            }
                        });
                    }
                }
            }
        });
    } catch (error) {
        res.json({error: error.message, message: ""});
    }
}

function UpdateUserProfile(req, res) {
    try {
        const {id} = req["userInfo"];
        const {full_name, email, phone, gender, state, city, address} = req.body;

        let updateProfile = `Update user_signup Set full_name=?, email=?, phone=?, gender=?, state=?, city=?, address=? Where id=?`;
        connection.query(updateProfile, [full_name, email, phone, gender, state, city, address, id], (error) => {
            if (error) {
                return res.json({error: error.message});
            }
            res.json({error: "", message: "Profile Updated successfully"});
        });
    } catch (e) {
        res.json({error: e.message});
    }
}

module.exports = {
    UpdateUserProfile,
    EditUserDetails,
    AdoptionStories,
    UserChangePassword,
    GetUserDetails,
    UserData,
    FeedBack,
    MyAdoptions,
    AdoptionRequest,
    UserSignup,
    UserLogin,
};
