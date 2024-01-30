const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
const mongoUrl = process.env.MONGO_CONNECTION
    .replace("__DB_USER", process.env.DB_USER)
    .replace("__DB_USER_PASSWORD", process.env.DB_USER_PASSWORD)
    .replace("__DB_HOST", process.env.DB_HOST)
    .replace("__DB_NAME", process.env.DB_NAME)


const app = express();



function config(){
// Laikinai sukonfiguruoja, .env kintamuosius, kad jie butu musu matomi musu kurimo aplinkose


// process.env
mongoose.connect(
    process.env.MONGO_CONNECTION
    .replace("__DB_USER", process.env.DB_USER)
    .replace("__DB_USER_PASSWORD", process.env.DB_USER_PASSWORD)
    .replace("__DB_HOST", process.env.DB_HOST)
    .replace("__DB_NAME", process.env.DB_NAME));
//Prisijungimas prie duomenų bazės pasinaudojant URL

const db = mongoose.connection;


//DB listeneriai, kurie nusako ar prie DB  buvo prisijungta sėkmingai ar ne
db.on('error', (error)=>{//ERROR listeneris
	console.error('erroras: ' + error);
})
db.once('open', ()=>{//PRISIJUNGIMO listeneris
	console.info('Prie duomenų bazės buvo sėkmingai prisijungta')
})
}

module.exports = {config, mongoUrl};