const navBar = document.querySelector('nav');
const menu = document.querySelector('.nav-bar__toggleButton');
const menuIcon = document.querySelector('.nav-bar__logo');
const navItems = document.querySelectorAll('.nav-bar__items-item');
let startTime = 400;
let pos = 0;
navItems.forEach((element) => {
  let myStyle = `
    top:${pos}%;
    transition-duration:${startTime}ms;
  `;
  element.style.cssText = myStyle;
  pos += 100;
  startTime += 200;
});
let isOpen = false;
menu.addEventListener('click', () => {
  navItems.forEach((element) => {
    element.classList.toggle('nav-bar--open');
  });
  const check = document.querySelector('.nav-bar__items-item');
  if (check.classList.contains('nav-bar--open')) {
    menu.innerHTML = `<i class="nav-bar__logo ti ti-x"></i>`;
  } else {
    menu.innerHTML = `<i class="nav-bar__logo ti ti-menu-2"></i>`;
  }
});

document.querySelector('.nav-bar__icon').addEventListener('click', () => {
  window.location.href = '/pages/Home';
});
const navbarItems = document.querySelectorAll('.nav-bar__items-item');
navbarItems[0].addEventListener('click', () => {
  window.location.href = '/pages/Home';
});
navbarItems[1].addEventListener('click', () => {
  window.location.href = '/pages/shop';
});
navbarItems[2].addEventListener('click', () => {
  window.location.href = '/pages/article';
});
document
  .querySelector('.nav-bar__menu_feature--account')
  .addEventListener('click', () => {
    window.location.href = '/pages/Cart/';
  });
