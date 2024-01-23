// const texts = {
//     moveElementText: {
//         todo:"Done",
//         done:"Move Back",   
//     }
// };
// // triju taskiuku butonaai


// const donelistElement = document.querySelector(".done-list");
// const todolistElement = document.querySelector(".all-todos");
// // Inputo + add buttonai
// const addNewAsignmentInput = document.querySelector("#todoinput");
// const SubmitNewAsignmentButton = document.querySelector("#todosubmit");

// function moveFromToDoToDone(event){ 
//     const targetId = event.target.attributes.todomove.value;
//     // console.log(targetId);
//     const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
//     donelistElement.appendChild(moveTarget);
//     event.target.innerText = texts.moveElementText.done;
//     event.target.onclick = moveFromDoneToDo;
// }
 
// function moveFromDoneToDo(event){
//     const targetId = event.target.attributes.todomove.value;
//     const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
//     todolistElement.appendChild(moveTarget);
//     event.target.innerText = texts.moveElementText.todo;
//     event.target.onclick = moveFromToDoToDone;
    
// }

// function updateTodo (event){
//     const targetId = event.target.attributes.todoupdate.value;
//     console.log(targetId);
//     const updateTarget = document.querySelector(`[todo-id="${targetId}"] .todotext`);
//     updateTarget.innerText = prompt("Iveskite nauja uzduoti:",  updateTarget.innerText);
//     // updateTarget.innerText = "Labas"; pasitikrinam ar veikia teksto pakeitimas.
//     // realiai turetu buti saugoma ir istrinama updateiname duomenu bazeje
// };

// function FunctionalityToAllAddedNewTodos(){

//     const todoMoveButtonsInTodoList = document.querySelectorAll(".all-todos .todomove");
//     const todoMoveButtonsInDoneList = document.querySelectorAll(".done-list .todomove");
//     const todoDeleteButtons = document.querySelectorAll(".tododelete");
//     const todoUpdateButtons = document.querySelectorAll(".todoupdate");

//     for (const todoUpdateButton of todoUpdateButtons){
//         todoUpdateButton.onclick = updateTodo;
//     }

//     for (const todoMoveButton of todoMoveButtonsInTodoList){
//         todoMoveButton.onclick = moveFromToDoToDone;
//         console.log("vienas")
//     }
//     for (const todoMoveButton of todoMoveButtonsInDoneList){
//         todoMoveButton.onclick = moveFromDoneToDo;
//         console.log("du")
//     }
//     for (const todoDeleteButton of todoDeleteButtons){
//         todoDeleteButton.onclick = (event) => {
//         const targetId = event.target.attributes.tododelete.value;
//         const deleteTarget = document.querySelector(`[todo-id="${targetId}"`);
//         deleteTarget.remove();
//     };
//     }
// }
// // FunctionalityToAllAddedNewTodos();

// async function EnterKeyToNewAsigment() {
  
//     // atsakymas is serverio
//     const inputValue = addNewAsignmentInput.value;
//     addNewAsignmentInput.value = "";

//     const response = await postNewTodo({
    
//     todo: inputValue,
//     });
//     // console.log(response);
//     const newTodoObject = response.newTodo;
//     // console.log(newTodoObject);

//     const newTodo = `<div draggable="true" class="todo d-flex justify-content-between draggable" 
//     todo-id="${newTodoObject.id}">
//         <input type="checkbox" name="todo">
//         <span class="todotext">${newTodoObject.todo}</span> 
//         <div class="dropdown">
//             <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//               ...
//             </button>
//             <ul class="dropdown-menu bg-dark">
//               <li><a todomove="${newTodoObject.id}" class="dropdown-item text-white todomove" href="#">Done</a></li>
//               <li><a tododelete="${newTodoObject.id}" class="dropdown-item text-white tododelete" href="#">Delete</a></li>
//               <li><a todoupdate="${newTodoObject.id}" class="dropdown-item text-white todoupdate" href="#">Uptade</a></li>
//             </ul>
//         </div>
//     `
//     todolistElement.innerHTML += newTodo;
//     AddDragToAllTodos();
//     FunctionalityToAllAddedNewTodos();
// }

// function showAllTodos(todos) {
// 	let innerHtml = "";
// 	for (const todo of todos) innerHtml += generateTodoHTML(todo);
//     // dragas ir listeneriai
//     todolistElement.innerHTML = innerHtml;
// 	AddDragToAllTodos();
// 	FunctionalityToAllAddedNewTodos("show all todos");
// }

// function showAllDones (todos){
//     function showAllDones(todos) {
//         let innerHtml = "";
    
//         for (const todo of todos) innerHtml += generateTodoHTML(todo);
    
//         donelistElement.innerHTML = innerHtml;
    
//     AddDragToAllTodos();
// 	FunctionalityToAllAddedNewTodos("show all todos");
//     }
    
// }

// SubmitNewAsignmentButton.onclick = EnterKeyToNewAsigment;
// addNewAsignmentInput.onkeydown = (event) => {
//     if (event.key === "Enter") {
//         EnterKeyToNewAsigment();
//     }
// };
const texts = {
	moveElementText: {
		todo: "Done",
		done: "Move back",
	},
};

