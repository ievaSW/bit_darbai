// console.log("hello world!");

// cd - change directory komanda
// metodai (kaip CRUD)
// GET - 
// POST - 
// PUT - pakeicia informacija objekte
// DELETE - 
// express api biblioteka - isiinstaliuoti
// cors biblioteka taip pat turi buti
// BUTINAS .gitignore (/node_)
// Kas yra midleware funkcija?
// kaip patikrinti ar node teisingai isirase? node -v jei neatpazista meta errorus
// npm instal n stable -g(globaliai) - updatas nodui instaliuoti
// rodykle i virsu grazina komanda, kuri buvo paskutine

// 2024-01-08 1:25:37
// IMPORTAVIMAS MODULIO
// funkcijas importuojam su comanda require skliausteliuose nurodome kuriame js faile randasi toj pacioj direktorijoj kaip ir index.js(pagrindinis js failas, jo pavadinimas gali buti ir ne index) uztenka nurodyti failo pavadinima pvz. "math-module", kuriame yra aprasyta funkcija pvz sum.
//  const sum = require("./math-module");

// EKSPORTAVIMAS MODULIO
// Naudojames globaliu kintamuoju, kuris vadinasi MODULE(mazosiomis raidemis :) 
// 1. Tam, kad eksportuoti turime buti tam js faile, kur yra funkcija aprasyta.
// 2. Rasome module.exports = sum; (sum funkcijos pavadinimas)

// MODULIAI APRASYTI W3SCHOOLS IR PACIAM NODEJS.ORG!
// https://nodejs.org/docs/latest/api/
// http.createServer([options][, requestListener])

// GAUNAMAS HTTP MODULIS
// const http = require("http");

//I.  SERVERIO sukūrimo būdas
// // SUKURIAMAS KINTAMASIS SERVER
// const server = http.createServer((req, res)=>{
// if(req.url === "/"){
//     req.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5502");
//     res.write("tai yr amano atsakymas");
//     res.end();
// }
// if(req.url === "/check"){
//     res.write("tai yra amano atsakymas");
//     res.end();
// }
// });
// // SERVERIS PALEIDZIAMAS ANT PORTO 3000 (portas turi skirtis, nuo to, ant kurio )
// server.listen(3000);
// console.log("server is started on port 3000");
// // node index paleidzia sukurta serveri index.js faile
// // ctrl + c sustabdo aplikacija
// // paleidus serveri terminale nebeina vesti comandu, tuomet reikia sustabdyti ji, ir tada leis vel daryti dalykus


// BORDER PLATAS INDEX HTMLui
// const express = require("express");
// const cors = require("cors");
// const server = express();
// let countOfvisitors = 0;
// server.use(cors());


// server.get("/", (req, res)=>{
//     countOfvisitors++;
//     console.log("Buvo kreiptasi į serverį");
//     res.send("Labas pasauli!");
// })

// server.listen(3000, ()=>{console.log("Aplikacija pasileido, jos adresas:http//localhost:3000")
// } );
// const { log, logNoDate }= require("./logging");
// // const logNoDate = require("./logging").logNoDate;

// function kreipimasisIserveri(){
//     console.log("siunciamas atsakymas atgal");
//     log("Ivyko vartotojo kreipimasis i serveri");
//     logNoDate("Ivyko vartotojo kreipimasis i serveri");
// }
// kreipimasisIserveri();

const express = require("express");
const cors = require("cors");

// sukuriamas serveris, tik dar nepaleidziamas ant porto
// Pries pasileidziant serveri turime apsirasyti endpointus
// req ir res yra objektai
const server = express();
// nustatymai kiekvienam req
server.use(cors());
server.use(express.json());

const users = [];



server.get("/user/:Id", (req, res)=>{
    console.log("Method: " + req.method);
    console.log("URL: " + req.originalUrl);
    console.log("body: " + req.body);
    console.log("parameters: " + req.params.Id);
    console.log("Query: " + JSON.stringify(req.query));
    console.log("Buvo kreiptasi i serveri");
    res.send("Labas pasauli");
});

server.post("/.register", (req,res)=>{
    console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    users.push({
        id: users.length + 1,
        username: username,
        email: email,
        password: password,
    });

    res.send("atsakymas is serverio");
});

server.get("/users", (req,res)=>{
    res.send(users);

});

server.get("/users/:Id", (req,res)=>{
// jei yra gaunami duomenys, juos reikia validuoti
if(isNaN(+req.params.Id)){
    res.send("ID privalo buti skaicius");
}

    const selectedUser = users.find((user)=>user.Id === +req.params.Id);
    if(!selectedUser){
        res.send("Tokio vartotojo nera")
    } else{
        res.send(selectedUser);
    }
});
// dazniausiai kuriama ant 3000 porto
// listen priima du parametrus - porta ir callback funkcija(kas atsitiks kai pasileis serveris)
server.post("/prisijungimas",(req,res)=>{

});
server.listen(3000, ()=>{
    console.log("Aplikacija pasileido, jos adresas: http://localhost:3000/");
});


