/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function navBar(){
    let navBuilder = '';
    for (const section of sections){
        // Scroll to anchor ID using scrollTO event
        navBuilder +=
        `<li>
            <a href="#${section.id}"> ${section.dataset.nav} </a>
        </li>`
    }
    navigation.innerHTML = navBuilder;
    // console.log(navBuilder);
};

// Add class 'active' to section when near top of viewport
function offset (section){
    return Math.floor(section.getBoundingClientRect().top);
};

function removeActive (section){
    section.classList.remove('your-active-class');
};

function addActive (conditional,section) {
    if (conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "font-size: larger";
    }
};
function sectionActivation(){
    for(const section of sections){
        const elementOffset = offset(section);
        console.log(elementOffset);

        inviewport = function(){
            return elementOffset<250 && elementOffset>= -250;
        };
        removeActive(section);
        addActive(inviewport(),section);
    }
};

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
// Scroll to section on link click
navBar();
// Set sections as active
window.addEventListener('scroll',sectionActivation);