// Šiti routai yra skirti atvaizduoti page'us

const express = require("express")
const router = express.Router();
const UserModel = require("../models/user");
const PostModel = require("../models/post");

router.get('/', async (req, res) => {
    const posts = await PostModel.find({}).populate({
		path: "author",
		select: "username email",
    });
    res.render('index', {
        // siuos kintamuosius galima naudoti index.ejs faile
        title: "Forumo aplikacija",
        username: "ievaSW",
        loggedIn: !!req.session.user?.loggedIn,
        message: req.query.message,
        activeTab: "Home",
        error: req.query.error,
		posts,

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
        activeTab: "Register",
        error: req.query.error,
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


router.get("/my-profile", async (req, res) => {
	// Patikrinimas ar vartotojas yra prisijungęs
	if (!req.session.user?.loggedIn) {
		return res.redirect("/login?error=Jums reikia prisijungti prie paskyros");
	}

	const userData = await UserModel.findOne({ _id: req.session.user.id });
	console.log(userData);
		
	
	res.render("profile", {
        activeTab: "Profile",
        title: "Forumo aplikacija",
		profilePhoto: userData.profilePicture,
		loggedIn: !!req.session.user?.loggedIn,
		username: userData.username,
		email: userData.email,
		birthDate: userData.birthDate,
		postsCount: userData.postsCount,
		commentsCount: userData.commentsCount,
		likes: userData.likes,
		dislikes: userData.dislikes,
    });
});

router.get("/new-post", (req, res) => {
	if (!req.session.user?.loggedIn) {
		return res.redirect("/login?error=Jums reikia prisijungti prie paskyros");
	}
	
	res.render("new-post", {
        title: "Forumo aplikacija",
		activeTab: "",
		loggedIn: !!req.session.user?.loggedIn,
    });
	//Kartu paduodami ir parametrai EJS failui
});

router.get("/profile/:id", async (req, res) => {
	try {
		const userData = await UserModel.findOne({ _id: req.session.user.id });
		console.log(userData);
		
		res.render("foreign-profile", {
            activeTab: "Profile",
		    title: "Forumo aplikacija",
			profilePhoto: userData.profilePicture,
			loggedIn: !!req.session.user?.loggedIn,
			username: userData.username,
			email: userData.email,
			birthDate: userData.birthDate,
			postsCount: userData.postsCount,
			commentsCount: userData.commentsCount,
			likes: userData.likes,
			dislikes: userData.dislikes,
        });
	} catch (err) {}//turi buti messagge
});

router.get("/post/:id", async (req, res) => {
	try {
		const post = await PostModel.findOne({ _id: req.params.id }).populate(
			"author"
		);

		res.render("post", {
            title: "Forumo aplikacija",
			activeTab: "",
			loggedIn: !!req.session.user?.loggedIn,
			post,
			user: post.author,
        });
	} catch (err) {
		res.redirect("/?error=Nerastas irasas");
	}
});

// Eksportuojame tiesiogiai
module.exports = router;