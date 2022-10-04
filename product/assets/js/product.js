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

/*  */
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("product-slides");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }
// Lỗi
/*  */
// $('input.input-qty').each(function () {
//   var $this = $(this),
//     qty = $this.parent().find('.is-form'),
//     min = Number($this.attr('min')),
//     max = Number($this.attr('max'))
//   if (min == 0) {
//     var d = 0
//   } else d = min
//   $(qty).on('click', function () {
//     if ($(this).hasClass('minus')) {
//       if (d > min) d += -1
//     } else if ($(this).hasClass('plus')) {
//       var x = Number($this.val()) + 1
//       if (x <= max) d += 1
//     }
//     $this.attr('value', d).val(d)
//   })
// })
// dung jquery ??

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
