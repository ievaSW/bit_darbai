const texts = {
    moveElementText: {
        todo:"Done",
        done:"Move Back",   
    }
};

const todoMoveButtons = document.querySelectorAll(".todomove");
const todoDeleteButtons = document.querySelectorAll(".tododelete");
const todoUpdateButtons = document.querySelectorAll(".todoupdate");

const donelistElement = document.querySelector(".done-list");
const todolistElement = document.querySelector(".all-todos");


function moveFromToDoToDone(event){ 
    const targetId = event.target.attributes.todomove.value;
    const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
    donelistElement.appendChild(moveTarget);
    event.target.innertext = texts.moveElementText.done;
    event.target.onclick = moveFromDoneToDo;
}
 
function moveFromDoneToDo(event){
    const targetId = event.target.attributes.todomove.value;
    const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
    todolistElement.appendChild(moveTarget);
    event.target.innertext = texts.moveElementText.todo;
    event.target.onclick = moveFromToDoToDone;
    
}

function updateTodo (event){
    const targetId = event.target.attributes.todoupdate.value;
    console.log(targetId);
    const updateTarget = document.querySelector(`[todo-id="${targetId}"] .todotext`);
    updateTarget.innerText = promt("Iveskite nauja uzduoti:",  updateTarget.innerText);
    // updateTarget.innerText = event.target.value;
    // 57:48 laikas iki kurios perklausiau
};


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