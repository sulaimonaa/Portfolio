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

// Adding Dynamic Data to Works starts Here
const projects = [
  {
    featureImg: './images/snapshoot-obj.png',
    projectName: 'Tonic',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectCompleteDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br><br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    projectLang: ['HTML', 'CSS', 'JavaScript'],
    projectDetails: { orgnization: 'CANOPY', type: 'Back END Dev', year: 2015 },
    seeLive: 'https://sulaimonaa.github.io/Portfolio/',
    seeSource: 'https://github.com/sulaimonaa/Portfolio',
  },
  {
    featureImg: './images/snapshoot_2.png',
    projectName: 'Multi-Post Stories',
    projectDescription:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    projectCompleteDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br><br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    projectLang: ['HTML', 'CSS', 'JavaScript'],
    projectDetails: {
      orgnization: 'FACEBOOK',
      type: 'Full Stack Dev',
      year: 2016,
    },
    seeLive: 'https://sulaimonaa.github.io/Portfolio/',
    seeSource: 'https://github.com/sulaimonaa/Portfolio',
  },
  {
    featureImg: './images/snapshoot_3.png',
    projectName: 'Facebook 360',
    projectDescription:
      'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    projectCompleteDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br><br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    projectLang: ['HTML', 'CSS', 'JavaScript'],
    projectDetails: {
      orgnization: 'FACEBOOK',
      type: 'Full Stack Dev',
      year: 2017,
    },
    seeLive: 'https://sulaimonaa.github.io/Portfolio/',
    seeSource: 'https://github.com/sulaimonaa/Portfolio',
  },
  {
    featureImg: './images/snapshoot_4.png',
    projectName: 'Uber Navigation',
    projectDescription:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projectCompleteDetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br><br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    projectLang: ['HTML', 'CSS', 'JavaScript'],
    projectDetails: { orgnization: 'UBER', type: 'Front End Dev', year: 2017 },
    seeLive: 'https://sulaimonaa.github.io/Portfolio/',
    seeSource: 'https://github.com/sulaimonaa/Portfolio',
  },
  {
    featureImg: './images/todo.png',
    projectName: 'Todo List App',
    projectDescription:
      'This is a simple to-do list application where a user can add, remove, edit task based on events.',
    projectCompleteDetails:
      'This is a simple to-do list application where a user can add, remove, edit task based on events. This project is developed using HTML, CSS, JavaScript, and follows some of the best practices including DRY, KISS, YAGNI approach on the JavaScript.',
    projectLang: ['HTML', 'CSS', 'JavaScript'],
    projectDetails: { orgnization: 'SELF', type: 'Front End Dev', year: 2023 },
    seeLive: 'https://sulaimonaa.github.io/to-do-list/',
    seeSource: 'https://github.com/sulaimonaa/to-do-list',
  },
  {
    featureImg: './images/commission-calc.png',
    projectName: 'Forex Broker Commission Calculator',
    projectDescription:
      "A simple forex partnership commission calculator that calculates user's current commission based on the downline number of lots traded.",
    projectCompleteDetails:
      "A simple forex partnership commission calculator that calculates user's current commission based on the downline number of lots traded. The calculator is based on a formular C = ((lots traded) / 100) * n where n is the type of account",
    projectLang: ['HTML', 'CSS', 'JavaScript'],
    projectDetails: {
      orgnization: 'RALLYTRADE',
      type: 'Front End Dev',
      year: 2022,
    },
    seeLive:
      'https://fxrallyadministrator.com/frontend/ralcop/ibcalculator.html',
    seeSource: 'https://github.com/sulaimonaa/Commission-Calculator',
  },
  {
    featureImg: './images/referral.png',
    projectName: 'Referral System',
    projectDescription:
      'The is a referral system project. User get to register, get a referral link and when the referral link is used to register another user.',
    projectCompleteDetails:
      'The is a referral system project. User get to register, get a referral link and when the referral link is used to register another user, the user becomes a child level account of the user whose link is used in registration. Language used: PHP, HTML5, CSS, JavaScript Database: mySQL.',
    projectLang: ['HTML', 'CSS', 'JavaScript'],
    projectDetails: {
      orgnization: 'KAPITAL TRUST',
      type: 'Front End Dev',
      year: 2022,
    },
    seeLive: 'https://partner.kapitalcaretrust.com/',
    seeSource: 'https://github.com/sulaimonaa/partner.kapital',
  },
  {
    featureImg: './images/awesome-books.png',
    projectName: 'Awesome Book App',
    projectDescription:
      'This is simple application that keeps update of book records. User can add, remove books with title and author.',
    projectCompleteDetails:
      'This is simple application that keeps update of book records. User can add, remove books with title and author. The project is design with HTML5, CSS, and JavaScript.',
    projectLang: ['HTML', 'CSS', 'JavaScript'],
    projectDetails: { orgnization: 'SELF', type: 'Front End Dev', year: 2023 },
    seeLive: 'https://sulaimonaa.github.io/awesome-books-es6/',
    seeSource: 'https://github.com/sulaimonaa/awesome-books-es6',
  },
];

