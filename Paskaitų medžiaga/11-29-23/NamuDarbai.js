function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
//  9. Namu darbas
let R2D2 = rand(0,25);
let C3PO = rand(0,25);
let BB8 = rand(0,25);

console.log(R2D2)
console.log(C3PO)
console.log(BB8)


if (condition) {
    
}

 // 8. Namu darbas

let  a = rand(0,4);
let  b = rand(0,4);

console.log(a);
console.log(b);

if (a > b) 
{
    console.log(a/b);
    }
else if (b > a);
{
    console.log(b/a);

// } else if (a,b === 0) {
    // console.log("dalyba negalima is nulio")
} 

let atsakymas = Math.abs((a/b));
console.log(atsakymas);

// 6. Namu darbas
let sakinys = "Once upon a time in hollywood.";

let Kitassakinys = sakinys.toLowerCase();
 
let simbolis = "*";

Kitassakinys = Kitassakinys.replaceAll('o', simbolis);
console.log(Kitassakinys);

























