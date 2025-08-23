document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for on-page anchors (if used in future)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 50, behavior: "smooth" });
      }
    });
  });

  // Theme toggle (html.dark)
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    root.classList.add("dark");
  }
  const themeBtnInterval = setInterval(() => {
    const btn = document.getElementById("themeToggle");
    if (!btn) return; // header may not be in DOM yet (fetch)
    clearInterval(themeBtnInterval);
    btn.addEventListener("click", () => {
      const isDark = root.classList.toggle("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }, 50);

  // Cat assistant (kept minimal)
  const catBubble = document.querySelector('.cat-bubble');
  const catImg = document.querySelector('.astro-cat');
  const rotating = [
    "Click 'Courses' to explore my CS journey 💻",
    "Scroll down to contact Yusra 📬",
    "Built with curiosity 🐾"
  ];
  if (catBubble) {
    let i = 0;
    setInterval(() => {
      if (!catBubble.classList.contains("interacting")) {
        i = (i + 1) % rotating.length;
        catBubble.textContent = rotating[i];
      }
    }, 5000);
  }
  if (catImg && catBubble) {
    const quotes = ["You're doing great! 🌟","Keep exploring! 🗺️","Coding is fun, right? 💻","You got this 💪"];
    catImg.addEventListener('mouseenter', () => { catBubble.classList.add("interacting"); catBubble.textContent = "Hi there! 👋"; });
    catImg.addEventListener('mouseleave', () => { catBubble.classList.remove("interacting"); });
    catImg.addEventListener('click', () => {
      catBubble.classList.add("interacting");
      catBubble.textContent = quotes[Math.floor(Math.random()*quotes.length)];
      setTimeout(()=>{ catBubble.classList.remove("interacting"); }, 3000);
    });
  }

  // (Optional) Remove sparkle trail for a professional look.
  // If you want to keep it, uncomment this one handler (not duplicated):
  // document.addEventListener('mousemove', (e) => {
  //   const s = document.createElement('div');
  //   s.className = 'sparkle';
  //   s.style.left = `${e.pageX}px`;
  //   s.style.top = `${e.pageY}px`;
  //   document.body.appendChild(s);
  //   setTimeout(()=> s.remove(), 800);
  // });
});