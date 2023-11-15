const burgerBtn = document.querySelector('.burger-menu');
const nav = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  nav.classList.toggle('open');
  overlay.classList.toggle('active');
});
