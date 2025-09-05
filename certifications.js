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
