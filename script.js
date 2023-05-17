const navBtn = document.querySelector('#menuIcon');
const navMenu = document.querySelector('.navbar');
const navItem = document.querySelector('.nav-item');
const closeMenu = document.querySelector('#closeBtn');

navBtn.addEventListener('click', () => {
  if (navMenu.className === 'navbar') {
    navMenu.className = 'navbar-show';
    closeMenu.style.display = 'block';
  } else {
    navMenu.className = 'navbar';
  }
});

closeMenu.addEventListener('click', () => {
  navMenu.className = 'navbar';
});

navItem.addEventListener('click', () => {
  navMenu.classList.toggle('navbar');
});
