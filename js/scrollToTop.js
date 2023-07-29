const scrollBtn = document.getElementById('scrollToTopButton')


scrollBtn.addEventListener('click', (e) => {
    e.preventDefault()

    seamless.scrollIntoView(document.querySelector(".header"), {
        behavior: "smooth",
        block: "center",
        inline: "center",
    });


})