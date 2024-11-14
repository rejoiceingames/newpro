// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
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

// Form Submission Alert
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById("contactForm").reset();
});
