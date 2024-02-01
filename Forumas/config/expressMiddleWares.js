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
publicRouter.use(express.static("public"));

// Middleware - skirtas gauti JSON formato duomenis iš kliento registracijos
app.use(express.json());
app.use(bodyParser.urlencoded());

// sesiju nustatymai
app.use(
    session({
    secret: process.env.SESSIONS_SECRET_KEY,
    resave: false,
    saveUninitialized:false,
    // Sesiju saugojimas duomdazej
    store: MongoStore.create({
        mongoUrl: require("./DBconnect").mongoUrl, //mongodb+srv://__DB_USER:__DB_PASSWORD@__DB_HOST/__DB_NAME
        collectionName: "sessions"
    }),
    cookie:{
        // kiek laiko trunka sesija, nuo paskutinio , nurodomas milisekundemis
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },


        
}))

//Tarpinio routo panaudojimas, pasiekiamas per http://localhost/public endpoint'ą
app.use("/public", publicRouter);

app.use(`/tinymce`, express.static("node_modules/tinymce"));

//Puslapių rout'ai
app.use(pagesRouter);

app.use("/api/user", userRouter);
// app.use("/api/post", postRouter);


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