projects.forEach((project) => {
  const list = document.getElementById('portfolio');
  const listItem = document.createElement('div');
  listItem.classList.add('work_card');
  listItem.id = `portfolio-${index + 1}`;
  const languages = project.projectLang
    .map((lang) => `<li class='lang_list'>${lang}</li>`)
    .join('');
  listItem.innerHTML = `<img src='${
    project.featureImg
  }' alt='Recent Work' class='portfolio_work_img'>
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
  const languages = project.projectLang
    .map((lang) => `<li class='lang_list'>${lang}</li>`)
    .join('');
  const modal = document.createElement('div');
  modal.classList.add('detail-card');
  modal.id = `detail-card-${index + 1}`;
  modal.innerHTML = `<div class='detail-card-inner'>
    <div class='detail-card-header'>
        <div class='detail-card-header1'>
            <h3 class='detail-card-heading'>${project.projectName}</h3>
            <img src='./icons/close-icon2.png'  id='detail-card-close-${
  index + 1
}' alt='close btn icon'>
        </div>
        <div>
            <div class='works-card-client'>
                <h4 class='active'>${project.projectDetails.orgnization}</h4>
                <div class="counter"></div>
                <h4>${project.projectDetails.type}</h4>
                <div class="counter"></div>
                <h4>${project.projectDetails.year}</h4>
            </div>
        </div>
    </div>
    <div class='detail-card-display-img-container'>
        <img class='' src='${project.featureImg}' alt='Recent Work'>
    </div>
    <div class='detail-card-body'>
      <div class='detail-card-body-left'>
        <p class='paragraph'>${project.projectCompleteDetails}</p>      
      </div>
        <div class='detail-card-body-right'>
            <ul class='detail-card-body-tags'>
                ${languages}
            </ul>
            <hr style='color: #EBECF0; margin: 20px 0' />
            <div class='detail-card-body-right-button-container'>
                <button class='detail-card-button' src='${
  project.seeLive
}'>See Live <img src='./icons/live.png' alt='live-source icon'></button>
                <button class='detail-card-button'  src='${
  project.seeSource
}'>See Source <img src='./icons/git.png' alt='github icon'></button>
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
const contentWrap = document.querySelector('.content-wrap');
const bodyScroll = document.querySelector('#body');

// Card 1 popup opening closing starts Here
openProjectDetails1.addEventListener('click', () => {
  detailCard1.classList.toggle('detail-card--show');
  contentWrap.classList.add('blur-modal');
  bodyScroll.classList.add('no-scroll');
});
detailCardClose1.addEventListener('click', () => {
  detailCard1.classList.toggle('detail-card--show');
  contentWrap.classList.remove('blur-modal');
  bodyScroll.classList.remove('no-scroll');
});
// Card 1 popup opening closing ends Here

// Card 2 popup opening closing starts Here
openProjectDetails2.addEventListener('click', () => {
  detailCard2.classList.toggle('detail-card--show');
  contentWrap.classList.add('blur-modal');
  bodyScroll.classList.add('no-scroll');
});
detailCardClose2.addEventListener('click', () => {
  detailCard2.classList.toggle('detail-card--show');
  contentWrap.classList.remove('blur-modal');
  bodyScroll.classList.remove('no-scroll');
});
// Card 2 popup opening closing ends Here

// Card 3 popup opening closing starts Here
openProjectDetails3.addEventListener('click', () => {
  detailCard3.classList.toggle('detail-card--show');
  contentWrap.classList.add('blur-modal');
  bodyScroll.classList.add('no-scroll');
});
detailCardClose3.addEventListener('click', () => {
  detailCard3.classList.toggle('detail-card--show');
  contentWrap.classList.remove('blur-modal');
  bodyScroll.classList.remove('no-scroll');
});
// Card 3 popup opening closing ends Here

// Card 4 popup opening closing starts Here
openProjectDetails4.addEventListener('click', () => {
  detailCard4.classList.toggle('detail-card--show');
  contentWrap.classList.add('blur-modal');
  bodyScroll.classList.add('no-scroll');
});
detailCardClose4.addEventListener('click', () => {
  detailCard4.classList.toggle('detail-card--show');
  contentWrap.classList.remove('blur-modal');
  bodyScroll.classList.remove('no-scroll');
});
// Card 4 popup opening closing ends Here

// form-validation
const form = document.getElementById('contact');
form.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  const checkString = email.toLowerCase();
  const errorDiv = document.getElementById('error-div');
  if (!(checkString === email)) {
    const errorShow = document.createElement('p');
    errorShow.textContent = 'Form not submitted, email should be in lowercase.';
    errorShow.className = 'error-text';
    errorDiv.appendChild(errorShow);
    event.preventDefault();
    return false;
  }

  errorDiv.remove();
  return true;
});

// preserve data
let contactForm;
let contactFormData = JSON.parse(
  window.localStorage.getItem('contactFormData'),
);
if (!contactFormData) {
  contactFormData = {
    name: '',
    email: '',
    message: '',
  };
}
// This function populates data intp inputs that we got from localStorage
const keys = Object.keys(contactFormData);
for (let i = 0; i < keys.length; i += 1) {
  contactForm.elements[keys[i]].value = contactFormData[keys[i]];
}
// This function updates data in localStorage when user add data in contact form
for (let i = 0; i < contactForm.length; i += 1) {
  contactForm.elements[i].addEventListener('change', (e) => {
    contactFormData[`${contactForm.elements[i].name}`] = e.target.value;
    window.localStorage.setItem(
      'contactFormData',
      JSON.stringify(contactFormData),
    );
  });
}
