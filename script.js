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

// Adding Dynamic Data to Works ul starts Here
const projects = [{
  featureImg: './images/snapshoot_1.png',
  projectName: 'Tonic',
  projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  projectLang: ['HTML', 'CSS', 'JavaScript'],
  projectDetails: { orgnization: 'CANOPY', type: 'Back END Dev', year: 2015 },
  seeLive: 'https://sulaimonaa.github.io/Portfolio/',
  seeSource: 'git@github.com:sulaimonaa/Portfolio.git',
}, {
  featureImg: './images/snapshoot_2.png',
  projectName: 'Multi-Post Stories',
  projectDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  projectLang: ['HTML', 'CSS', 'JavaScript'],
  projectDetails: { orgnization: 'FACEBOOK', type: 'Full Stack Dev', year: 2016 },
  seeLive: 'https://sulaimonaa.github.io/Portfolio/',
  seeSource: 'git@github.com:sulaimonaa/Portfolio.git',
}, {
  featureImg: './images/snapshoot_3.png',
  projectName: 'Facebook 360',
  projectDescription: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  projectLang: ['HTML', 'CSS', 'JavaScript'],
  projectDetails: { orgnization: 'FACEBOOK', type: 'Full Stack Dev', year: 2017 },
  seeLive: 'https://sulaimonaa.github.io/Portfolio/',
  seeSource: 'git@github.com:sulaimonaa/Portfolio.git',
}, {
  featureImg: './images/snapshoot_4.png',
  projectName: 'Uber Navigation',
  projectDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  projectLang: ['HTML', 'CSS', 'JavaScript'],
  projectDetails: { orgnization: 'UBER', type: 'Front End Dev', year: 2017 },
  seeLive: 'https://sulaimonaa.github.io/Portfolio/',
  seeSource: 'git@github.com:sulaimonaa/Portfolio.git',
}];

projects.forEach((project, index) => {
  const list = document.getElementById('portfolio');
  const listItem = document.createElement('div');
  listItem.classList.add('work_card');
  listItem.id = `portfolio-${index + 1}`;
  const languages = project.projectLang.map((lang) => `<li class='lang_list'>${lang}</li>`).join('');
  listItem.innerHTML = `<img src='${project.featureImg}' alt='Recent Work' class='portfolio_work_img'>
    <div class='project_desc'>
        <h3 class='project_title'>${project.projectName}</h3>
        <div class='client'>
            <h4 class='active'>${project.projectDetails.orgnization}</h4>
            <div class="counter"></div>
            <h4>${project.projectDetails.type}</h4>
            <div class="counter"></div>
            <h4>${project.projectDetails.year}</h4>
        </div>
        <p class='project_summary'>${project.projectDescription}</p>
        <ul class='project_lang'>
          ${languages}
        </ul>
        <div class="call_to_action">
        <button id='open-project-details-${index + 1}'>See Project</button>
        </div>
    </div>`;
  list.appendChild(listItem);
});

// Modal Popup Starts Here
const body = document.getElementById('body');
projects.forEach((project, index) => {
  const languages = project.projectLang.map((lang) => `<li class='detail-card-body-tag'>${lang}</li>`).join('');
  const modal = document.createElement('div');
  modal.classList.add('detail-card');
  modal.id = `detail-card-${index + 1}`;
  modal.innerHTML = `<div class='detail-card-inner'>
    <div class='d-flex detail-card-header'>
        <div>
            <h3 class='detail-card-heading'>${project.projectName}</h3>
            <div class='d-flex works-card-client'>
                <p class='paragraph'>${project.projectDetails.orgnization}</p>
                <i class='fa-solid fa-circle works-card-client-counter'></i>
                <p class='works-card-client-role paragraph'>${project.projectDetails.type}</p>
                <i class='fa-solid fa-circle works-card-client-counter'></i>
                <p class='works-card-client-year paragraph'>${project.projectDetails.year}</p>
            </div>
        </div>
        <i id='detail-card-close-${index + 1}' class='fa-solid fa-xmark detail-card-cross-icon'></i>
    </div>
    <div class='detail-card-display-img-container'>
        <img class='' src='${project.featureImg}' alt='Recent Work'>
    </div>
    <div class='detail-card-body'>
        <p class='paragraph'>${project.projectDescription}</p>
        <div class='detail-card-body-right'>
            <ul class='d-flex detail-card-body-tags'>
                ${languages}
            </ul>
            <div class='detail-card-body-right-button-container'>
                <button class='detail-card-button' src='${project.seeLive}'>See Live <i
                        class='fa-solid fa-arrow-up-right-from-square'></i></button>
                <button class='detail-card-button'  src='${project.seeSource}'>See Source <i class='fa-brands fa-github'></i></button>
            </div>
        </div>
    </div>
  </div>`;
  body.appendChild(modal);
});
// Modal Popup Ends Here

const openProjectDetails1 = document.getElementById('open-project-details-1');
const openProjectDetails2 = document.getElementById('open-project-details-2');
const openProjectDetails3 = document.getElementById('open-project-details-3');
const openProjectDetails4 = document.getElementById('open-project-details-4');

const detailCardClose1 = document.getElementById('detail-card-close-1');
const detailCardClose2 = document.getElementById('detail-card-close-2');
const detailCardClose3 = document.getElementById('detail-card-close-3');
const detailCardClose4 = document.getElementById('detail-card-close-4');

const detailCard1 = document.getElementById('detail-card-1');
const detailCard2 = document.getElementById('detail-card-2');
const detailCard3 = document.getElementById('detail-card-3');
const detailCard4 = document.getElementById('detail-card-4');

// Card 1 popup opening closing starts Here
openProjectDetails1.addEventListener('click', () => {
  detailCard1.classList.toggle('detail-card--show');
});
detailCardClose1.addEventListener('click', () => {
  detailCard1.classList.toggle('detail-card--show');
});
// Card 1 popup opening closing ends Here

// Card 2 popup opening closing starts Here
openProjectDetails2.addEventListener('click', () => {
  detailCard2.classList.toggle('detail-card--show');
});
detailCardClose2.addEventListener('click', () => {
  detailCard2.classList.toggle('detail-card--show');
});
// Card 2 popup opening closing ends Here

// Card 3 popup opening closing starts Here
openProjectDetails3.addEventListener('click', () => {
  detailCard3.classList.toggle('detail-card--show');
});
detailCardClose3.addEventListener('click', () => {
  detailCard3.classList.toggle('detail-card--show');
});
// Card 3 popup opening closing ends Here

// Card 4 popup opening closing starts Here
openProjectDetails4.addEventListener('click', () => {
  detailCard4.classList.toggle('detail-card--show');
});
detailCardClose4.addEventListener('click', () => {
  detailCard4.classList.toggle('detail-card--show');
});
// Card 4 popup opening closing ends Here
// Adding Dynamic Data to Works ul ends Here