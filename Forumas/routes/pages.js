// Šiti routai yra skirti atvaizduoti page'us

const express = require("express")
const router = express.Router();
const UserModel = require("../models/user");

router.get('/', (req, res) => {
    res.render('index', {
        // siuos kintamuosius galima naudoti index.ejs faile
        title: "Forumo aplikacija",
        username: "ievaSW",
        loggedIn: !!req.session.user?.loggedIn,
        message: req.query.message,
    });
    
});


router.get('/register', (req,res)=>{
    if (!!req.session.user?.loggedIn) {
		return res.redirect("/");
	}
	res.render('register', {
        title: "Forumo aplikacija",
        username: "ievaSW",
        loggedIn: !!req.session.user?.loggedIn,
    });
	//Register rout'as skirtas registracijai
})

router.get('/login', (req,res)=>{
    if (!!req.session.user?.loggedIn)
	return res.redirect("/");

    res.render('index', {
        title: "Forumo aplikacija",
        username: "ievaSW",
        loggedIn:!!req.session.user?.loggedIn,
        error: req.query.error,
    });
    //Login rout'as skirtas prisijungimui
});

// router.get("/my-profile", async (req, res) => {
// 	// Patikrinimas ar vartotojas yra prisijungęs
// 	if (!req.session.user?.loggedIn) {
// 		return res.redirect("/login?error=Jums reikia prisijungti prie paskyros");
// 	}

// 	const userData = await UserModel.findOne({ _id: req.session.user.id });
// 	console.log(userData);
// 	const config = {
//      title: "Forumo aplikacija",
//      username: username,
// 		profilePhoto: userData.profilePicture,
// 		loggedIn: !!req.session.user?.loggedIn,
// 		username: userData.username,
// 		email: userData.email,
// 		birthDate: userData.birthDate,
// 		postsCount: userData.postsCount,
// 		commentsCount: userData.commentsCount,
// 		likes: userData.likes,
// 		dislikes: userData.dislikes,
// 	};
// Atvaizduoja profilyje laukelius is DB
// 	res.render("profile", config);
// });

// BŪSIMI ROUTAI, TIKIUOSI :)

// Eksportuojame tiesiogiai
module.exports = router;