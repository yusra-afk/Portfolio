document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Dark Mode Toggle
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggleButton.textContent = "🌞 Toggle Dark Mode";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        if (body.classList.contains("light-mode")) {
            toggleButton.textContent = "🌞 Toggle Dark Mode";
            localStorage.setItem("theme", "light");
        } else {
            toggleButton.textContent = "🌙 Toggle Light Mode";
            localStorage.setItem("theme", "dark");
        }
    });
});