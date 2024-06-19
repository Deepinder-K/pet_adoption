const connection = require("../connection");
const {sign} = require("jsonwebtoken");
let nodeMailer = require('nodemailer');

/* ------------------------------------------------------------------------ */

/* email */
async function sendEmailToUser(toEmail, emailSubject, htmlMessage) {
    let username = 'vmm.testing.email@gmail.com';
    let password = 'nqxdyzymymmvnkxe';

    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: username,
            pass: password
        }
    });

    let mailOptions = {
        from: username,
        to: toEmail,
        subject: emailSubject,
        html: htmlMessage
    };

    try {
        return await transporter.sendMail(mailOptions);
    } catch (e) {
        return e;
    }
}

/* ------------------------------------------------------------------------ */

function AddCategory(req, res) {
    const {categoryName} = req.body;
    const insertCommand = `Insert Into category(categoryName) Values('${categoryName}')`;
    connection.query(insertCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ""});
        } else {
            res.json({error: "", message: "Category Added"});
        }
    });
}

function ReadCategory(req, res) {
    let readCommand = `Select * from category`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function DeleteCategory(req, res) {
    // console.log(req.params);
    let {id} = req.params;
    let deleteCommand = `Delete from category where category_id=${id}`;
    connection.query(deleteCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ""});
        } else {
            res.json({error: "", message: "Category Deleted"});
        }
    });
}

//Authentication
function AdminLogin(req, res) {
    // console.log(req.body);
    let {email, password} = req.body;
    if (email == "" || password == "") {
        res.json({error: "All fields are required", message: ""});
    } else {
        //Authenticate User
        let checkUser = `SELECT * FROM admin WHERE email='${email}' and password='${password}'`;
        // console.log(checkUser);
        connection.query(checkUser, (error, record) => {
            if (error) {
                res.json({error: error.message, message: ""});
            } else {
                // console.log(record);
                if (record.length == 0) {
                    res.json({error: "Invalid Email or Password", message: ""});
                } else {
                    //generate JWT
                    //payload -data store,secret use to generate token so that no one can sccess easily(alphanemeric string),expiry
                    let payload = {
                        id: record[0].id,
                        email: record[0].email,
                        fullName: record[0].fullName,
                    };
                    let secret = "abc@123";
                    let expiry = 60; //60 sec

                    let token = sign(payload, secret, {expiresIn: expiry});

                    res.json({error: "", message: "Login success", token: token});
                }
            }
        });
    }
}

function AdminChangePassword(req, res) {
    //console.log(req.adminInfo);//{id:1,email:'',fullName:'',...}
    // console.log(req.body);
    try {
        let {password, newpassword, confirmpassword} = req.body;
        let {id} = req["adminInfo"];

        let checkOldPassword = `select * from admin where id=${id}`;
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
                        let updatePassword = `Update admin Set password='${newpassword}' Where id=${id}`;
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

function SubAddCategory(req, res) {
    // console.log(req.body);
    const {category, categoryName} = req.body;
    const insertCommand = `Insert Into subcategory(name,category_id) Values('${categoryName}',${category})`;
    connection.query(insertCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ""});
        } else {
            res.json({error: "", message: "SubCategory Added"});
        }
    });
}

