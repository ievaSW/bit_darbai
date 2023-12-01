// pabaigoje dedamas ";"
// Kintamieji deklaruojami pasinaudojant DEKLARACIJA, KINTAMOJO PAVADINIMU IR REIKŠME
// Šiuo atveju LET yra deklaracija X kintamasis 10 reikšmė

let x = 10;

console.log(x);

x += 5;

console.log(x);

// jei tarp kabuciu irasoma, tai supranta kaip teksta, o jei be kabuciu - kaip skaiciu? 

// x += 5; tas pats kas x = x + 5;
// Aritmetiniai operatoriai: + - / %(liekana)
// typeof komanda - patikrina koks yra kintamojo duomenu tipas
// duomenu tipus, kondicine (condition - salyga) logika???? pasiziureti!!!!
console.log(typeof x);
// === operatorius reiskia LYGU (GRIEZTAS TIKRINIMAS)
// == OPERATORIUS NETIKRINANTIS DUOMENU TIPO, TIKRINANTIS REIKSME
// !== operatorius reiskia NELYGU (GRIEZTAS TIKRINIMAS)
// KINTAMOJO PAVADINIMAS TURI BUTI VIENAS ZODIS IR NEPRASIDETI SU SKAICIAIS
// tekstas yra indeksuojamas, is jo galima issitraukti bet kuria teksto dali



// 1. NamuDarbas
let Name = 'Ahsoka';
let lastname = 'Thano';


// Kodel negaliu name is mazosios raides kaip kintamajai naudoti?

if ((lastname.length) > (Name.length)) {
    console.log(Name);
}
else {
    console.log(lastname);
}

// 2. NamuDarbas
let Vardas = 'Uogiene ';
let Pavarde = 'Uoga.';
let birthdate = 1998;
let year = 2023;

console.log("Mano vardas yra " + Vardas + Pavarde + " Man yra " + ((year)-(birthdate) + " metai."));


// 3. NamuDarbas

let z = "Rosario";
let k = "Dawson";

let inicialai = (z[0] + k[0]);
console.log(inicialai);

// 4. NamuDarbas

let n = 'Bingo';
let m = 'Pradingo';
let mn = n[2] + n[3] + n[4] + m[5] + m[6] + m[7];
console.log(mn);

// 5. NamuDarbas 

let data = "2023-11-29";



















 













