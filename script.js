'use strict'

// select element
const allSections = document.querySelectorAll('.section')
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


// Reveal sections 
const revealSections = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    // Guard cluase
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSections, {
    root: null,
    threshold: 0.20
});

allSections.forEach(section => {
    sectionObserver.observe(section)
    section.classList.add('section--hidden')
});