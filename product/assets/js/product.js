var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



// search thì tìm add thêm keyword vannila js or pure js
const amountQty = document.querySelector(".input-qty");
amountQty.value = 0;
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const qtyChangeBtns = document.querySelectorAll(".qty-change");
//add event for each btn 
qtyChangeBtns.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        let min = 0;
        let max = 10;
        let qtyValue = parseInt(amountQty.value);
          if(btn.classList.contains('plus')){
            qtyValue =  qtyValue === 10 ? 10 : qtyValue+1;
          }else if(btn.classList.contains('minus')){
            qtyValue =  qtyValue === 0 ? 0 : qtyValue-1;
          }
          amountQty.value=qtyValue;
    })
})
/*  */
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}