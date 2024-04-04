const header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
  header.classList.toggle('sticky', window.scrollY > 40);
});


const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav__links');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark'); // Cambio de icono de menú
  navLinks.classList.toggle('open'); // mostrar el menú en versión mobile
};
