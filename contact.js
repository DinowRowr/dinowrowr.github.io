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
// Open modal when clicking on reference card
document.querySelectorAll(".references-card").forEach((card) => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-target");
    document.getElementById(modalId).style.display = "block";
  });
});

// Close modal when clicking on X
document.querySelectorAll(".close").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

// Copy to clipboard functionality
document.querySelectorAll(".copy-text").forEach((item) => {
  item.addEventListener("click", () => {
    const text = item.getAttribute("data-copy");

    navigator.clipboard.writeText(text).then(() => {
      item.classList.add("copied");

      // Revert back to original tooltip after 1.5s
      setTimeout(() => {
        item.classList.remove("copied");
      }, 1500);
    });
  });
});
