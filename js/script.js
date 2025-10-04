document.addEventListener("DOMContentLoaded", () => {
  // ===== SLIDER FUNCTIONALITY =====
  const track = document.getElementById("sliderTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (track && prevBtn && nextBtn) {
    let index = 0;
    const cardWidth = 380; // card width + margin
    const totalCards = track.children.length;

    function updateSlider() {
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
      if (index < totalCards - 1) {
        index++;
        updateSlider();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
        updateSlider();
      }
    });
  }

  // ===== HAMBURGER MENU FUNCTIONALITY =====
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }
});
