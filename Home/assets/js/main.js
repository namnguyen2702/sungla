//Nav Bar
const toggleIcon= document.getElementById("toggle-icon");
const subnav = document.querySelector("#header #toggle-nav")
var clicked = false;
toggleIcon.addEventListener("click",()=>{
    subnav.classList.toggle("show")
})

// Slide text
const limitText = 3;
let index = 0;
setInterval(()=>{
        const slideTextItems = document.querySelector(".announcement-slider");
        slideTextItems.style.transform = `translate3d(-${index*100}%, 0, 0)`
        if(index < 3 ){ 
            index++ 
        }else{
            index = 0;
        }
},5000)

// test



