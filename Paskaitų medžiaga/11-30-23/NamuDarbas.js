function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }


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
        console.log(`skaičius netinkamas nei vienai kategorija`);
    }

    

    
 
 