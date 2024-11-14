// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Typing Effect
document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector(".typing");
    const text = typingText.textContent;
    typingText.textContent = "";
    let index = 0;
    const speed = 100;

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
});

// Skill Bars Animation
window.addEventListener("scroll", () => {
    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach(bar => {
        const skillValue = bar.getAttribute("data-skill");
        const sectionTop = bar.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            bar.style.width = skillValue;
        }
    });
});
