const people = [];

let currentNumeration = 1;


const Firstname = document.getElementById("Firstname");
const Lastname = document.getElementById("Lastname");
const Age = document.getElementById("Age");
const Nationality = document.getElementById("Nationality");
const Delete = document.getElementById("Delete");
const Add = document.getElementById("Add");
// const removeElementInput = document.querySelector("#number");

Add.addEventListener("click", ()=>{
    // e.preventDefault();
    const person = {};
    person.Firstname = Firstname.value;
    person.Lastname = Lastname.value;
    person.Age = Age.value;
    person.Nationality = Nationality.value;
    person.number = currentNumeration;

    // nullifyInputValues();
    currentNumeration++;
   //Naujai sukurtas objektas pridedamas prie masyvo
   people.push(person);
   
    // console.log(person);
    AddPeopleToTable(people);
});


function AddPeopleToTable(people) {

    let dynamicHTML = ` `;
    for(let person of people){
    dynamicHTML += `
    <tr>
        <td>${person.number}</td>
        <td>${person.Firstname}</td>
        <td>${person.Lastname}</td>
        <td>${person.Age}</td>
        <td>${person.Nationality}</td>
    </tr>
        `
}
const tbody = document.querySelector("table tbody");
tbody.innerHTML = dynamicHTML;     
}

// VEIKIA!!! BET NEISSAUGO REIKSMIU REFRESHINUS







// ATKOMENTINTI KOMENTARUS PASKUI!!!!!!

// // patikrinimas ar ivestos reiksmes yra tuscios
// if(!person.Firstname || 
//     !person.Lastname || 
//     !person.Age || 
//     !person.Nationality) 
// {   alert("Prasome užpildyti visus laukus")
//     // console.log("laukas tuščias");
//     // return;
// }

// function validateName(Name){
// // boolean reiksme
// let isValid = true;


// if (!Name){
//     isValid = false;
// }
// if (!/[a-z][A-Z]/.test(Name))
// {
//     isValid = false;
// }
// return isValid;
//     // ar apskritai egzistuoja
//     // ar turi skaiciu
//     // ar turi spec simboliu
//     // validacija su regexu
//     // /[a-z][A-Z]/.test()
//     // ideti stringa i pati visu
//     // grazina boolean true arba false
// }

// function validateAge(age){
//     if(!age) {
//         isValid = false;
//     }
//     if (isNaN(parseInt(age))){
//         isValid = false;
//     }

//     return;
// }
   



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



