// Šiti routai yra skirti atvaizduoti page'us

const express = require("express")
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        // siuos kintamuosius galima naudoti index.ejs faile
        title: "Forumo aplikacija",
        username: "ievaSW",
    });
    //Kartu paduodami ir parametrai EJS failui
});


router.get('/register', (req,res)=>{
	res.render('register');
	//Register rout'as skirtas registracijai
})

router.get('/login', (req,res)=>{
    res.render('login');
    //Login rout'as skirtas prisijungimai
})

// Eksportuojame tiesiogiai
module.exports = router;