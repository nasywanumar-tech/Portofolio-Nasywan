document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in and slide-up animations after content load
    const fadeInElements = document.querySelectorAll(".fade-in");
    const slideUpElements = document.querySelectorAll(".slide-up");

    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = "fadeIn 2s forwards";
        }, index * 500);
    });

    slideUpElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = "slideUp 1.5s forwards";
        }, index * 500);
    });
});
