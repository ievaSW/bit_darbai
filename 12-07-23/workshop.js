const word = document.querySelector(".input-text")
const button = document.querySelector(".btn")
const result = document.querySelector(".result")


button.addEventListener("click", countVowel)

function countVowel() {
    let countVowel = 0
    let wordValue = word.value.toLowerCase();
    console.log(wordValue)

    for (let i = 0; i < wordValue.length; i++) {
        let letter = wordValue[i];
        if (letter.match(/([a,e,o,u,i])/)) {
            countVowel++
        }
    }
    result.innerHTML = `${word.value.toLowerCase()} has ${countVowel} vowels`
}