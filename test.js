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
