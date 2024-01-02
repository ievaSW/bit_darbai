const  DrinkCategorySelect = document.getElementById("drink-category")
const  DrinkGlassTypeSelect= document.getElementById("drink-glasstype")
const  DrinkIngridientsSelect= document.getElementById("drink-ingridients")
const  SearchDrinkButton = document.getElementById("search")
const  LuckyDrinkButton = document.getElementById("lucky")
const  EnterDrinkInput = document.getElementById("Enter-drink")

const categoryArry = [];

// FETCHAI SELECTAMS

// Kokteiliu rusys
fetch("https://thecocktaildb.com/api/json/v1/1/list.php?c=list")
.then((response) => response.json())
.then((response) => console.log(response));
// .then((response) => parseDrinkCategory(response.drink));

function parseDrinkCategory(strCategory)
{
    let dynamicHTML = "";
    for (let category in strCategory){

        const category = drinks[zero];
        dynamicHTML += 
        `<select id="drink-category">${category}</select>`;
        categoryArry.push(category);
        
    }
    
}

// mano 

// // Kokteiliu stikliniu tipai
// fetch("http://thecocktaildb.com/api/json/v1/1/list.php?g=list")
// .then((response) => response.json())
// .then((response) => console.log(response));


// // Kokteiliu ingridjientai
// fetch("http://thecocktaildb.com/api/json/v1/1/list.php?i=list")
// .then((response) => response.json())
// .then((response) => console.log(response));




