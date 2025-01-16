let bg1 = document.getElementById('bg1');
let bg2 = document.getElementById('bg2');
let bg4 = document.getElementById('bg4');
let bg5 = document.getElementById('bg5');
let b1 = document.getElementById('b1');
let meteor = document.getElementById('meteor');
let ball = document.getElementById('ball');
let ballshadow = document.getElementById('ballshadow');
let mtnL = document.getElementById('mtnL');
let mtnR = document.getElementById('mtnR');
let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    text2.style.marginTop = value * 2.5 + 'px';
    text3.style.marginTop = value * 2.5 + 'px';
    meteor.style.top = value * -1 + 'px';
    ball.style.top = value * -0.1 + 'px';
    b1.style.top = value * -0.1 + 'px';
    mtnL.style.top = `calc(55vh + (${value * -.1}px))`;

    mtnR.style.top = `calc(60vh + (${value * -.2}px))`;
    mtnL.style.width = `calc(35% - (${value * +.2}px))`;
    mtnR.style.width = `calc(45% - (${value * +.3}px))`;
    mtnR.style.transform = `translateX( calc(125% - (${value * -0.11}%))`;
});

var container = document.getElementById('cont');
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn-slider');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else if (w < 901) {
        slidesPerPage = 2;
    } else {
        slidesPerPage = 3;
    }

    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };

    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';

    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }

    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }

    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }

    updateSlideClasses();
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition == 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    updateSlideClasses();
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    updateSlideClasses();
};

function updateSlideClasses() {
    const allSlides = document.querySelectorAll('#slider-container #slider .slide');
    allSlides.forEach((slide, index) => {
        slide.classList.remove('darken');

        if (index < currentPosition || index > currentPosition + slidesPerPage - 1) {
            slide.classList.add('darken');
        }
    });
}



const container2 = document.getElementById('cont2');
const slider2 = document.getElementById('slider2');
const buttons2 = document.getElementsByClassName('btn-slider2');
let currentPosition2 = 0;
const slidesPerPage2 = 2;
let slidesCount2 = slider2.children.length - slidesPerPage2;

function setParams2() {
    slidesCount2 = Math.max(slider2.children.length - slidesPerPage2, 0);

    currentPosition2 = Math.min(currentPosition2, slidesCount2);
    slider2.style.marginLeft = `-${(100 / slidesPerPage2) * currentPosition2}%`;

    buttons2[0].classList.toggle('inactive', currentPosition2 === 0);
    buttons2[1].classList.toggle('inactive', currentPosition2 >= slidesCount2);

    updateSlideClasses2();
}

function slideRight2() {
    if (currentPosition2 > 0) {
        currentPosition2--;
        setParams2();
    }
}

function slideLeft2() {
    if (currentPosition2 < slidesCount2) {
        currentPosition2++;
        setParams2();
    }
}

function updateSlideClasses2() {
    const slides2 = Array.from(slider2.children);
    slides2.forEach((slide2, index2) => {
        slide2.classList.toggle('darken', index2 < currentPosition2 || index2 >= currentPosition2 + slidesPerPage2);
    });
}

function initializeSlider2() {
    window.addEventListener("resize", setParams2);
    setParams2();
}

initializeSlider2();

