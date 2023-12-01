let imone = "UAB \"Artaleka\"";
let imone1 = "MB \t\"Artaleka\"";

console.log(imone)
console.log(imone1)

// \t\ tabuliacinis simbolis TAB
// \n - new line symbol
let imoniuSarasas = imone + '\n' + imone1;
imoniuSarasas = ``

// duomenu tipo keitimas

let skaiciusTekstas = '-12.7';
// parseint funkcija gauna tik sveikuosius skaicius
skaicius = parseInt(skaiciusTekstas);
console.log(skaicius);

// unary operator: 

skaicius = +skaiciusTekstas;
console.log(skaiciusTekstas);
// number funkcija:
skaicius = Number(skaiciusTekstas);
console.log(skaiciusTekstas);

// Math
skaicius = 12.8;
// apvalinimas
let roundedSkaicius = Math.round(skaicius);

console.log('suapvalinta reiksme: ' + roundedSkaicius);

roundedSkaicius = Math.floor(skaicius);
console.log('suapvalinta reiksme i mazaja puse:' + roundedSkaicius);
roundedSkaicius = Math.ceil(skaicius);
console.log('suapvalinta reiksme i didziaja puse:' + roundedSkaicius);

// skaiciaus konvertavimas i string duomenu tipa:

let valiuta = skaicius.toFixed(2);
console.log(valiuta);

let tekstasSkaicius = skaicius + '';
console.log(typeof tekstasSkaicius + ', jo reiksme: ' + tekstasSkaicius);

console.log(typeof tekstasSkaicius + ', jo reiksme: ' + tekstasSkaicius);
tekstasSkaicius = skaicius.toString();
tekstasSkaicius = String(skaicius);