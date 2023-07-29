var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    effect: "fade",
    speed: 900,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});