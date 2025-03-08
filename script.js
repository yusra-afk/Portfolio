document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jumping behavior
            const targetId = this.getAttribute('href').substring(1); // Get section ID
            const targetElement = document.getElementById(targetId); // Find the section

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Scroll to the section with an offset for fixed headers
                    behavior: 'smooth' // Enables smooth scrolling effect
                });
            }
        });
    });
});
