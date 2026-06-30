// ALAMIN BD Website

console.log("Welcome to ALAMIN BD");

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Welcome message
window.onload = function () {
    console.log("Website Loaded Successfully");
};
