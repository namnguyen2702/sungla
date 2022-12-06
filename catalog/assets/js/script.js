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
/*  */
var sliderPr = document.getElementById("myRange");
var output = document.getElementById("numberPrice");
output.innerHTML = sliderPr.value;

sliderPr.oninput = function() {
  output.innerHTML = this.value;
}