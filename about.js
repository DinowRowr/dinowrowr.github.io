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

// Modal logic
const items = document.querySelectorAll(".timeline-item");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const modalId = item.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  });
});

closes.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeBtn.parentElement.parentElement.style.display = "none";
  });
});

window.onclick = function (event) {
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

// Slideshow (simple version, single placeholder for now)
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
  setTimeout(showSlides, 3000); // Change every 3s
}
// Handle multiple independent slideshows
document.querySelectorAll(".slideshow-container").forEach((container) => {
  let slides = container.querySelectorAll(".slide");
  let index = 0;

  function showSlides() {
    slides.forEach((slide) => (slide.style.display = "none"));
    index++;
    if (index > slides.length) index = 1;
    slides[index - 1].style.display = "block";
    setTimeout(showSlides, 3000); // rotate every 3s
  }

  if (slides.length > 0) showSlides();
});

//MODAL SECTION

const timelineItems = document.querySelectorAll(".timeline-item");
const progressFills = document.querySelectorAll("#skillsModal .progress-fill");

// Function to animate bars
function animateBars() {
  progressFills.forEach((fill) => {
    fill.style.width = "0"; // reset
    setTimeout(() => {
      fill.style.width = fill.getAttribute("data-percent") + "%";
    }, 150);
  });
}

// Add click event to all timeline items
timelineItems.forEach((item) => {
  item.addEventListener("click", () => {
    const modalId = item.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Run bar animation only if it's the skills modal
    if (modalId === "skillsModal") {
      animateBars();
    }
  });
});

// Close buttons (all modals)
const closeBtns = document.querySelectorAll(".modal .close");
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});
