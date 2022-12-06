var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active1");
    var panel1 = this.nextElementSibling;
    if (panel1.style.maxHeight) {
      panel1.style.maxHeight = null;
    } else {
      panel1.style.maxHeight = panel1.scrollHeight + "px";
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

var modal = document.getElementById("myModal");

var img = document.getElementById("ImgProd");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}