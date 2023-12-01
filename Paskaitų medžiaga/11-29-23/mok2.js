let eilerastis = 'Ruosesi ozys ganytis, zole zlemsti, miske vartytis';
console.log(eilerastis);

// ieskomas nuo pradzios
let ozysPosition = eilerastis.indexOf('ozys');
console.log(ozysPosition);

// ieskoma nuo pabaigos
ozysPosition = eilerastis.lastIndexOf('ozys');
console.log(ozysPosition);

// Pasinaudojant gauta teksto pozicija, galime gauti zodi ozys su substring( ) metodu
let ozysText = eilerastis.substring(ozysPosition, ozysPosition + 6);

console.log(ozysText);

// teksto pakeitimas kitu kintamuoju

let kitasGyvunas = 'avinas';

let kitasEilerastis = eilerastis.replaceAll('ozys', kitasGyvunas);
console.log(kitasEilerastis);

kitasEilerastis = eilerastis.replace('ozys', 'suo');
console.log(kitasEilerastis);

let eilerastisDidziosiomis = eilerastis.toUpperCase();
console.log(eilerastisDidziosiomis);

let eilerastisMazosiomis = eilerastis.toLowerCase();
console.log(eilerastisMazosiomis);

// teksto gavimas slice metodu:
// pirmas parametras - pradzios indeksas, antrasis parametras - subteksto indeksas

let text = "Apple, Banana, Kiwi";
//          01234567890123

let part = text.slice(0, -6);
// 

console.log(part);

part = text.slice(-10);
console.log(part)

// let eilerastis = 'Ruosesi ozys ganytis, zole zlemsti, miske vartytis';
 if(eilerastis.includes('nesamone'))
 {
    console.log('kintamajame eilerastis yra zodis: ganytis');
 }
 else {
    console.log('kintamajame eilerastis tokio zodzio nera');
 }
// namu darbui reikes
 function rand(min, max)
 {
    return Math.floor(Math.random() * (max-min + 1)) + min;
 }

 let skaicius = rand(97, 12);
 console.log





