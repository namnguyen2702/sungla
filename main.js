
const navBar = document.querySelector('nav');
const menu = document.querySelector('.nav-bar__toggleButton');
const menuIcon = document.querySelector('.nav-bar__logo');
let isOpen= false;
menu.addEventListener('click', () => {
  const navItems = document.querySelectorAll(".nav-bar__items-item");
  navItems.forEach(element => {
   element.classList.toggle('nav-bar--open');
  });
  const check = document.querySelector(".nav-bar__items-item");
if(check.classList.contains('nav-bar--open')){
    menu.innerHTML = `<i class="nav-bar__logo ti ti-x"></i>`;
}else{
    menu.innerHTML = `<i class="nav-bar__logo ti ti-menu-2"></i>`;
}
});

