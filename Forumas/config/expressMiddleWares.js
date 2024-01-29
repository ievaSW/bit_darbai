const express = require('express')

const pagesRouter = require("../routes/pages");
const userRouter = require("../routes/userRouter");

function config(app){
// Nustatymas EJS aktyvavimui
app.set("view engine", "ejs");
// Tarpinio routo sukūrimas
const publicRouter = express.Router();

// Missleware - skirtas gauti JSON formato duomenis iš kliento registracijos
app.use(express.json());


//Statinių failų atvaizdavimas per /public aplanką
publicRouter.use(express.static("public"));
//Tarpinio routo panaudojimas, pasiekiamas per http://localhost/public endpoint'ą
app.use("/public", publicRouter);

// Puslapių routai
app.use(pagesRouter);
app.use("/api/user", userRouter);

// register endpointoo pasiekimas per localhost:3000/api/user/register

}

module.exports = { config };