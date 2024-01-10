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
// cls - istrina komandas, kurios parasytos



const express = require("express");
// sukuriamas serveris
const server = express();
// GET metodas
server.get("/", (req, res)=>{
    console.log("Buvo kreiptasi į serverį");
    res.send("Labas pasauli!");
})

// nurodomas serverio portas
// nenaudoti tu paciu portu, kurie
server.listen(3000, ()=>{console.log("Aplikacija pasileido, jos adresas:http//localhost:3000")
} )

// POST
// 
