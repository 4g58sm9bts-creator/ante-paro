/* -------------------- DARK MODE -------------------- */
const toggleButton = document.querySelector(".toggle-dark");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleButton.textContent = "Light mode";
    } else {
        toggleButton.textContent = "Dark mode";
    }
});

/* -------------------- FADE-IN ANIMACIJE -------------------- */
const animatedElements = document.querySelectorAll(".fade-in");

function checkAnimations() {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.animationPlayState = "running";
        }
    });
}

window.addEventListener("scroll", checkAnimations);
window.addEventListener("load", checkAnimations);
