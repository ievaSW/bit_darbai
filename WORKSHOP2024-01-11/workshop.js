const empty = "";
const UpperCase = "ABCDEFGHJKLMNOPRSTUVZY"
const LowerCase = "abcdefghijklmnoprstuvzy"
const Numbers = "1234567890"
const symbols = "!@#$%^&*()_+={}[]:;><"

const passwordlength = document.getElementById("passwordlength")
const passworduppercase = document.getElementById("passworduppercase")
const passwordLowerCase = document.getElementById("passwordLowerCase")
const IncludeNmbers = document.getElementById("IncludeNmbers")
const IncludeSymbols = document.getElementById("IncludeSymbols")
const submit = document.getElementById("submit")
const copyButton = document.getElementById("copyButton")


submit.addEventListener("click",(lenght)=>{
    let generatedpassword = empty
    UpperCase.cheked ? (generatedpassword+= UpperCase) : ""
    LowerCase.cheked ? (generatedpassword+= LowerCase) : ""
    Numbers.cheked ? (generatedpassword+= Numbers) :""
    symbols.cheked ? (generatedpassword+= symbols) : ""

    password.value = generatedpassword(passwordlength.value, generatedpassword)
})

function generatepasswordfunction(){
    let pass = ""
    for (let index = 0; index < length; index++) {
        pass+= generatedpassword.charAt(
            Math.floor(Math.random()* initialPassword.length
            )
        );
        
    }
    return pass;
}

// tabnine extension

copyButton.addEventListener("click", ()=>{
    navigator.clipboard.writeText(password.value)
    alert("Password Copied")

    // if(password.value===""){
    //     alert("Enter password")
    // } else{
    //     password.select()
    //     document.execCommand("copy")
    //     alert ("password copied")
    // }
})