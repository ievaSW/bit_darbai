// kiekvieno Routerio Struktūra prasideda taip pat. 

// Importuojame routerį su expressu
const express = require("express")
const router = express.Router();
const UserModel = require("../models/user");
const upload = require("../config/multer").upload;
const security = require("../utils/security");
const validate = require("../utils/validation/userValidation");

// Registracijos routas
router.post("/register", upload.single("img"), async (req,res) => {
   try{
    console.log(req.body);
    const {username, email, password, birthDate} = req.body;
    const fileName = require("../config/multer").lastFileName;

    if(!username || !email || !password || !birthDate)
    {
        return res.status(400).json({message:"Nebuvo pateikti visi duomenys!"})
    }

    //  const validationResult = validate(req.body);
    // if (validationResult !== "success") {
    //     return res.redirect("/register?error=" + validationResult);
    // }

    // vartotojo paieska pagal elektronini pasta arba varda
    // 1. budas

    // let existingUser = await UserModel.findOne({ username })

    // if (existingUser) {
    //     return res.redirect('/register?User with such username already exists');
    // }

    // existingUser = await UserModel.findOne({ email })
    // if (existingUser) {
    //     return res.redirect('/register?User with such username already exists');
    // }

    // 2. budas paieska per viena DB calsą
    // Ieskome pagal du kriterijus duomenu bazeje
    const existingUser = await UserModel.findOne({
        $or: [{email}, {username}]
    });
    if (existingUser) {
        if (username === existingUser.username){
            return res.redirect('/register?User with such username already exists');
        }
        if (email === existingUser.email){
            return res.redirect('/register?User with such username already exists');
        }
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
// Nustatoma sesijos parametrai - po registracijos i6 kart ivykdomas prijjungimas prie sistemos
    req.session.user = {
        id: newUser._id,
        loggedIn: true,
        // admin: newUser.username === "IevaSW",
    }

    console.log(newUser);
    res.status(200).json({ message: "Registracija sėkminga!"});
    } catch (err) {
    console.log(err);
    res.status(500).json({message: "Nepavyko prisiregistruoti!"});}
});

router.get("/users", async (req, res) => {
    if(!req.session.user.admin)
    return res.status(403).json({message:"Neturite tam teisių"})
    console.log(req.session.user)
    const users = await UserModel.find({});
    res.status(200).json(users);
});

router.post("/login", async (req, res) => {
    const {password, loginName} = req.body;
    const existingUser = loginName;
    // ? await UserModel.findOne({email: loginName}) 
    // : await UserModel.findOne({username: loginName})

    if(!existingUser) return res.redirect("/login");
    
    if(!security.isValidCredentials(password, existingUser.salt, existingUser.password))
    return res.redirect("/login");
    
    req.session.user = {
		id: existingUser._id,
		loggedIn: true,
		admin: existingUser.admin,
	};
	res.redirect("/register");
})

router.get("/logout", async (req, res) => {
	if (!req.session.user.loggedIn) {
		res.redirect("/");
	} else {
		req.session.destroy((err) => {
			if (err) {
				return res.redirect("/");
			} else {
				res.clearCookie("connect.sid");
				return res.redirect("/login");
			}
		});
	}
});

module.exports = router;
