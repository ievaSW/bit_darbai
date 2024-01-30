const express = require('express');
const session = require('express-session');
const MongoStore = require("connect-mongo");
const pagesRouter = require("../routes/pages");
const userRouter = require("../routes/userRouter");
const bodyParser = require("body-parser");

function config(app){
// Nustatymas EJS aktyvavimui
app.set("view engine", "ejs");
// Tarpinio routo sukūrimas
const publicRouter = express.Router();

// Middleware - skirtas gauti JSON formato duomenis iš kliento registracijos
app.use(express.json());
app.use(bodyParser.urlencoded());
// sesiju nustatymai
app.use(session({
    secret: process.env.SESSIONS_SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    store: MongoStore.create({
        mongoUrl: require("./DBconnect").mongoUrl,
        collectionName: "sessions"
    }),
    cookie:{
        // kiek laiko trunka sesija, nuo paskutinio prisijungimo
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
        
}))


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