const moveToDoneBtn = document.querySelector('#moveToDone');
const moveToTodoBtn = document.querySelector('#moveToDo');
const deleteTodoBtn = document.querySelector('#DeleteToDo');

// const donelistElement = document.querySelector(".done-list");
// const todolistElement = document.querySelector(".all-todos");


const movetodotodone = ()=>{
    const allTodosCheckedInputs = document.querySelectorAll('.all-todos .todo input:checked');
    console.log(allTodosCheckedInputs);
for(const inputElement of allTodosCheckedInputs){
    const parent = inputElement.parentElement;
        const parentId = parent.attributes["todo-id"].value
        document.querySelector(`[todomove="${parentId}"]`).innerText = "Moved back";
    inputElement.checked = false;
    donelistElement.append(inputElement.parentElement);
}
};

const moveTodoToTodoList = ()=>{
    const allTodosCheckedInputs = document.querySelectorAll('.done-list .todo input:checked');
    for(const inputElement of allTodosCheckedInputs){
        const parent = inputElement.parentElement;
        const parentId = parent.attributes["todo-id"].value
        document.querySelector(`[todomove="${parentId}"]`).innerText = "Done";
        inputElement.checked = false;
        todolistElement.append(parent);
    }
}

const deleteTodoElement = ()=>{
    const allTodosCheckedInputs = document.querySelectorAll('.todo input:checked');
    for(const inputElement of allTodosCheckedInputs){
        inputElement.parentElement.remove();
    }
};

moveToDoneBtn.onclick = movetodotodone;
moveToTodoBtn.onclick = moveTodoToTodoList;
deleteTodoBtn.onclick = deleteTodoElement;
