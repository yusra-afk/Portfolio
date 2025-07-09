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
  
    // === Yusha Interactions ===
    const catBubble = document.querySelector('.cat-bubble');
    const catImg = document.querySelector('.astro-cat');
  
    const randomQuotes = [
      "You're doing great! 🌟",
      "Keep exploring! 🗺️",
      "Coding is fun, right? 💻",
      "You got this 💪",
      "I'm always watching...👀 (in a cute way)"
    ];
  
    const rotatingMessages = [
      "Click 'Courses' to explore my CS journey! 💻",
      "Scroll down to contact Yusra 📬",
      "Built with love and curiosity 🐾"
    ];
  
    let currentIndex = 0;
    setInterval(() => {
      if (!catBubble.classList.contains("interacting")) {
        currentIndex = (currentIndex + 1) % rotatingMessages.length;
        catBubble.textContent = rotatingMessages[currentIndex];
      }
    }, 5000);
  
    if (catImg) {
      // Hover
      catImg.addEventListener('mouseenter', () => {
        catBubble.classList.add("interacting");
        catBubble.textContent = "Hi there! 👋";
      });
  
      catImg.addEventListener('mouseleave', () => {
        catBubble.classList.remove("interacting");
        catBubble.textContent = rotatingMessages[currentIndex];
      });
  
      // Click
      catImg.addEventListener('click', () => {
        catBubble.classList.add("interacting");
        const random = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
        catBubble.textContent = random;
        setTimeout(() => {
          catBubble.classList.remove("interacting");
          catBubble.textContent = rotatingMessages[currentIndex];
        }, 4000);
      });
    }

    // Sparkle trail effect
document.addEventListener('mousemove', (e) => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});

document.addEventListener('mousemove', (e) => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});
  });