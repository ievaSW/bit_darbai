console.log("veikiu");

let dragElement;

const allDraggableElements = document.querySelectorAll(".draggable");
const dropZones = document.querySelectorAll(".dropzone");
for(const element of allDraggableElements ){
    element.addEventListener("dragstart", (event)=>{
        dragElement = event.target;
    });
}

for(const dropzone of dropZones){
    dropzone.addEventListener("dragover", (event)=>{
        event.preventDefault();
    });
    dropzone.addEventListener("dragenter", (event)=>{
        if(event.target.classList.contains("dropzone")){
            event.target.classList.add("dragover")
            // mano klase kita reikia pasikeisti!!!!!
        }
    });
    // dropZone.addEventListener("dragleave", (event)=>{
    //    if (event.target.classList.contains("dropzone")){
    //     event.target
// pameciau laika nuo 1:43:57 :)
//        }) 
//     })
}