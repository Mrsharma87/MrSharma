// Audio player setup
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector('.hey').classList.add('popup');
});



// Toggle settings panel
function settingtoggle() {
    document.getElementById("setting-container").classList.toggle('settingactivate');
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle('visualmodeshow');
    document.getElementById("soundtogglebuttoncontainer").classList.toggle('soundmodeshow');
}

// Play/pause audio
function playpause() {
    if (document.getElementById('switchforsound').checked == false) {
        audio.pause();
    } else {
        audio.play();
    }
}

// Toggle light/dark mode
function visualmode() {
    document.body.classList.toggle('light-mode');
    var elements = document.querySelectorAll('.needtobeinvert');
    elements.forEach(function (element) {
        element.classList.toggle('invertapplied');
    });
}

// Mobile menu toggle
let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// Hide mobile menu on click outside
function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Highlight active navigation tab on scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul li');
window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    mobilenavLi.forEach(li => {
        li.classList.remove('activeThismobiletab');
        if (li.classList.contains(current)) {
            li.classList.add('activeThismobiletab');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('activeThistab');
        if (li.classList.contains(current)) {
            li.classList.add('activeThistab');
        }
    });
});

// Console message
console.log('%c Developed by anuj Paliwal', 'background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;');

// Back to top button
let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Disable right click on images
document.addEventListener("contextmenu", function (e) {
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);