const toggleIcon= document.getElementById("toggle-icon");
const subnav = document.querySelector("#header #toggle-nav")
var clicked = false;
toggleIcon.addEventListener("click",()=>{
    if(clicked){
        subnav.classList.remove("show")
        clicked = false
    }else{
        subnav.classList.add("show")
        clicked = true
    }
})
