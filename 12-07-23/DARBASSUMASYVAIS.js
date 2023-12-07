//1. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function GenerateArrayOfRandomNumbers(min,max,length = 200)
{
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(rand(min,max));
    }
return arr;
   
}
console.log(arr)
// let atsitiktiniuRaidziuMasyvas = [A,B,C,D]
// console.log(atsitiktiniuRaidziuMasyvas)