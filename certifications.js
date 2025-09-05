// Lightbox functionality
const certCards = document.querySelectorAll(".cert-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".lightbox .close");

certCards.forEach((card) => {
  card.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = card.src;
    lightboxCaption.textContent = card.alt;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
// Fade in on load
window.onload = () => {
  document.body.classList.add("fade-in");
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
