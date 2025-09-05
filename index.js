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
