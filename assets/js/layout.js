const burgerBtn = document.querySelector('.burger-menu');
const nav = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  nav.classList.toggle('open');
  overlay.classList.toggle('active');
  menu.classList.toggle('overflow');
  body.classList.toggle('overflow-h');
});
