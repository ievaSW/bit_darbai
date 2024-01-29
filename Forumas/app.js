
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


// Pats express yra objektas, kuris turi defaultinę funkcija.
const express = require('express')
const app = express();

// DB konfiguracija
require("./config/DBconnect.js").config();
// Express middleware konfiguracija
require("./config/expressMiddleWares.js").config(app);

// // Failu ivesties konfiguracija
// const storage = multer.diskStorage({

// })

app.listen(3000, () => {
    console.log('Server is running on port 3000,  http://localhost:3000');
})

// Folderių pavadinimai (MVC)
// M - modules
// V - views
// C - controllers