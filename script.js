'use strict'

// select element
const navLinks = document.querySelector('.nav__links');

// scrolling function
navLinks.addEventListener('click', function (e) {
    e.preventDefault();

    // Matching stratgy
    if (e.target.classList.contains('navbar-link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    }
})


