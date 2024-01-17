const texts = {
    moveElementText: {
        todo:"Done",
        done:"Move Back",   
    }
};
// triju taskiuku butonaai


const donelistElement = document.querySelector(".done-list");
const todolistElement = document.querySelector(".all-todos");
// Inputo + add buttonai
const addNewAsignmentInput = document.querySelector("#todoinput");
const SubmitNewAsignmentButton = document.querySelector("#todosubmit");

function moveFromToDoToDone(event){ 
    const targetId = event.target.attributes.todomove.value;
    // console.log(targetId);
    const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
    donelistElement.appendChild(moveTarget);
    event.target.innerText = texts.moveElementText.done;
    event.target.onclick = moveFromDoneToDo;
}
 
function moveFromDoneToDo(event){
    const targetId = event.target.attributes.moveToDo.value;
    const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
    todolistElement.appendChild(moveTarget);
    event.target.innerText = texts.moveElementText.todo;
    event.target.onclick = moveFromToDoToDone;
    
}

function updateTodo (event){
    const targetId = event.target.attributes.todoupdate.value;
    console.log(targetId);
    const updateTarget = document.querySelector(`[todo-id="${targetId}"] .todotext`);
    updateTarget.innerText = prompt("Iveskite nauja uzduoti:",  updateTarget.innerText);
    // updateTarget.innerText = "Labas"; pasitikrinam ar veikia teksto pakeitimas.
    // realiai turetu buti saugoma ir istrinama updateiname duomenu bazeje
};

function FunctionalityToAllAddedNewTodos(){
    const todoMoveButtons = document.querySelectorAll(".todomove");
    const todoDeleteButtons = document.querySelectorAll(".tododelete");
    const todoUpdateButtons = document.querySelectorAll(".todoupdate");

    for (const todoUpdateButton of todoUpdateButtons){
        todoUpdateButton.onclick = updateTodo;
    }

    for (const todoMoveButton of todoMoveButtons){
        todoMoveButton.onclick = moveFromToDoToDone;
    }
    for (const todoDeleteButton of todoDeleteButtons){
        todoDeleteButton.onclick = (event) => {
        const targetId = event.target.attributes.tododelete.value;
        const deleteTarget = document.querySelector(`[todo-id="${targetId}"`);
        deleteTarget.remove();
    };
    }
}
FunctionalityToAllAddedNewTodos();

function EnterKeyToNewAsigment() {
    const inputValue = addNewAsignmentInput.value;
    addNewAsignmentInput.value = "";
    const newTodo = `<div draggable="true" class="todo d-flex justify-content-between draggable" 
    todo-id="1">
        <input type="checkbox" name="todo">
        <span class="todotext">${inputValue}</span> 
        <div class="dropdown">
            <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              ...
            </button>
            <ul class="dropdown-menu bg-dark">
              <li><a todomove="1" class="dropdown-item text-white todomove" href="#">Done</a></li>
              <li><a tododelete="1" class="dropdown-item text-white tododelete" href="#">Delete</a></li>
              <li><a todoupdate="1" class="dropdown-item text-white todoupdate" href="#">Uptade</a></li>
            </ul>
        </div>
    `
    todolistElement.innerHTML += newTodo;
    AddDragToAllTodos();
    FunctionalityToAllAddedNewTodos();

}

SubmitNewAsignmentButton.onclick = EnterKeyToNewAsigment;
addNewAsignmentInput.onkeydown = (event) => {
    if (event.key === "Enter") {
        EnterKeyToNewAsigment();
    }
};
