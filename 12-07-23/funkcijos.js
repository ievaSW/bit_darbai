function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

function GenerateArrayOfRandomNumbers(min,max,length = 10)
{
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(rand(min,max));
    }
    return arr;
}

const GenerateArrayOfRandomNumbers2 = (min,max,length = 10) =>{
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(rand(min,max));
    }
    return arr;
}


// Nekintamumas, geroji praktika, optimizavimas - tam tikru sistemu
const arr = GenerateArrayOfRandomNumbers(0,10,100);
console.log(arr);

let arr2 = arr;
console.log(arr);
console.log(arr2);


let sum = 0;
const arr4 = GenerateArrayOfRandomNumbers(0,10,100);
// senoji sintakse dirbant su masyvais
for (let i = 0; i < arr4.length; i++) {
    
    sum += arr[4]
}
let average = sum/arr4.length;
console.log(average)

const arr6 =  GenerateArrayOfRandomNumbers(1,1000,23);
sum = 0
// For of ciklas skirtas atlikti operacijas su visais masyvo elementais
// grazina einamojo masyvo elemento reiksme
for(let value of arr6){
    sum+= value;
}
average = sum / arr6.length;
console.log(average)
// For in ciklas - For os ciklas - skirtas atlikti operacijoms su visais masyvo, 

for (let index in arr6){
    sum += arr6[index]
}
let average1 = sum/arr6.length;
console.log(average)
// Filtras
const masyvas = [6,2,5,9,12];
let filteredValues = masyvas.filter((num)=>{
return num % 2 !== 0;
})
console.log(filteredValues);
console.log(masyvas);
// map atlieka operacijas su visais masyvo elementais
let masyvas2 = [6,2,5,9,12];
let modifikuotasMasyvas = masyvas2.map((value, index)=> value + index);

console.log(modifikuotasMasyvas);
// Reduce - grazina rezultata operacijos su visais elementais
 