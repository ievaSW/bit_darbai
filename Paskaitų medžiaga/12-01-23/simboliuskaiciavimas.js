// 7. Sukurkite keturis kintamuosius kuriems sugeneruokite
// atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra
// nulių, vienetų ir dvejetų.

let kint1 = rand(0, 2),
	kint2 = rand(0, 2),
	kint3 = rand(0, 2),
	kint4 = rand(0, 2);

let count0 = 0,
	count1 = 0,
	count2 = 0;

console.log(kint1, kint2, kint3, kint4);
//Operatorius ++ - prideda 1 prie nurodyto kintamojo
//Operatorius -- - atime 1 is nurodyto kintamojo
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