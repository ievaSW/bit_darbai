console.log("veikiu");

let dragElement;

const allDraggableElements = document.querySelectorAll(".draggable");
const dropZones = document.querySelectorAll(".dropzone");

for(const dragableElement of allDraggableElements )
{
    dragableElement.addEventListener("dragstart", (event)=>{
        dragElement = event.target;
    });
}

for(const dropzone of dropZones){
    dropzone.addEventListener("dragover", (event)=>{
        event.preventDefault();
    });

    dropzone.addEventListener("dragenter", (event)=>{
        console.log("dragenter veikia");
    if(event.target.parentElement.classList.contains("todo-list")){
        event.target.parentElement.classList.add("dragover");
    } else if (event.target.classList.contains("dropzone")){
        event.target.classList.add("dragover");
        }
    });

    dropzone.addEventListener("dragleave", (event)=>{

    if(event.target.parentElement.classList.contains("todo-list"))
    {event.target.parentElement.classList.remove("dragover");
        } else if (event.target.classList.contains("dropzone")){
        event.target.classList.remove("dragover");
       }
    });
    dropzone.addEventListener("drop", (event)=>{
        event.preventDefault();
        if(event.target.parentElement.classList.contains("todo-list")){
            event.target.parentElement.classList.remove("dragover")
            document.querySelector(".all-todos").appendChild(dragElement);
         } else if(event.target.classList.contains("dropzone")){
            event.target.classList.remove("dragover");
            event.target.appendChild(dragElement);
        }
    });

}


    
