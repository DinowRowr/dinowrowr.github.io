const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const menu = document.getElementById("menu");
const profilePic = document.getElementById("profilePic");

startBtn.addEventListener("click", () => {
  // Fade out intro text + button only
  intro.classList.remove("show");
  setTimeout(() => {
    intro.classList.add("hidden");

    // Keep profile picture but move it up a little
    profilePic.classList.add("move-up");

    // Show menu
    menu.classList.remove("hidden");
    setTimeout(() => menu.classList.add("show"), 50);
  }, 500);
});

// Ensure body fades in normally
function fadeInBody() {
  document.body.classList.add("fade-in");
  document.body.classList.remove("fade-out");
  document.getElementById("intro")?.classList.add("show");
  document.getElementById("profilePic")?.classList.add("show");
}

// Normal load
window.addEventListener("load", fadeInBody);

// Handle back/forward navigation
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    // Always redirect back to index.html if not already there
    if (!window.location.pathname.endsWith("index.html") && window.location.pathname !== "/") {
      window.location.href = "index.html";
      return;
    }
    fadeInBody();
  }
});

// Smooth navigation for page links
document.querySelectorAll(".page-link").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = btn.getAttribute("data-target");

    document.body.classList.remove("fade-in");
    document.body.classList.add("fade-out");

    const transitionDuration = parseFloat(
      getComputedStyle(document.body).transitionDuration
    ) * 1000;

    setTimeout(() => {
      window.location.href = target;
    }, transitionDuration);
  });
});




