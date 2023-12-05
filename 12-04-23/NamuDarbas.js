// Naršyklėje nupieškite linija iš 400 “*”. 
// a.              Naudodami css stilių “suskaldykite” liniją taip, kad visos žvaigždutės matytųsi ekrane;
// b.              Programiškai “suskaldykite” žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 50 “*”; 
// 



// Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytųsi ekrane.


// Naudokite funkcija rand(). Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir jį atspausdinkite atitinkame h tage. Pvz skaičius 3- rezultatas: <h3>3</h3>
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

let randomNumber = rand(1,6);
console.log(randomNumber);

if (randomNumber===1)
{document.write("<h1>1</h1>");}
if (randomNumber===2)
{document.write("<h2>2</h2>");}
if (randomNumber===3)
{document.write("<h3>3</h3>");}
if (randomNumber===4)
{document.write("<h4>4</h4>");}
if (randomNumber===5)
{document.write("<h5>5</h5>");}
if (randomNumber===6)
{document.write("<h6>6</h6>");}


// Naudokite funkcija rand(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni.
let number = "";

for (i = 0; i < 3; i++) {
    number = Math.floor(Math.random() * 21) - 10;
    if (number < 0) document.write(`<p style="color:green;">${number}</p>`)
    if (number === 0) document.write(`<p style="color:red;">${number}</p>`)
    if (number > 0) document.write(`<p style="color:blue;">${number}</p>`)
}

// Sukurkite kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.

let String = ["An American in Paris<br>Breakfast at Tiffany<br>2001: A Space Odyssey<br>It's a Wonderful Life"]
for (i=0; i < String.length; i++){
    let strings = String[i].replace(/[A,a,E,e,I,i,U,u,O,o,Y,y]/gi,"")
    document.write(`Frazės be balsių:<br>${strings}`)
}
// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.

let Numbers = rand(0,300);
for (i=0; i > 300; i++){
    
}



// string.lenght = eilutes ilgi nurodo


// let randomNum1 = rand(-10,10);
// let randomNum2 = rand(-10,10);
// let randomNum3 = rand(-10,10);

// console.log(randomNum1,randomNum2,randomNum3)
// if (randomNum1<0 && randomNum2<0 && randomNum3<0);{
//     let new1 = randomNum1.toString();
//     let new2 = randomNum2.toString();
//     let new3 = randomNum3.toString();
//     console.log(new1,new2,new3);
//     if (new1<0 || new2<0 || new3<0)
//     document.write(`<green>${new1}${new2}${new3}</green>`);
//     else if (new1=0 || new2=0 ){
//     document.write(`<red>${new1}${new2}${new3}</red>`);}
//     else if (new1>0 && new2>0 && new3>0){
//     document.write(`<blue>${new1}${new2}${new3}</blue>`);
// } }




// if (randomNum1===0 && randomNum2===0 && randomNum3===0)
//     

// if (randomNum1>0 && randomNum2>0 && randomNum3>0)
//     

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 
// linija iš 400 “*” 
let n = 400;

// for( let i = 0; i < n; i++) {
//     let eilute = "*";
//     for (i===50){}
//     eilute += "<br>"
// }

// if (sk <= 10)
// {let rez = sk ** 2;
// console.log(`Skaicius: ${sk}`);