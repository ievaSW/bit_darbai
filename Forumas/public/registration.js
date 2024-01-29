// const usernameInput = document.getel()
// pasirenkam elementus is registracijos formos

// registrationButton.onclick = async() =>{
//     // funkcijos veikimo tikrinimas

// // Apsirasom duomenis, kuriuos įves į ragistracijos formą
// const data = new FormData();
//     data.append(usernameInput.value);
//     data.append(usernameInput.value);
//     data.append(usernameInput.value);
//     data.append(usernameInput.value);

//     const promise = await fetch (" http:localhost:3000/api/user/register",{ )
//  method: "POST",
// body: data,

// }

// Multer papildomas modulis darbui su failais

const usernameInput = document.getElementById("username"),
	birthDateInput = document.getElementById("birthDate"),
	passwordInput = document.getElementById("password"),
	emailInput = document.getElementById("email"),
	profilePhoto = document.getElementById("profilephoto"),
	registerButton = document.getElementById("registerButton");

registerButton.onclick = async () => {
	console.log("veikiu!");
	const data = new FormData();
    // pridedamos reiksmes is inputu laukeliu
	data.append("username", usernameInput.value);
	data.append("birthDate", birthDateInput.value);
	data.append("password", passwordInput.value);
	data.append("email", emailInput.value);
	data.append("img", profilePhoto.files[0]);

	const promise = await fetch("http://localhost:3000/api/user/register", {
		method: "post",
		body: data,
	});

	const response = await promise.json();
	console.log(response);
};