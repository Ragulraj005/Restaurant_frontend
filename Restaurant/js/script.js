let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    // Close menu and search form on scroll
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    document.querySelector('#search-form').classList.remove('active');


    sections.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header .navbar a[href*=${id}]`).classList.add('active');
        }
    });
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// NEW: Black and White Toggle
document.querySelector('#bw-toggle').onclick = () => {
    document.body.classList.toggle('grayscale');
};


var homeSwiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 1500, // Reduced delay for faster demo
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var reviewSwiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 1000, // Reduced delay for faster demo
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },
});

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    // Using setTimeout to ensure loader is visible for at least 1 second
    setTimeout(() => {
        loader();
    }, 1000); // Loader visible for 1 second before fading out
}

window.onload = fadeOut;
