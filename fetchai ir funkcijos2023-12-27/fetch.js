// // Kaip parametrą nurodome nuorodą į kurią kreipiamės
// fetch("https://dog.ceo/api/breeds/image/random")
// // paspaudus ant nuorodos ismetama zinute

// // 1. gaunamas atsakymas is serverio. Atsakymas konvertuojams i teksta.
// .then((atsakymas) => atsakymas.json())

// // 2. iškoduotas atskaymas yra panaudojamas
// .then((atsakymas) => {document.write(`<img src="${atsakymas.message}"/>`)});
// // atsakyme, console.log(atsakymas) gauname duomenis tekstiniu formatu

// // kreipimasis į serverį užima laiko, dėl to yra du etapai 

// console.log("jau kreipėmės į serverį");
// console.log("jau kreipėmės į serverį");
// console.log("jau kreipėmės į serverį");

// Fetchus galima surasti NETWORK tabe, dev tools




// // NAMŲ DARBAS
// fetch("https://dog.ceo/api/breeds/list")
// .then((atsakymas) => atsakymas.json())
// .then((atsakymas) => {document.write(`

// <select>
// <option>${atsakymas.message}</option><select/>`)});
// // .then((atsakymas) => {console.log(atsakymas)});


// fetch("https://dog.ceo/api/breed/hound/images")
// .then((atsakymas) => atsakymas.json())
// .then((atsakymas) => {console.log(atsakymas)

// Kas yra end pointas?
// Kodel naudojant document.write console raso vilation?
// Kas yra parsinimas?
// Promisus papasakos veliaus :)


const breedSelectElement = document.getElementById("breeds-select")
const dynamicAlbumElement = document.getElementById("dogphoto-album")
const breedsArray = [];

fetch("https://dog.ceo/api/breeds/list/all")
.then((atsakymas) => atsakymas.json())
.then((atsakymas) => parseAllBreeds(atsakymas.message));

function parseAllBreeds(breeds)
{
let dynamicHTML = "";

for(let breed in breeds){

    const subBreeds = breeds[breed];
    if(subBreeds.length === 0)
    {
        dynamicHTML += `<option>${breed}</option>`;
        breedsArray.push(breed);
    }
    else{
        for(let subBreed of subBreeds)
        {
            dynamicHTML += `<option>${subBreed} ${breed}</option>`;
            breedsArray.push(`${subBreed} ${breed}`);
        }
    }
}
// pasitikrinimas ar veisliu masyvas susidare
// console.log(breedsArray)

// Isidedame(issikvieciame) funkcija, kuri generuoja sunu veisliu photo url
parseDogImages(breedsArray[5]);
breedSelectElement.innerHTML = dynamicHTML;
};


function parseDogImages(breed){
let dynamicURL = generateDynamicDogPhotosURL(breed);
// console.log(dynamicURL);
fetch(dynamicURL)
.then((response) => response.json())
.then((response) => generateDynamicDogPhotos(response.message));
}

function generateDynamicDogPhotosURL(breed)
{
let finalBreed = breed.split(" ").reverse().join("/");
return `https://dog.ceo/api/breed/${finalBreed}/images`;
} 

function generateDynamicDogPhotos(photosArray){
    // console.log(photosArray);
    let dynamicHTML = "";
    for(let photo of photosArray){
        dynamicHTML += 
        `<div class="col-4 g-2" id="dogphoto-album" >
        <img src="${photo}" alt="photo" style="width:100% />
    </div>`
    }
    dynamicAlbumElement.innerHTML = dynamicHTML;
}

breedSelectElement.addEventListener("change", ()=>{
    parseDogImages(breedSelectElement.value);
})


