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
const sessions = require("express-session");
const cors = require("cors");
const FileSystem = require("FileSystem")

// sukuriamas serveris, tik dar nepaleidziamas ant porto
// Pries pasileidziant serveri turime apsirasyti endpointus
// req ir res yra objektai

const server = express();
// nustatymai kiekvienam req

server.use(sessions({
    store: new FileStore({
        path:"./sessions",
        retries:3,
        ttl:3600,
    }),
    secret:"Banana bike",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    },
}));

server.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
}));
server.use(express.json());
// Useriu irasymas i data.json
async function writefile(obj){
    await FileSystem
}



// const users = [];
// const todos = [];

// Endpoint checking
server.get("/user/:Id", (req, res)=>{
    console.log("Method: " + req.method);
    console.log("URL: " + req.originalUrl);
    console.log("body: " + req.body);
    console.log("parameters: " + req.params.Id);
    console.log("Query: " + JSON.stringify(req.query));
    console.log("Buvo kreiptasi i serveri");
    // res.send("Labas pasauli");
});
// New user registration
server.post("/user/register", (req,res)=>{
    // su try catch butinas validuojant vartotojo duomenis
    try{
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
    // sesijos
    req.session.username = username;
    req.session.userId = data.users[data.users.length - 1].Id;

    res.send("Registracija sėkminga");
} catch(err){
    res.send("Netinkami duomenys");
}
});
// Get all users
server.get("/users", (req,res)=>{
    res.send(data.users);

});

server.get("/users/:Id", (req,res)=>{
    console.log(isNaN(+req.params.Id));
// jei yra gaunami duomenys, juos reikia validuoti
if(isNaN(+req.params.Id)){
    res.send("ID privalo buti skaicius");
}

    const selectedUser = data.users.find((user)=>user.Id === +req.params.Id);
    if(!selectedUser){
        res.send("Tokio vartotojo nera")
    } else{
        res.send(selectedUser);
    }
});
// dazniausiai kuriama ant 3000 porto
// listen priima du parametrus - porta ir callback funkcija(kas atsitiks kai pasileis serveris)
server.post("/user/login",(req,res)=>{
    // su req issiusti atsakymo negalima
    // postman.com patikrina endpointus
const username = req.body.username;
const password = req.body.password;
if(!username) return res.status(400).json({message:"Prašau įvesti tinkamą vartotojo vardą"});
if(!password) return res.status(400).json({message:"Prašau įvesti slaptažodį"});
const selectedUser = users.find((user)=>user.username.toLowerCase()===username.toLowerCase());
if(!selectedUser) return res.status(404).json({message:"Toks vartotojas neegzistuoja"});
if(selectedUser.password===password);
    // res.send("Sėkmingai prisijungėte prie sistemos");
res.status(200).json({ url: "http://127.0.0.1:5500/2024-01-10/Frontendas/todos.html"});
});

server.post("/todos", (req, res)=> {
    const {username, todo, todostate} = req.body;



    if(!username) return res.status(400).json({message: "Blogai įvestas username"});
    if(!todo) return res.status(400).json({message: "Blogai įvesta užduotis"});
    const selectedUser = users.find((user) => user.username.toLowerCase() === username);
    if(!selectedUser) return res.status(404).json({message: "Tokio vartotojo nėra"});
    const newTodo = {id: data.todos.length + 1, username, todo};
    todos.push(newTodo);
    res.status(201).json({message:"Nauja užduotis buvo sėkmingai prdėta", newTodo});

});
// visų uzduociu gavimas (todos sukurtas masyvas failo virsuje)
server.get("/todos", (req, res)=>{
    res.status(200).json(data.todos);
});
// konkretaus todo pagal id gavimas
server.get("/todos/:id", (req, res)=>{
    const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const existingTodo = todos.find((todo) => todo.id === id);
	if (!existingTodo) res.status(404).json({ message: "Įrašas buvo nerastas" });
	//404 - irasas nerastas
	else res.status(200).json(existingTodo); 
    //200 - sėkmingas atsakymas
    
});
// Todo atnaujinimas
server.put("/todos/:id", (req, res)=>{
   const id = +req.params.id;
   if(isNaN(id)) return res.status(400).json({message: "Įveskite tinkamą id"});

   const{username, todo} = req.body;
   const existingUser = username.find((user)=> user.username.toLowerCase()===username.toLowerCase());
   if(!existingUser) return res.status(404).json({message: "Toks vartotojas neegzistuoja"});

   const existingTodo = data.todos.findIndex((currentTodo)=>currentTodo.id===id);
    data.todos[existingTodo] = {...data.todos[existingTodo], todo, username};
    if(!existingTodo) return res.status(404).json({message: "Užduoties įrašas nebuvo rastas"});
    else res.status(201).json(data.todos[existingTodo]);

});
// Todo istrynimas
server.delete("/todos/:id", (req, res) => {
	const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const existingTodoIndex = data.todos.findIndex(
		(currentTodo) => currentTodo.id === id
	);
	if (existingTodoIndex === -1) {
		return res.status(404).json({ message: "Šalinamas įrašas nerastas" });
	} else {
		todos.splice(existingTodoIndex, 1);
		return res.status(204).json({ message: "Įrašas sėkmingai ištrintas" });
	}
});

server.listen(3000, ()=>{
    console.log("Aplikacija pasileido, jos adresas: http://localhost:3000/");
});


