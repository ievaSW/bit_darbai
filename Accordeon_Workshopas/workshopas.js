const acc = document.querySelectorAll(".accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function (){

        this.classList.toggle("active");
        const desk = this.nextElementSibling;


        if (desk.style.maxHeight){
            desk.style.maxHeight = null;
        }else{
            desk.style.maxHeight = desk.scrollHeight + "px";
        }
    });

}
