const  DrinkCategorySelect = document.getElementById("drink-category")
const  DrinkGlassTypeSelect= document.getElementById("drink-glasstype")
const  DrinkIngredientsSelect= document.getElementById("drink-ingridients")
const  SearchDrinkButton = document.getElementById("search")
const  LuckyDrinkButton = document.getElementById("lucky")
const  EnterDrinkInput = document.getElementById("Enter-drink")
const  DrinkPhotodynamicHTML = document.getElementById("cocktails")

const categoryArry = [];
const glassArray = [];
const ingredientsArry = [];

const drinkArry =[];




// 1. FETCHAI SELECTAMS
async function SelectElements() {
// Kokteiliu rusys
await fetch("https://thecocktaildb.com/api/json/v1/1/list.php?c=list")
.then((response) => response.json())
// .then((response)=>console.log(response.drinks))
.then((response) => {
    
AllSelects(response.drinks, DrinkCategorySelect, "strCategory")
// map metodas grazina is objektu masyvo objektu laukus str. (Sudeda su masyvus?)
categoryArry.push(...response.drinks.map((value)=>value.strCategory));
})

.catch((error)=> console.log(error));

// Kokteiliu stikliniu tipai
await fetch("http://thecocktaildb.com/api/json/v1/1/list.php?g=list")
.then((response) => response.json())
// .then((response)=>console.log(response.drinks))
.then((response) => AllSelects(response.drinks, DrinkGlassTypeSelect, "strGlass"))
.catch((error)=> console.log(error));

// Kokteiliu ingridientai
await fetch("http://thecocktaildb.com/api/json/v1/1/list.php?i=list")
.then((response) => response.json())
.then((response) => AllSelects(response.drinks, DrinkIngredientsSelect, "strIngredient1"))
// .then((response)=>console.log(response.drinks))
.catch((error)=> console.log(error));
}


function AllSelects (DrinkGlassIngredients, SelectelementHTML, strDrinkGlassIngredient){
let dynamicHTML = "";
for (const DrinkGlassIngredient of DrinkGlassIngredients)
        {
            dynamicHTML += 
            `<option>${DrinkGlassIngredient[strDrinkGlassIngredient]}</option>`;
        }
        SelectelementHTML.innerHTML = dynamicHTML;
}

async function Alldrinks()
{
    // https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
    for (const category of categoryArry){
        let dynamicURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_" )}`
        const response = await fetch(dynamicURL);
        const answerfromserver = await response.json();
        for (const drink of answerfromserver.drinks)
        {
            drinkArry.push(drink)
        }
        // console.log(answerfromserver);
        // drinkArry.push(answerfromserver);
        
    }
}

function AlldrinksHTML(drinks){

    let dynamicHTML = "";
    for(let drink of drinks){
        dynamicHTML += `
        <div class="drink">
            <img src="${drink.strDrinkThumb}" alt="photo"/>
            <p>${drink.strDrink}</p>
        </div>`
    }
    DrinkPhotodynamicHTML.innerHTML = dynamicHTML;
}


async function initialization()
{
    // selectu uzpildymas
await SelectElements();
        await Alldrinks();
        // console.log(drinkArry);
    // gerimu atvaizdavimas
    AlldrinksHTML(drinkArry);
}
initialization();


// MANO DARYTA PACIOS
// function DrinkCategory(categories)
// {
//     let dynamicHTML = "";

//     for (const category of categories){
// // console.log(category)
//         dynamicHTML += 
//         `<option>${category.strCategory}</option>`;
//         categoryArry.push(category.strCategory);
        
//     }
//     DrinkCategorySelect.innerHTML = dynamicHTML;
//     console.log(categoryArry);
// }




// function DrinkGlassType(glasses)
// {
//     let dynamicHTML = "";

//     for (const glass of glasses)
//     {
// // console.log(glasses)
//         dynamicHTML += 
//         `<option>${glass.strGlass}</option>`;
//         glassArray.push(glass.strGlass);
        
//     }
//     DrinkGlassTypeSelect.innerHTML = dynamicHTML;
// }



// function DrinkIngredients(ingredients){
//     let dynamicHTML = "";

//     for (const ingredient of ingredients)
//     {
// // console.log(ingredients)
//         dynamicHTML += 
//         `<option>${ingredient.strIngredient1}</option>`;
//         ingredientsArry.push(ingredient.strIngredient1);
        
//     }
//     DrinkIngredientsSelect.innerHTML = dynamicHTML;
// }




// 2. Visi gėrimų is API gavimas
// 3. Jų atvaizdavimas
// 4. Paieška pagal pavadinimą
// 5. Modalinio lango sukūrimas
// 6. Atsitiktinio kokteilio gavimas su mygtuku


