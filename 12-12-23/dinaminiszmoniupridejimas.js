const people = [];

let currentNumeration = 1;
// Ar reikalinga pirma eilute siam uzdaviniuj?
const button = document.getElementById("Pridėti");
const Vardas= document.getElementById("Vardas");
const Pavarde = document.getElementById("Pavarde");
const Amzius = document.getElementById("Amzius");
const Tautybe = document.getElementById("Tautybe");
const Delete = document.getElementById("Delete");

button.addEventListener("click", ()=>{
    const person = {};
    person.Vardas = document.getElementById("Vardas").value;
    person.Pavarde = document.getElementById("Pavarde").value;
    person.Amzius = document.getElementById("Amzius").value;
    person.Tautybe = document.getElementById("Tautybe").value;
    person.number = currentNumeration;
   //Naujai sukurtas objektas pridedamas prie masyvo
    people.push(person);
    currentNumeration++;
    console.log(person);
    AddPeopleToTable(people);
});

// patikrinimas ar ivestos reiksmes yra tuscios
if(!person.firstName || 
    !person.Pavarde || 
    !person.Amzius || 
    !person.Tautybe) 
{   alert("Prasome užpildyti visus laukus")
    // console.log("laukas tuščias");
    return;
}

function validateName(Name){
// boolean reiksme
let isValid = true;


if (!Name){
    isValid = false;
}
if (!/[a-z][A-Z]/.test(Name))
{
    isValid = false;
}
return isValid;
    // ar apskritai egzistuoja
    // ar turi skaiciu
    // ar turi spec simboliu
    // validacija su regexu
    // /[a-z][A-Z]/.test()
    // ideti stringa i pati visu
    // grazina boolean true arba false
}

function validateAge(age){
    if(!age) {
        isValid = false;
    }
    if (isNaN(parseInt(age))){
        isValid = false;
    }

    return 
}
   

function AddPeopleToTable(people){

    let dynamicHTML = ` `;
for(let person of people){
    dynamicHTML += `
<tr>
    <td>${person.number}</td>
    <td>${person.Vardas}</td>
    <td>${person.Pavarde}</td>
    <td>${person.Amzius}</td>
    <td>${person.Tautybe}</td>
</tr>
    `
}
const tbody = document.querySelector("table tbody");
tbody.innerHTML = dynamicHTML;     
}

// Ar negalima  istrinti nusirodzius indeksa?

// Delete.addEventListener("click", ()=>{
//     const person = {};
//     person.Vardas = document.getElementById("Vardas").value;
//     person.Pavarde = document.getElementById("Pavarde").value;
//     person.Amzius = document.getElementById("Amzius").value;
//     person.Tautybe = document.getElementById("Tautybe").value;
//     person.number = currentNumeration;
//    //Naujai sukurtas objektas atimamas prie masyvo
//     people.pop(person);
//     currentNumeration--;
//     console.log(person);
//     DeletePeoplefromTable(people);
// });


// function DeletePeoplefromTable(people){

//     let dynamicHTML = ` `;
// for(let person of people){
//     dynamicHTML -= `
// <tr>
//     <td>${person.number}</td>
//     <td>${person.Vardas}</td>
//     <td>${person.Pavarde}</td>
//     <td>${person.Amzius}</td>
//     <td>${person.Tautybe}</td>
// </tr>
//     `
// }
// const tbody = document.querySelector("table tbody");
// tbody.innerHTML = dynamicHTML;     
// }



