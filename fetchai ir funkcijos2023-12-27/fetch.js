// // Kaip parametrą nurodome nuorodą į kurią kreipiamės
// fetch("https://dog.ceo/api/breeds/image/random")
// // paspaudus ant nuorodos ismetama zinute

// // 1. gaunamas atsakymas is serverio. Atsakymas konvertuojams i teksta.
// .then((atsakymas) => atsakymas.json())

// // 2. iškoduotas atskaymas yra panaudojamas
// .then((atsakymas) => {document.write(`<img src="${atsakymas.message}"/>`)});
// // atsakyme, console.log(atsakymas) gauname duomenis tekstiniu formatu

// // kreipimasis į serverį užima laiko, dėl to yra du etapai 

// console.log("jau kreipėmės į serverį");
// console.log("jau kreipėmės į serverį");
// console.log("jau kreipėmės į serverį");

// Fetchus galima surasti NETWORK tabe, dev tools


// Kas yra end pointas?

// NAMŲ DARBAS
fetch("https://dog.ceo/api/breeds/list")
.then((atsakymas) => atsakymas.json())
.then((atsakymas) => {console.log(atsakymas)});


// fetch("https://dog.ceo/api/breed/hound/images")
// .then((atsakymas) => atsakymas.json())
// .then((atsakymas) => {console.log(atsakymas)


 



