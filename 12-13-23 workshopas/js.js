const   heigth = document.querySelector(".height"),
        weight = document.querySelector(".weight"),
        calculate = document.querySelector(".btn"),
        result = document.querySelector(".result"),
        reset = document.querySelector(".btn-reset");

  calculate.addEventListener("click", calBMI);

  function calBMI(e) {
    // nerestartuoja narsykles naudojant submit mygtuka
    e.preventDefault()
    // apsibreziam tai ka naudosim funkcijoje
    // ne hardcodinti, reiskia pasikopijuoti :)
    // jei meta ... po zodziais galimai yra gramatine klaida
    
    let heightValue = heigth.value
    console.log(heightValue);

    let weightValue = weight.value
    console.log(weightValue);

   if (heigth.value === "" || isNaN(heightValue))
   {
    return result.innerHTML = "Provide a Valid height";

   } else if(!weight.value === "" || isNaN(weightValue))
   {
    return result.innerHTML = "Provide a valid weight"
   }

   else {
    let heightinmetersValue = heightValue/100;

    console.log(heightinmetersValue);
    // ka daro math.pow?

    let bmi = (weightValue/Math.pow(heightinmetersValue, 2)).toFixed(2);
    console.log(bmi);
   
// `` backtikai
reset.style.display = "block";
    if(bmi < 18.5) {
    showResult(`Underweight: <span>${bmi}</span>`, "orange")
    }
    if(bmi > 18.5 && bmi < 25) {
    showResult(`Normal: <span>${bmi}</span>`, "green")
    }
    if(bmi > 25 && bmi < 30) {
    showResult(`Overweigth: <span>${bmi}</span>`, "yellow")
    }
    if(bmi > 30) {
    showResult(`Obese: <span>${bmi}</span>`, "red")
    }
    }
    }

// spalvos pritaikymas elementams
function showResult(value, color)
  {
    
    result.style.backgroundColor = color
    return result.innerHTML = value
  }

//   kazkur none pasidaryti, kazkur stringai :))))

// padaryti, kad tik paspaudus calculate atsiranda <p> ir reset mygtukas


reset.addEventListener("click", resetValues);

function resetValues(){
    heigth.value = "",
    weight.value = "",
    result.innerHTML = "";
        // console.log(heigth)
        // console.log(weight)
     
    reset.style.display = "none";
    }
   
    reset.style.display = "none";
    

