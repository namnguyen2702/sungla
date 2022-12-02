function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();

    /*  */
    function dosave(){
      var fname = document.getElementById("fname").value;
      var lname = document.getElementById("lname").value;
      if (fname == "") {
          alert("Bạn chưa nhập dữ liệu");
          document.getElementById("fname").focus();
      }
      if (lname == "") {
        alert("Bạn chưa nhập dữ liệu");
        document.getElementById("lname").focus();
    }
    }