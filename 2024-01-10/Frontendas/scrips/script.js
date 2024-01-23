
async function checkSession(){
    const promise = await fetch("http://localhost/server/user/session-check", {
        credentials: "include",
    });
    const answer = await promise.json();
    if (answer.sessionValid) {
        window.location.href = "http://localhost/2024-01-10/Frontendas/todos.html";
    }

}
checkSession();

// APSIRASOM NAUDOJAMUS LAUKELIUS PER ID
const UserNameInput = document.querySelector("#reg-UserName"),
    EmailInput = document.querySelector("#reg-Email"),
    PasswordInput = document.querySelector("#reg-Password"),
    RegisterButton = document.querySelector("#reg-Register");

// REGISTRACIJOS APSIRASYMAS
async function register(){
    const promise = await fetch("http://localhost/server/users/register", {
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


// LOGINO APSIRASYMAS
// id="logUserName" type="text" class="form-control" placeholder="User Name">
// <input id="logPassword" type="text" class="form-control" placeholder="Password">
// <div id="logButton" class="btn btn-warning">Login</div>

const LoginUserNameInput = document.getElementById("logUserName");
const LoginPasswordInput = document.getElementById("logPassword");
const LoginButton = document.getElementById("logButton");

async function login(){

        fetch("http://localhost/server/user/login", {
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
