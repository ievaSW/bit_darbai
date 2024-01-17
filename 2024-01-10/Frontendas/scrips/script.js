// fetchas

// async function callServer(){
// try{
// const promise = await fetch("http://localhost:3000/");
// const response = await promise.text();
// console.log(response);
// } catch(err) {
// console.log(err);
// }
// }

// callServer();






// const apsirasom inputu laukelius

// async function register(){
//     const promise = fecth("nurodom serverio adresas",{
//         method: "POST",
//         headers: {
//             "content-Type": "application/json"
//         },
//         // galim paduoti tik string tipo duomenis
//         body: JSON.stringify({
//             username: "Uoga",
//             email:"siofunr@gmail.com",
//             password: "1234168",
//         }),

//     });
// }

// register();

// APSIRASOM NAUDOJAMUS LAUKELIUS PER ID
const UserNameInput = document.querySelector("#reg-UserName"),
    EmailInput = document.querySelector("#reg-Email"),
    PasswordInput = document.querySelector("#reg-Password"),
    RegisterButton = document.querySelector("#reg-Register");

// REGISTRACIJOS APSIRASYMAS
async function register(){
    const promise = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            username: UserNameInput.value,
            email: EmailInput.value,
            password: PasswordInput.value,
        }),
    });

    const response = await promise.text();
    console.log(response);
   
}

RegisterButton.onclick = register;
// register();

// LOGINO APSIRASYMAS
// id="logUserName" type="text" class="form-control" placeholder="User Name">
// <input id="logPassword" type="text" class="form-control" placeholder="Password">
// <div id="logButton" class="btn btn-warning">Login</div>

const LoginUserNameInput = document.getElementById("logUserName");
const LoginPasswordInput = document.getElementById("logPassword");
const LoginButton = document.getElementById("logButton");

async function login(){

        fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: LoginUserNameInput.value,
            password: LoginPasswordInput.value,
        }),

    })
    .then((response) => response.json())
    .then((response) => (window.location.href = response.url))
    .catch((error) => console.log(error));
    
    // jei nenudirectina i kita puslapi laikinas sprendimas, jis tikrai nerekomanduojamas
    //  window.location.href = "http://127.0.0.1:5500/2024-01-10/Frontendas/todos.html";
   
}
LoginButton.onclick = login;
