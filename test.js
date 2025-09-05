// Universal fade-in function
function fadeInElements() {
  document.body.classList.remove("fade-out"); // remove fade-out
  document.body.classList.add("fade-in");

  // Optional elements — only if they exist
  document.getElementById("intro")?.classList.add("show");
  document.getElementById("profilePic")?.classList.add("show");
}

// Fade in on normal load
window.addEventListener("load", fadeInElements);

// Fade in when coming back via browser back/forward (bfcache)
window.addEventListener("pageshow", (event) => {
  fadeInElements();
});

// Smooth page transitions for links
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
