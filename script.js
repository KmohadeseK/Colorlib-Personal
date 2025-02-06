'use strict'

// select element
const allSections = document.querySelectorAll('.section');
const navLinks = document.querySelector('.nav__links');
const imgTargets = document.querySelectorAll('img[data-src]');

// scrolling function
navLinks.addEventListener('click', function (e) {
    e.preventDefault();

    // Matching stratgy
    if (e.target.classList.contains('navbar-link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    };
});


// Reveal sections 
const revealSections = function (entries, observer) {
    const [entry] = entries;

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
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

// Lazy loading Images
const loadImgSection = (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Replace src with date-src
    entry.target.src = entry.target.dataset.src

    // when reloaded site : loading images
    entry.target.addEventListener('load', () => {
        entry.target.classList.remove('lazy-img')
    });

    observer.unobserve(entry.target)
};

const imageObserver = new IntersectionObserver(
    loadImgSection,
    {
    root: null,
    threshold: 0,
    rootMargin: '1000px'
});

imgTargets.forEach(img => imageObserver.observe(img));