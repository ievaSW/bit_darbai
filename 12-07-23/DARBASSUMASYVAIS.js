//1. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GenerateArrayOfRandomLetters(min,max,length = 200)
{
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(rand(min,max));
    }
    return arr;
}
// for (let index = 0; index < 200; index++) {
    
    // console.log(String.fromCharCode(rand(65, 68)));


            
    
    
// for (let i = 0; i < 1; i++) {
    // const RandomLettersArray = 
        
    
    // console.log(RandomLettersArray);
    

    // console.log(RandomLettersArray)
    


// let RandomArryLetter = rand(65,68)
// console.log(RandomArryLetter)


// function GenerateArrayOfRandomNumbers(min,max,length = 200)
// {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(rand(min,max));
//     }
// return arr;
   
// }
// console.log(arr)
// // let atsitiktiniuRaidziuMasyvas = [A,B,C,D]
// // console.log(atsitiktiniuRaidziuMasyvas)