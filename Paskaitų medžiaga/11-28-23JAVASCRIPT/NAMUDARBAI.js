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



// 1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
let Name = 'Ahsoka';
let lastname = 'Thano';


// Kodel negaliu name is mazosios raides kaip kintamajai naudoti?

if ((lastname.length) > (Name.length)) {
    console.log(Name);
}
else {
    console.log(lastname);
}

// 2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

let Vardas = 'Uogiene ';
let Pavarde = 'Uoga.';
let birthdate = 1998;
let year = 2023;

console.log("Mano vardas yra " + Vardas + Pavarde + " Man yra " + ((year)-(birthdate) + " metai."));


// 3. Sukurkite 2 kintamuosius. Jiems priskirkite vartotojo vardą ir pavardę. Sukurti trečią kintamąjį ‘inicialai’ sudarytą iš dviejų pirmųjų vardo ir pavardės raidžių.


let z = "Rosario";
let k = "Dawson";

let inicialai = (z[0] + k[0]);
console.log(inicialai);

// 4. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.


let n = 'Bingo';
let m = 'Pradingo';
let mn = n[2] + n[3] + n[4] + m[5] + m[6] + m[7];
console.log(mn);

// 5. Sukurti kintamąjį data ir priskirti jai datos reikšmę tokiu formatu: YYYY-MM-DD, pvz: 2023-11-07. sukurkite programą, kuri pasiima mėnesio reikšmę ir atspausdina gauto mėnesio pavadinimą.


let data = "2023-10-29";
let menuo = data[5] + data[6];
console.log(menuo)
 
if (menuo === "01") {console.log("Menuo yra Sausis")} 
else if(menuo === "02"){console.log("Menuo yra Vasaris")}
else if(menuo === "03"){console.log("Menuo yra Kovas")}
else if(menuo === "04"){console.log("Menuo yra Balandis")}
else if(menuo === "05"){console.log("Menuo yra Gegužė")}
else if(menuo === "06"){console.log("Menuo yra Birželis")}
else if(menuo === "07"){console.log("Menuo yra Liepa")}
else if(menuo === "08"){console.log("Menuo yra Rugpjūtis")}
else if(menuo === "09"){console.log("Menuo yra Rugsėjis")}
else if(menuo === "10"){console.log("Menuo yra Spalis")}
else if(menuo === "11"){console.log("Menuo yra Lapkritis")}
else if(menuo === "12"){console.log("Menuo yra Gruodis")}
else {console.log("Tokio mėnesio nėra")}

// 6. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

let sakinys = "Once upon a time in hollywood.";
let Kitassakinys = sakinys.toLowerCase();
let simbolis = "*";

Kitassakinys = Kitassakinys.replaceAll('o', simbolis);
console.log(Kitassakinys);

// 7. Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let kint1 = rand(0, 2),
	kint2 = rand(0, 2),
	kint3 = rand(0, 2),
	kint4 = rand(0, 2);

//     console.log(kint1, kint2, kint3, kint4);
//  if (kint1 = 0){
//     console.log("Nulių yra vienas");
//  }
let count0 = 0,
	count1 = 0,
	count2 = 0;

console.log(kint1, kint2, kint3, kint4);
//Operatorius ++ - prideda 1 prie nurodyto kintamojo
//Operatorius -- - atima 1 is nurodyto kintamojo
if (kint1 === 0) count0++;
else if (kint1 === 1) count1++;
else count2++;

if (kint2 === 0) count0++;
else if (kint2 === 1) count1++;
else count2++;

if (kint3 === 0) count0++;
else if (kint3 === 1) count1++;
else count2++;

if (kint4 === 0) count0++;
else if (kint4 === 1) count1++;
else count2++;

console.log(`Skaičių 0 - ${count0}\t 1 - ${count1}\t 2 - ${count2}`);

//8. Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let  SK1 = rand(0,4);
let  SK2 = rand(0,4);


if (SK1 > SK2) 
{console.log(SK1/SK2);}
else if (SK2 > SK1);
{console.log(SK2/SK1);} 
// skaicius.toFixed(2);
let atsakymas = ((SK1/SK2).toFixed(2));
console.log(atsakymas);

