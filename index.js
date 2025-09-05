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

document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "pdf/CV.pdf"; // path to your PDF
  link.download = "Quiroga's CV.pdf"; // file name for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
