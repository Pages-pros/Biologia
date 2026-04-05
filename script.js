document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        once: true, // whether animation should happen only once - while scrolling down
        offset: 100, // offset (in px) from the original trigger point
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease-out-cubic', // default easing for AOS animations
    });
});
