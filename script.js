let navBtn = document.querySelector('#menuIcon');
let navMenu = document.querySelector('.navbar');
let navItem = document.querySelector('.nav-item');
let closeMenu = document.querySelector('#closeBtn');

navBtn.addEventListener('click', function () {
    if ( navMenu.className === 'navbar') {
        navMenu.classList = 'navbar-show'
        closeMenu.style.display = 'block'
    } else {
        navMenu.className = 'navbar'
    }
})

closeMenu.addEventListener('click', function(){
    navMenu.className = 'navbar'
})

navItem.addEventListener('click', function(){
    navMenu.className = 'navbar'
})