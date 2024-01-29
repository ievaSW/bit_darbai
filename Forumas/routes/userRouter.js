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
    console.log(newUser);
    res.status(200).json(newUser);
})

router.get("/users", async (req, res) => {
const users = UserModel.find({ _id: "65b216cca717b4fd1fa3f480" })

res.status(200).json(users);
});

module.exports = router;
