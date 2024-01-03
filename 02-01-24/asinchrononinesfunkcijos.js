const skaicius = 5;
try {
    skaicius++;
} catch(error){
    console.log(error);
}
console.log("Labas");

// Pažadas
const pazadas = new Promise((resolve, reject)=>{
    // prasidejo uzklausa i serveri"
setTimeout(()=>resolve("zinute is serverio)", 1000);
console.log("pasibaige uzklausa i serveri");)
}).then((atsakymas)=>console.log(atsakymas))


