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
const UserNameInput = document.querySelector("reg-UserName"),
    EmailInput = document.querySelector("reg-Email"),
    Password = document.querySelector("reg-Password"),
    RegisterButton = document.querySelector("reg-Register");

async function register(){
    const promise = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            username: "Uoga",
            email:"uoga@gmail.com",
            password:"IG11R2D2",
        }),
    });

    const response = await promise.text();
    console.log(response);

}
register();
// server.post("/.register", (req,res)=>{
    // console.log(req.body);
    // const username = req.body.username;
    // const email = req.body.email;
    // const password = req.body.password;
    // res.send("atsakymas is serverio");