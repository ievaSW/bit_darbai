// operatoriai js pasiziureti
// && || 
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

//  1.  Salyga. Generuojamas skaičius tarp 0 ir 99;
 
// Žemiau pateiktos kategorijos. Sugeneruotas skaičius papuola į
// Vieną iš šių kategorijų. Kiekviena kategorija turi savo operaciją
// Tą operaciją reikia atlikti. Operacijos rezultatas turi būti išspausdintas su console.log()
 
// Kategorija 1: 0 <= skaičius <= 10 - pakelti skaičių kvadratu ir atspausdinti
// Kategorija 2: 10 < skaičius < 20 - atspausdinti skaičių tokį koks jis yra;
// Kategorija 3: 20 <= skaičius < 50  ir Skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
// Kategorija 4: 20 <= skaičius < 50  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
// Kategorija 5: 50 <= skaičius ir skaičius dalinasi iš 3 be liekanos:
// Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
// Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;
//  
// Rezultatas:
// Iškritus bet kuriai sąlygai atspausdinti, kokią sąlygą skaičius atitiko
// PVZ: sugeneruotas skaičius: 28
// Skaičius - 28, Kategorija 3, operacijos rezultatas: 26

let sk = rand(0,10);
// 1.  Salyga. Generuojamas skaičius tarp 0 ir 10;

// ** operatorius kuris pakelia laipsniu

if (sk <= 10)
{let rez = sk ** 2;
console.log(`Skaicius: ${sk}\t`)}
