const navBtn = document.querySelector('#menuIcon');
const navMenu = document.querySelector('.navbar');
const closeMenu = document.querySelector('#closeBtn');
const headlineSec = document.querySelector('.headline');
const headerLogo = document.querySelector('.header_logo');
const headerIcon = document.querySelector('.header_icon');
const workSection = document.querySelector('.work');
const aboutSection = document.querySelector('.about');
const contactSection = document.querySelector('.contact');

navBtn.addEventListener('click', () => {
  if (navMenu.className === 'navbar') {
    navMenu.className = 'navbar-show';
    closeMenu.style.display = 'block';
    headlineSec.classList.add('blur-bg');
    headerLogo.classList.add('blur-bg');
    headerIcon.classList.add('blur-bg');
    workSection.classList.add('blur-bg');
    aboutSection.classList.add('blur-bg');
    contactSection.classList.add('blur-bg');
  } else {
    navMenu.className = 'navbar';
  }
});

closeMenu.addEventListener('click', () => {
  navMenu.className = 'navbar';
  headlineSec.classList.remove('blur-bg');
  headerLogo.classList.remove('blur-bg');
  headerIcon.classList.remove('blur-bg');
  workSection.classList.remove('blur-bg');
  aboutSection.classList.remove('blur-bg');
  contactSection.classList.remove('blur-bg');
});

navMenu.addEventListener('click', () => {
  navMenu.className = 'navbar';
  headlineSec.classList.remove('blur-bg');
  headerLogo.classList.remove('blur-bg');
  headerIcon.classList.remove('blur-bg');
  workSection.classList.remove('blur-bg');
  aboutSection.classList.remove('blur-bg');
  contactSection.classList.remove('blur-bg');
});
