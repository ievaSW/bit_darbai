// let n = 10;

// for( let i = 0; i< n; i++){
//     for (let ii = 0; ii < n ; ii++){
//         if(i === ii)
//         document.write("<span style = \"color:red;>*</span>");
//     }
//     document.write("*<br>")
// }


const arr = [1,2,3,4,"petras"];

const obj = {
color: "red",
name : "petras",
};

console.log(obj.color);

const person = {
    firstname: "john",
    lastname: "dogh",
    age: 12,
    nationality: "british", 
    isMArried : false,
    kids: ["Sara","Boston"]
}

console.log(person.age);
console.log(`Hello my name${person.name}${person.lastname}, my age is ${person.age}, I am ${person.nationality} and my kids are ${person.kids.join(", ")}. And I am ${person.isMarried ? "Married": "not married"}.`)
// ? sterno operatorius

// console.log(greetingText);

// Tuscio objekto sukurimas
const gyvunas = {};
console.log(gyvunas);

gyvunas.animalType = "Liutas";
console.log(gyvunas);


console.log(gyvunas["animalType"]);
// pridedamas nauja savybe
gyvunas.occupation = "valdyti";

console.log(gyvunas);
// ctrl + pelytes mygtuka, parodo kur buvo sukurtas kintamasis ar objektas

const dog = {

}

for(let propertySAvybe in dog){

    console.log(`${propertySAvybe}: ${dog[propertySAvybe]}`);
}
// 
const people = [

    {name: "ona",
    lastname:"oniene",
    amzius: 26,
    nationality: "onumietas",
        
    },
    {name: "maryte",
    lastname:"mariene",
    amzius: 29,
    nationality: "mariumiestas",},
    {
        name: "uoga",
    lastname:"uogiene",
    amzius: 26,
    nationality: "uogumietas",
    }
]
// per cikla pasiemimas 
for (let person of people){
console.log(person.firstname, person.lastname);
}




