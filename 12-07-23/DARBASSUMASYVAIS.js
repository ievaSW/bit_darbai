//1. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function GenerateArrayOfRandomLetters(min,max,length = 200)
// {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(rand(min,max));
//     }
//     return arr;
// }
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

// Ketvirta uzduotis is 2023-12-07 uzduočių
const array1 = [], array2 = [];
function generaUniqueArray(lenght, min, max){

    const arr = [];
    while(arr.length<length){
        let randomNumber = rand(min,max);
        if (!arr.includes(randomNumber)){
            arr.push(randomNumber);
        }
        return arr;
}
 const array1 = generaUniqueArray (100, 100, 999),
    array2 = generaUniqueArray (100,100,999)

}

// while(array1.length<100){
//     let randomNumber = rand(100,999);
//     if (!array2.includes(randomNumber)){
//         array1.push(randomNumber);
//     }
// }

