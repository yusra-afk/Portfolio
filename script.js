document.addEventListener("DOMContentLoaded", function () {
    // === Smooth Scrolling ===
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
  
    // === Dark Mode Toggle ===
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
  
    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      body.classList.add("light-mode");
      toggleButton.textContent = "🌞 Light Mode";
    } else {
      toggleButton.textContent = "🌙 Dark Mode";
    }
  
    toggleButton.addEventListener("click", function () {
      body.classList.toggle("light-mode");
      const isLight = body.classList.contains("light-mode");
      toggleButton.textContent = isLight ? "🌞 Light Mode" : "🌙 Dark Mode";
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  
    // === Yusha's Rotating Messages ===
    const catBubble = document.querySelector('.cat-bubble');
    if (catBubble) {
      const messages = [
        "Click 'Courses' to explore my CS journey! 💻",
        "Scroll down to contact Yusra 📬",
        "Built with love and curiosity 🐾",
      ];
  
      let currentIndex = 0;
      setInterval(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        catBubble.textContent = messages[currentIndex];
      }, 5000);
    }
  });