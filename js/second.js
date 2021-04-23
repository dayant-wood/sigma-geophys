'use strict';
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: true,
    // },

});


const dropdown = document.querySelector('.dropdown');
const linkClick = document.querySelector('.navbar__item--click');
linkClick.addEventListener('click', function(event) {
    event.preventDefault();
    dropdown.classList.toggle('show');
})

document.addEventListener("click", function() {
    dropdown.style.display = 'none';
});