// UZUOTIS SU KATEGORIJOMIS (INTERVALAIS)
let a = rand(0,99);
 console.log(a);

 if (a <=10) {
   let rez = a**2;
    console.log(`Skaičius - ${a} Kategorija: 1, operacijos rezultatas:${rez}`);
    
 } else if (a>=11 && a<=19) {
    let rez = a;
    console.log(`Skaičius - ${a} Kategorija: 2, operacijos rezultatas:${rez}`);
 } else if (a>=20 && a<=49 && a % 2 === 0) {
    let desimtys = +a.toString()[0];
    let rez = a - desimtys;
    console.log(`Skaičius - ${a} Kategorija: 3, operacijos rezultatas:${rez}`);
 } else if (a>=20 && a<=49 && a % 2 !== 0) {
    let vienetai = a % 10;
    let rez = (a + vienetai)/2;
    console.log(`Skaičius - ${a} Kategorija: 4, operacijos rezultatas:${rez}`);

 } else if (a>=50 && a<=70 && a % 3 === 0) {
    let T = rand(65, 80),
        e = rand(65, 80),
        x = rand(65, 80),
        t = rand(65, 80);
    let Text = 
            String.fromCharCode(T)+
            String.fromCharCode(e)+
            String.fromCharCode(x)+
            String.fromCharCode(t);
    let rez = Text;

    console.log(`Skaičius - ${a} Kategorija: 5, operacijos rezultatas:${rez}`);
    //  Kategorija 6: 70 – 99 ir skaičiai pasibaigiantys 6 arba 7. Skaičių daliname iš 4
 } else if (a>=70 && a<=99) {
    let nesamone = +a.toString()[1];
    if (nesamone === 6 || nesamone === 7){

        let kitasrez = a/4;
        console.log(kitasrez);

    } else { console.log("skaicius nesibaigia 6 arba 7");}}
    else {
        console.log("skaičius netinkamas nei vienai kategorija");
    }
//9. Naudokite funkciją ir sukurkite tris kintamuosius kuriems
// priskirkite atsitiktines reikšmes nuo 0 iki 25.
// Raskite ir atspausdinkite vidurinę reikšmę.

let sk1 = rand(0, 25),
	sk2 = rand(0, 25),
	sk3 = rand(0, 25);

console.log(sk1, sk2, sk3);
let didziausias = Math.max(sk1, sk2, sk3),
	maziausias = Math.min(sk1, sk2, sk3);

if (sk1 !== didziausias && sk1 !== maziausias) console.log(sk1);
else if (sk2 !== didziausias && sk2 !== maziausias) console.log(sk2);
else console.log(sk3);

//10. Parašyti kodą, kuris generuotų atsitiktinį stringą iš
// lotyniškų mažųjų raidžių. Stringo ilgis: 3 simboliai.

// Funkcija String.fromCharCode(sk) - sukuria simboli is duoto skaiciaus pagal unikoda

console.log(
	String.fromCharCode(rand(97, 122)) +
	String.fromCharCode(rand(97, 122)) +
	String.fromCharCode(rand(97, 122))
);

// Duotas tekstas, kuriame yra išimti pasikartojantys raktiniai žodžiai ir pakeisti šabloninėmis reikšmėmis. Užduotis: pakeiskite visas šablonines reikšmes pagal pateiktas reikšmes:
// planet – earth
// star – Sun
// age –  4.54 billion years
// satellite –  moon
// 

let tekstas = "The planet {{planet}} is the third planet from the {{star}}. {{planet}} is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, {{planet}} formed over {{age}} ago. {{planet}}'s gravity interacts with other objects in space, especially the {{star}} and the {{satellite}}, {{planet}}'s only natural satellite."

let Earth = 'Earth';
    Sun = 'Sun',
    Age = '4.54 billion years',
    Satellite = 'Moon';

let NaujasTekstas = tekstas.replaceAll('{{planet}}', Earth);
let NaujasTekstas2 = NaujasTekstas.replaceAll("{{star}}", Sun)
let NaujasTekstas3 = NaujasTekstas2.replaceAll("{{age}}", Age)
let NaujasTekstas4 = NaujasTekstas3.replaceAll("{{satellite}}", Satellite)
console.log(NaujasTekstas4);

// 13. Sukurti du kintamuosius a = 5 bei b = 20; Nepasinaudojant trečiu kintamuoju, apkeisti šių dviejų kintamųjų reikšmes vietomis;

let A = 20,
    B = 30;
console.log(A, B)

if (A=10){
console.log(A+15,A);
}

// ne iki galo//

// 12.  Pasinaudodami jau pateikta rand funkcija, sukurkite kitą funkciją, kuri sugeneruoja atsitiktinį skaičių nuo minimalios iki maksimalios reikšmės su dviem skaitmenimis po kablelio.
function rand(min, max) {
    return ((Math.floor(Math.random() * (max - min + 1)) + min));
}

 console.log(rand(0,15));






















 













