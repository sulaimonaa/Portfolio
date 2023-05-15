const navBtn = document.querySelector('#menuIcon');
const navMenu = document.querySelector('.navbar');
const navItem1 = document.querySelector('.nav-item1');
const navItem2 = document.querySelector('.nav-item2');
const navItem3 = document.querySelector('.nav-item3');
const closeMenu = document.querySelector('#closeBtn');

navBtn.addEventListener('click', () => {
  if (navMenu.className === 'navbar') {
    navMenu.classList = 'navbar-show';
    closeMenu.style.display = 'block';
  } else {
    navMenu.className = 'navbar';
  }
});

closeMenu.addEventListener('click', () => {
  navMenu.className = 'navbar';
});

navItem1.addEventListener('click', () => {
  navMenu.className = 'navbar';
});

navItem2.addEventListener('click', () => {
  navMenu.className = 'navbar';
});

navItem3.addEventListener('click', () => {
  navMenu.className = 'navbar';
});