const doneListElement = document.querySelector(".done-list"),
	todoListElement = document.querySelector(".all-todos"),
	todoInputElement = document.querySelector("#todo-input"),
	todoSubmitBtn = document.querySelector("#todo-submit");

function moveFromTodoToDone(event) {
	console.log("Trys");
	const targetId = event.target.attributes.todomove.value;
	const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
	doneListElement.appendChild(moveTarget);
	moveFromTodoToDoneTextUpdate(event);
	updateTodoApi({ id: targetId, done: true });
}
function moveFromTodoToDoneTextUpdate(event) {
	event.target.innerText = texts.moveElementText.done;
	event.target.onclick = moveFromDoneToTodo;
}

function moveFromDoneToTodo(event) {
	const targetId = event.target.attributes.todomove.value;
	const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
	todoListElement.appendChild(moveTarget);
	moveFromDoneToTodoTextUpdate(event);
	updateTodoApi({ id: targetId, done: false });
}
function moveFromDoneToTodoTextUpdate(event) {
	event.target.innerText = texts.moveElementText.todo;
	event.target.onclick = moveFromTodoToDone;
}

function updateTodo(event) {
	const targetId = event.target.attributes.todoupdate.value;
	const updateTarget = document.querySelector(
		`[todo-id="${targetId}"] .todo-text`
	);
	updateTarget.innerText = prompt(
		"Iveskite nauja todo reiksme:",
		updateTarget.innerText
	);
	updateTodoApi({
		id: targetId,
		todo: updateTarget.innerText,
	});
	//Siusti uzklausa i serveri
}

function addClickListenersToTodoDialogButtons(a) {
	const todoMoveButtonsInTodoList = document.querySelectorAll(
			".all-todos .todo-move"
		),
		todoMoveButtonsInDoneList = document.querySelectorAll(".done-list"),
		todoDeleteButtons = document.querySelectorAll(".todo-delete"),
		todoUpdateButtons = document.querySelectorAll(".todo-update");
	console.log(a);
	console.log(todoMoveButtonsInDoneList[0].children);
	for (const updateTodoButton of todoUpdateButtons) {
		updateTodoButton.onclick = updateTodo;
	}

	for (const todoMoveButton of todoMoveButtonsInTodoList) {
		todoMoveButton.onclick = moveFromTodoToDone;
		console.log("vienas");
	}
	for (const todoMoveButton of todoMoveButtonsInDoneList) {
		todoMoveButton.onclick = moveFromDoneToTodo;
		console.log("du");
	}

	for (const deleteButton of todoDeleteButtons) {
		deleteButton.onclick = (event) => {
			const targetId = event.target.attributes.tododelete.value;
			const deleteTarget = document.querySelector(`[todo-id="${targetId}"]`);
			deleteTodo(targetId);
			deleteTarget.remove();
		};
	}
}
// addClickListenersToTodoDialogButtons();
async function addNewTodo() {
	//atsakymas is serverio
	const inputValue = todoInputElement.value;
	todoInputElement.value = "";

	const response = await postNewTodo({
		todo: inputValue,
	});
	const newTodoObject = response.newTodo;

	const newTodo = generateTodoHTML(newTodoObject);
	todoListElement.innerHTML += newTodo;
	addDragFunctionalityToAllElements();
	addClickListenersToTodoDialogButtons();
}

function showAllTodos(todos) {
	let innerHtml = "";

	for (const todo of todos) innerHtml += generateTodoHTML(todo);

	todoListElement.innerHTML = innerHtml;
	addDragFunctionalityToAllElements();
	addClickListenersToTodoDialogButtons("show all todos");
}

function showAllDones(todos) {
	let innerHtml = "";

	for (const todo of todos) innerHtml += generateTodoHTML(todo);

	doneListElement.innerHTML = innerHtml;

	addDragFunctionalityToAllElements();
	addClickListenersToTodoDialogButtons("show all dones");
}

function generateTodoHTML(todo) {
	return `<div
	class="todo justify-content-between draggable"
	draggable="true"
	todo-id="${todo.id}"
>
	<input
		type="checkbox"
		name="todo"
	/>
	<span class="todo-text">${todo.todo}</span>
	<div class="dropdown">
		<i
			class="bi bi-three-dots"
			data-bs-toggle="dropdown"
			aria-expanded="false"
		></i>
		<ul class="dropdown-menu bg-dark">
			<li>
				<a
					class="dropdown-item text-white todo-move"
					href="#"
					todomove="${todo.id}"
					>Done</a
				>
			</li>
			<li>
				<a
					class="dropdown-item text-white todo-delete"
					href="#"
					tododelete="${todo.id}"
					>Delete</a
				>
			</li>
			<li>
				<a
					class="dropdown-item text-white todo-update"
					href="#"
					todoupdate="${todo.id}"
					>Update</a
				>
			</li>
		</ul>
	</div>
</div>`;
}

getAllTodos();
todoSubmitBtn.onclick = addNewTodo;
todoInputElement.onkeydown = (event) => {
	if (event.key === "Enter") addNewTodo();
};