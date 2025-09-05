// Open modal
const projectCards = document.querySelectorAll(".project-card");
const closeBtns = document.querySelectorAll(".close");

// Track intervals per modal
const slideIntervals = new Map();

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const target = document.getElementById(card.dataset.target);
    if (target) {
      target.style.display = "block";
      startSlideshow(target); // auto slideshow on open
    }
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.style.display = "none";
    stopSlideshow(modal); // stop when closed
  });
});

// Close when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
    stopSlideshow(e.target);
  }
});

// ---------------- Slideshow ----------------
function showSlides(modal, index) {
  const slides = modal.querySelectorAll(".slide");
  if (slides.length === 0) return;

  slides.forEach((s, i) => (s.style.display = i === index ? "block" : "none"));
  modal.dataset.currentSlide = index; // save current
}

function startSlideshow(modal) {
  let slides = modal.querySelectorAll(".slide");
  if (slides.length === 0) return;

  let index = 0;
  showSlides(modal, index);

  const interval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlides(modal, index);
  }, 3000); // change every 3s

  slideIntervals.set(modal, interval);
}

function stopSlideshow(modal) {
  if (slideIntervals.has(modal)) {
    clearInterval(slideIntervals.get(modal));
    slideIntervals.delete(modal);
  }
}
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