function ReadSubCategory(req, res) {
    let readCommand = `Select * from subcategory`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function DeleteSubCategory(req, res) {
    console.log(req.params);
    let {id} = req.params;
    let deleteCommand = `Delete from subcategory where subcategory_id=${id}`;
    connection.query(deleteCommand, (error) => {
        if (error) {
            res.json({error: error.message, message: ""});
        } else {
            res.json({error: "", message: "Category Deleted"});
        }
    });
}

function GetBreedByCategory(req, res) {
    // console.log(req.params);
    let {id} = req.params;
    let fetchBreeds = `select * from subcategory where category_id=${id}`;
    connection.query(fetchBreeds, (e, records) => {
        if (e) {
            res.json({error: e.message, message: ""});
        } else {
            res.json({error: "", message: "Data fetched", records: records});
        }
    });
}

function AddPetsDetails(req, res) {
    // console.log(req.body);
    const {
        petName,
        color,
        weight,
        breed,
        gender,
        age,
        vaccinated,
        friendly,
        children,
        info,
    } = req.body;
    const insertPets = `Insert Into pets(name,color,weight,subcategory_id,gender,age,vaccinated,friendly_to_other_pets,children_friendly,about) Values('${petName}','${color}','${weight}',${breed},'${gender}','${age}','${vaccinated}','${friendly}','${children}','${info}')`;
    // console.log(insertPets);
    connection.query(insertPets, (error) => {
        if (error) {
            res.json({error: error.message, message: ""});
        } else {
            res.json({error: "", message: "Details of Pets Added"});
        }
    });
}

function GetPetsDetails(req, res) {
    let readCommand = `SELECT * FROM pets`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function GetPetsHome(req, res) {
    let readCommand = `SELECT pets.*, subcategory.name AS subcat_name FROM pets INNER JOIN subcategory ON pets.subcategory_id=subcategory.subcategory_id Where pets.is_available='Available' Limit 2`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function GetPetsGallery(req, res) {
    let readCommand = ``;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function UploadPetPhoto(req, res) {
    // console.log(req.body);
    // console.log(req.files);
    const {petid} = req.body;
    const {photo} = req.files;
    const serverPath = `public/images/pets/${photo.name}`;
    const dbPath = `/images/pets/${photo.name}`;
    photo.mv(serverPath, (error) => {
        if (error) {
            res.json({error: error.message, message: ""});
        } else {
            let updateCommand = `Update pets set photo='${dbPath}' where id=${petid}`;
            connection.query(updateCommand, (error) => {
                if (error) {
                    res.json({error: error.message, message: ""});
                } else {
                    res.json({error: "", message: "Photo Uploaded"});
                }
            });
        }
    });
}

function UploadGallery(req, res) {
    const {galleryid} = req.body;
    const {photo} = req.files;

    const serverPath = `public/images/gallery/${photo.name}`;
    const dbPath = `/images/gallery/${photo.name}`;
    photo.mv(serverPath, (error) => {
        if (error) {
            res.json({error: error.message, message: ""});
        } else {
            const insertCommand = `Insert Into pet_gallery(pet_id, photo) Values(${galleryid},'${dbPath}')`;
            connection.query(insertCommand, (error) => {
                if (error) {
                    res.json({error: error.message, message: ""});
                } else {
                    res.json({error: "", message: "Photo Uploaded"});
                }
            });
        }
    });
}

const ReadHomePageSubCategory = (rows) => {
    return new Promise((resolve, reject) => {
        let counter = 0;
        for (let i = 0; i < rows.length; i++) {
            let readSubCategory = `SELECT p.*, c.categoryName, s.name AS subCategoryName  FROM pets p
                                         JOIN subcategory s ON p.subcategory_id = s.subcategory_id
                                         JOIN category c ON s.category_id = c.category_id
                                         WHERE p.is_available='Available' And c.category_id = ${rows[i].category_id}`;
            connection.query(readSubCategory, (error, row) => {
                rows[i].subCategory = row;
                counter++;
                if (counter === rows.length) {
                    resolve(rows);
                }
            });
        }
    });
};

function ReadHomePageCategory(req, res) {
    try {
        let readCategory = `SELECT * FROM category ORDER BY category_id DESC LIMIT 4`;
        connection.query(readCategory, async (error, records) => {
            if (error) {
                res.json({error: error.message});
            } else {
                await ReadHomePageSubCategory(records);
                res.json({error: "", records});
            }
        });
    } catch (e) {
        res.json({error: e.message});
    }
}

function ReadPetGalleryImages(req, res) {
    try {
        let {petId} = req.params;
        let readCategory = `SELECT * FROM pet_gallery Where pet_id=${petId}`;
        connection.query(readCategory, async (error, records) => {
            if (error) {
                res.json({error: error.message});
            } else {
                res.json({error: "", records});
            }
        });
    } catch (e) {
        res.json({error: e.message});
    }
}

function GetPendingAdoptionRequests(req, res) {
    let readCommand = `SELECT applicant_details.*, pets.name, pets.color, pets.weight, pets.photo, pets.gender, pets.age, pets.vaccinated, pets.friendly_to_other_pets, pets.children_friendly, pets.about FROM applicant_details Inner Join pets On applicant_details.pet_id=pets.id WHERE adoption_status='Pending'`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function GetApprovedAdoptionRequests(req, res) {
    let readCommand = `SELECT applicant_details.*, pets.name, pets.color, pets.weight, pets.photo, pets.gender, pets.age, pets.vaccinated, pets.friendly_to_other_pets, pets.children_friendly, pets.about FROM applicant_details Inner Join pets On applicant_details.pet_id=pets.id WHERE adoption_status='Approved'`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function GetRejectedAdoptionRequests(req, res) {
    let readCommand = `SELECT applicant_details.*, pets.name, pets.color, pets.weight, pets.photo, pets.gender, pets.age, pets.vaccinated, pets.friendly_to_other_pets, pets.children_friendly, pets.about FROM applicant_details Inner Join pets On applicant_details.pet_id=pets.id WHERE adoption_status='Rejected'`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records});
        }
    });
}

function ApproveRejectAdoptionRequests(req, res) {
    try {
        let {id, status} = req.params;

        let getEmail = `Select * From applicant_details Where id=?`;
        connection.query(getEmail, [id], async (error, record) => {
            if (error) {
               return  res.json({error: error.message});
            }

            const {email, first_name, last_name} = record[0];
            const emailSubject = 'Pet Adoption Status';

            let htmlMessage = `<h4>Dear ${first_name} ${last_name},</h4><br>`;
            htmlMessage += `<p>I trust this message finds you well.</p><br>`
            htmlMessage += `<b>Your Pet Adoption Request Has Been ${status}!</b><br>`;
            htmlMessage += `<p>If you have any questions or need further assistance, please feel free to contact us at +91 95016 15016</p><br>`;
            htmlMessage += `<p>Best regards,</p>`;
            htmlMessage += `<b>United Pets</b>`;
            htmlMessage += `<p>support@unitedpets.com</p>`;


            await sendEmailToUser(email, emailSubject, htmlMessage);

            let updateStatus = `Update applicant_details Set adoption_status='${status}' Where id=${id}`;
            connection.query(updateStatus, (error) => {
                if (error) {
                    res.json({error: error.message});
                } else {
                    res.json({error: "", message: 'Status Updated'});
                }
            });
        });
    } catch (e) {
        // console.log(e.message)
        res.json({error: e.message});
    }
}

function DeletePet(req, res) {
    const {petId} = req.params;

    const deleteSql = `Delete From pets Where id=?`;
    connection.query(deleteSql, [petId], (error) => {
        if (error) {
            res.json({error: error.message});
        } else {
            res.json({error: "", message: 'Pet Deleted'});
        }
    });
}

function UpdatePet(req, res) {
    const {petId} = req.params;
    const {name, color, weight, gender, age, vaccinated, friendly, children, about} = req.body;

    const updateSql = `Update pets Set name=?, color=?, weight=?, gender=?, age=?, vaccinated=?, friendly_to_other_pets=?, children_friendly=?, about=? Where id=?`;
    connection.query(updateSql, [name, color, weight, gender, age, vaccinated, friendly, children, about, petId], (error) => {
        if (error) {
            res.json({error: error.message});
        } else {
            res.json({error: "", message: 'Pet Details Updated'});
        }
    });
}

module.exports = {
    UpdatePet,
    DeletePet,
    GetRejectedAdoptionRequests,
    GetApprovedAdoptionRequests,
    ApproveRejectAdoptionRequests,
    GetPendingAdoptionRequests,
    ReadPetGalleryImages,
    GetPetsHome,
    GetPetsGallery,
    ReadHomePageCategory,
    UploadGallery,
    UploadPetPhoto,
    GetPetsDetails,
    AddPetsDetails,
    GetBreedByCategory,
    DeleteSubCategory,
    ReadSubCategory,
    SubAddCategory,
    AdminChangePassword,
    AdminLogin,
    AddCategory,
    ReadCategory,
    DeleteCategory,
};
