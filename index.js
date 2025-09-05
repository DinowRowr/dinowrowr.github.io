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

document.body.classList.add("fade-start");
requestAnimationFrame(() => {
  document.body.classList.remove("fade-start");
  document.body.classList.add("fade-in");
});

// Fade in on load
window.onload = () => {
  document.body.classList.add("fade-in");
  document.getElementById("intro")?.classList.add("show");
  document.getElementById("profilePic")?.classList.add("show");
};

// Smooth back navigation
document.querySelectorAll(".page-link").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = btn.getAttribute("data-target");
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = target;
    }, 500);
  });
});

