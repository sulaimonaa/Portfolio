let navBtn = document.querySelector('#menuIcon');
let navMenu = document.querySelector('.navbar');
let navItem1 = document.querySelector('.nav-item1');
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

navItem1.addEventListener('click', function(){
    navMenu.className = 'navbar'
})
