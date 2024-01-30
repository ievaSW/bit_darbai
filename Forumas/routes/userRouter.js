// kiekvieno Routerio Struktūra prasideda taip pat. 

// Importuojame routerį su expressu
const express = require("express")
const router = express.Router();
const UserModel = require("../models/user");
const upload = require("../config/multer").upload;
const security = require("../utils/security");

router.post("/register", upload.single("img"), async (req,res) => {
    console.log(req.body);

    const {username, email, password, birthDate} = req.body;
    const fileName = require("../config/multer").lastFileName;

    if(!username || !email || !password || !birthDate)
    {
        return res.status(400).json({message:"Nebuvo pateikti visi duomenys!"})
    }

    const salt = security.generateSalt();
	const hashedPassword = security.hashPassword(password, salt);


    const newUser = new UserModel({
       username,
       email,
       salt,
       birthDate,
       password: hashedPassword,
       profilePicture: `http://localhost:3000/public/images/${fileName}`
    });
    
    // userio issaugojimas uztrunka laiko, todel naudojame asynchroninę callbackinę funkciją.
    await newUser.save();
// Nustatoma sesija vartotojui - po registracijos i6 kart 
    request.session.user = {
        id: newUser._id,
        loggdeIn: true,
        admin: newUser.username === "IevaSW",

    }

    console.log(newUser);
    res.status(200).json(newUser);
})



router.get("/users", async (req, res) => {
    console.log(req.session.user.admin)
    if(!req.session.user.admin)
    return res.status(403).json({message:"Neturite tam teisių"})
    const users = UserModel.find({});

res.status(200).json(users);
});

router.post("/login", async (req, res) => {
    const {password, loginName} = req.body;
    const existingUser = loginName.includes("@") 
    ? await UserModel.findOne({email: loginName}) 
    : UserModel.findOne({username: loginName})

    if(!existingUser) return res.redirect("/login");
    // pasitikrinti
if(!security.isValidCredentials(password, salt.existingUser.salt, existingUser.password))

{return res.redirect("/login");}
    // console.log(existingUser)
})

module.exports = router;
