// const apsirasom inputu laukelius

async function register(){
    const promise = fecth("nurodom serverio adresas",{
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        // galim paduoti tik string tipo duomenis
        body: JSON.stringify({
            username: "Uoga",
            email:"siofunr@gmail.com",
            password: "1234168",
        }),

    });
}

register();