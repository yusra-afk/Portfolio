async function include(file, selector) {
  try {
    const html = await fetch(file, { cache: "no-store" }).then(r => r.text());
    document.querySelector(selector).innerHTML = html;
  } catch (e) {
    console.error("Include failed:", file, e);
  }
}

// load header & footer
include("/partials/header.html", "#header-placeholder");
include("/partials/footer.html", "#footer-placeholder");