/* =================================================================== */
/*             NEW PRELOADER LOGIC WITH MINIMUM DURATION               */
/* =================================================================== */

const preloader = document.getElementById('preloader');

// We will use two "flags" to track our conditions
let isPageLoaded = false;
let isMinTimeElapsed = false;

// This is the function that will try to hide the preloader
function hidePreloader() {
    // It will only succeed if BOTH flags are true
    if (isPageLoaded && isMinTimeElapsed) {
        preloader.classList.add('preloader-hidden');

        // Optional: Completely remove the preloader from the page after the animation
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 750); // This timeout should match the CSS transition duration
    }
}

// 1. Listen for the page to be fully loaded
window.addEventListener('load', () => {
    // When the page is loaded, set the first flag to true
    isPageLoaded = true;
    // Now, try to hide the preloader. It will only work if the timer has also finished.
    hidePreloader();
});

// 2. Set a timer for a minimum duration (2000ms = 2 seconds)
setTimeout(() => {
    // When the timer is done, set the second flag to true
    isMinTimeElapsed = true;
    // Now, try to hide the preloader. It will only work if the page has also finished loading.
    hidePreloader();
}, 2000);


/* =================================================================== */
/*                    (REST OF YOUR JS IS BELOW)                       */
/* =================================================================== */


// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    once: true,
});

// Add active class to navbar links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav .container ul li .nav-link');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
        }
    })

    navLinks.forEach( a => {
        a.classList.remove('active');
        if(a.getAttribute('href') === '#' + current){
            a.classList.add('active');
        }
    })
});