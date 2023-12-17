// Ciklo for panaudojimas
// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
//1. 0 … 10
//2. 0 … 4
//3. 574 … 815
//4. 0 … 0
//5.-50 … 50
//6. -70 … 30


// 1.
const Numbers1 = [];

    for (let index = 10; index <= 15; index++) {
    let number = index
    Numbers1.push(number);
    } 

let sum = 0;

 for (let index = 0; index < Numbers1.length; index++) {
    console.log(index, 'zingsnis', "Suma=", sum);
    console.log(sum, "+", Numbers1[index])
    
    // sum = sum + Numbers1[index];
    sum += Numbers1[index];
    
 }   

 console.log(sum);



// 
// 
// let sumofnumbers = (
//      Numbers1[0] + 
//      Numbers1[1] + 
//      Numbers1[2] + 
//      Numbers1[3] + 
//      Numbers1[4] + 
//      Numbers1[5] + 
//      Numbers1[6] + 
//      Numbers1[7] + 
//      Numbers1[8] + 
//      Numbers1[9] + 
//      Numbers1[10]);

// console.log(sumofnumbers)



// let sum = Numbers1[0];
//     for (let index= 0; Numbers1[0] < Numbers1.length; index++) {
      
        
    // }
    
// let sum = 0;
// Numbers1.forEach(n=> sum +=n);
// console.log(sum);

const Numbers2 = [];

    for (let index = 0; index <= 4; index++) {
    let number = index
    Numbers2.push(number);
    } 


const Numbers3 = [];

    for (let index = 574; index <=815; index++) {
    let number = index
    Numbers3.push(number);
    } 
const Numbers4 = [];

    for (let index = -50; index <=50; index++) {
    let number = index
    Numbers4.push(number);
    } 
const Numbers5 = [];

    for (let index = -70; index <=30; index++) {
    let number = index
    Numbers5.push(number);
    } 
const Numbers6 = [];

    for (let index = 0; index <=0; index++) {
    let number = index
    Numbers6.push(number);
    } 




    