// 1. Sukurti funkciją, kuri generuoja x kiekį atsitiktinių skaičiu nuo min iki max reikšmės
// 2. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
// 3. Išrūšiuoti String'ų masyvą didėjančia tvarka;
// 4. Išrūšiuoti tą patį masyvą mažėjančia tvarka;
// 5. Sukurti masyvą iš 100 elementų, sudarytą iš skaičių nuo -100 iki 200;
// 6. Patikrinti ar skaičius 68 egzistuoja masyve. Ar egzistuoja skaičius - praneškite pasinaudodami console.log()
// 7. Išrūšiuoti masyvą didėjančia tvarka;
// 8. Išrūšiuoti masyvą mažėjančia tvarka;
// 9. Atrasti didžiausią bei mažiausią reikšmes skaičių masyve.
// 10. Apskaičiuoti visų skaičių vidurkį;

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const genarateRandomNumbersArray = (length, min, max) => {
    const arr =[];
    for( let i = 0; i < length; i++)
    {
        arr.push(rand(min,max));
    }
    return arr;
}
// kodel arr type of yra undifiend?
const genarateString = (lenght) => {
    let str ="";{
        for(let i=0; i < lenght; i++)
        {str += String.fromCharCode(rand(65,90))}
    }
    return str;
}

const stringArray = [];
for (let i=0; i < 100; i++) {
    stringArray.push(genarateString(4));
}

 console.log(stringArray);
 // isrusiuoja pagal pirmasias raides nuo A iki Z
 stringArray.sort();

 console.log(stringArray)
 // isrusiuoja pagal pirmasias raides nuo Z iki A
 stringArray.sort().reverse();

console.log(stringArray)

// 5
// funkcija generuoja random numbers, bet stringus? jei funkcija generuotu random number tipo reiksmes ar sortas java scripte butu suprantamas kitaip?
const numberArray = genarateRandomNumbersArray(10,-100,200)
console.log(numberArray)
// 6
if (numberArray.includes(68))
{console.log(`68 egzistuoja duomenų masyve`)}
else {console.log(`68 neegzistuoja duomenų masyve`)}
// 7


// // const genarateNumber = (lenght) => {
//     let number = ;{
//         for(let i=0; i < lenght; i++)
//         {str += String.fromCharCode(rand(48,57))}
//     }
//     return str;
// // }
// rusiuoja skaicius nuo maziausio iki didziausio
numberArray.sort((num1,num2) => {return num1-num2;});
console.log(numberArray);

// let arry = [1,2,3,6,8,7]
// console.log(typeof arry)
// console.log(typeof arry[0])
// masyvas yra objektas pagal type of
numberArray.reverse()
console.log(numberArray)

// let max = 1000, min = -1000;

// for (let value of numbersArray){
//     if(value > max){
//         max === value
//     }
//     else if(value < max){
//         min === value
//     }
// }
//  console.log(`Minimali masyvo reikšmė`)
//  console.log(`Maximali masyvo reikšmė`)
let max = Math.max(...numberArray);
let min = Math.min(...numberArray);
console.log(`Maksimali reikšmė ${max}`)
console.log(`Minimali reikšmė ${min}`)

// 10 
// arejaus elementu skaiciu suma
// padalinta is reiksmiu skaiciaus, kuris manau yra indekso skaicius ????arba length???
// console.log(numberArray.length)
// padalinti is numberArray.length
// console.log(sumOfarrnumbers)
sum = 0
for(let value of numberArray){
    sum+= value;
}
// console.log(sum)

let average = sum/numberArray.length;
console.log(`Generuojamų skaitinių reikšmių vidurkis yra ${average}`);

// NAMU DARBAI

//1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
// 2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio elemento pozicija masyve bei  reikšmė;
// 3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
// 4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;
// 5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti mažėjančia tvarka.
// 6. Kiekvienai stringų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
// 7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abėcėlę didėjančia tvarka
// 8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Sugeneruokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS; Išveskite, kiek kartų reikėjo generuoti reikšmes kol buvo gautas toks žodis.
// 9. Išrikiuokite masyvą priešinga nei abecelės tvarka
// // 10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'


// PATIKRRINTI PIRMA IR PASUKTINE RAIDE AR JOS LYGU A/

// stringArray jau sukūrėm paskaitoje :)
//2 
// let strA = stringArray.includes(if (darnepirmaraide[0] === "A" && darnepirmaraide[3] === "A") {
    // console.log("pirma ir paskutine raide A")
// })

console.log(stringArray[9])
const darnepirmaraide = stringArray[9]

console.log(darnepirmaraide[0])
console.log(darnepirmaraide[3])


    if (darnepirmaraide[0] === "A" && darnepirmaraide[3] === "A") {
        console.log("pirma ir paskutine raide A")
    }

    for(let darnepirmaraide of stringArray){
        if (darnepirmaraide[0] === "A") {
            console.log("pirma ir paskutine raide A")
        }
        console.log(darnepirmaraide)
    }

// stringArray.filter((value)) => 






// let max = Math.max(...numberArray);

// if (numberArray.includes(68))
// {console.log(`68 egzistuoja duomenų masyve`)}
// // else {console.log(`68 neegzistuoja duomenų masyve`)}
    
// console.log()

// // 3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'

// const firstletersXMK = stringArray.filter(checkletters);

// function checkletters(stringArray) {
//     for (let value of stringArray[])

// }






