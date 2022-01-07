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

//ADD ALL SECTIONS INTO NAVBAR
const sections = document.querySelectorAll('section');
const navBarHolder = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function offset (section){
    return Math.floor(section.getBoundingClientRect().top);
};

function removeActive (section){
    section.classList.remove('your-active-class');
    document.getElementById(section.dataset.nav).classList.remove('your-active-heading');
};

function addActive (inview,section) {
    if (inview){
        section.classList.add('your-active-class');
        section.style.cssText = "font-size: larger";
        document.getElementById(section.dataset.nav).classList.add('your-active-heading');
    }
};


//loop through all sections and add the section title to nav bar
function navBarBuilder(){
    for (const section of sections){
        const newItem = document.createElement('li');
        newItem.textContent = section.dataset.nav;
        newItem.setAttribute("id",section.dataset.nav);
        navBarHolder.appendChild(newItem);
    }
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

//when user click the navbar, the page would scroll to that section
function scrollToSection(){
    const headings = document.querySelectorAll('li');
    for (const heading of headings){
        heading.addEventListener('click',(event)=>{


            const sectionNumber = heading.textContent.split(' ')[1];
            event.preventDefault();
            const location = document.getElementById('section'+sectionNumber);
            location.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

            // removeActiveHeading(heading);
        });
    };
}

//when the user scroll to a certain section, the section change to active
function sectionActivation(){
    for(const section of sections){
        //get the location of each section
        const elementOffset = offset(section);

        //judge whether each section is inview based on the location
        let inview = function(){
            return elementOffset<250 && elementOffset>= -250;
        };

        removeActive(section);
        addActive(inview(),section);

    }
};

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
navBarBuilder();

// Scroll to section on link click
scrollToSection();

// Set sections as active
window.addEventListener('scroll',sectionActivation);