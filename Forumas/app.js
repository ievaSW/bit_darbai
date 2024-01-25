const express = require('express')
// const mongoose = require('mongoose');
const app = express();

// DB konfiguracija
require("./config/DBconnect.js").config();

// // Laikinai sukonfiguruoja, .env kintamuosius, kad jie butu musu matomi musu kurimo aplinkose
// require("dotenv").config();

// // process.env
// mongoose.connect(
//     process.env.MONGO_CONNECTION
//     .replace("__DB_USER", process.env.DB_USER)
//     .replace("__DB_USER_PASSWORD", process.env.DB_USER_PASSWORD)
//     .replace("__DB_HOST", process.env.DB_HOST)
//     .replace("__DB_NAME", process.env.DB_NAME));
// //Prisijungimas prie duomenų bazės pasinaudojant URL

// const db = mongoose.connection;


// //DB listeneriai, kurie nusako ar prie DB  buvo prisijungta sėkmingai ar ne
// db.on('error', (error)=>{//ERROR listeneris
// 	console.error('erroras: ' + error);
// })
// db.once('open', ()=>{//PRISIJUNGIMO listeneris
// 	console.info('Prie duomenų bazės buvo sėkmingai prisijungta')
// })


// Nustatymas EJS aktyvavimui
app.set("view engine", "ejs");

// Tarpinio routo sukūrimas
const publicRouter = express.Router();

//Statinių failų atvaizdavimas per /public aplanką
publicRouter.use(express.static("public"));

//Tarpinio routo panaudojimas, pasiekiamas per http://localhost/public endpoint'ą
app.use("/public", publicRouter); 


app.get('/', (req, res) => {
    res.render('index', {
        // siuos kintamuosius galima naudoti index.ejs faile
        title: "Forumo aplikacija",
        username: "ievaSW",
        list: ['Product1', 'Product2', 'Milk', 'Choclate']
    });
    //Kartu paduodami ir parametrai EJS failui
});


app.get('/register', (req,res)=>{
	res.render('register');
	//Register rout'as skirtas registracijai
})



app.listen(3000, () => {
    console.log('Server is running on port 3000,  http://localhost:3000');
})