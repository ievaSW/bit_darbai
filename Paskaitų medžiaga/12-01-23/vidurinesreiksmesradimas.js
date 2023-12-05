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

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}