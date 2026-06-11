// ======================
// PROMO SLIDER
// ======================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

if (slides.length > 0) {

  slides.forEach((slide, index) => {
    if (index !== 0) {
      slide.style.display = "none";
    }
  });

  setInterval(() => {

    slides[currentSlide].style.display = "none";

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].style.display = "block";

  }, 4000);

}

// ======================
// SEARCH GAME
// ======================

const searchInput = document.querySelector(
  ".search-section input"
);

const gameCards = document.querySelectorAll(
  ".game-card"
);

if (searchInput) {

  searchInput.addEventListener("input", () => {

    const keyword =
      searchInput.value.toLowerCase();

    gameCards.forEach(card => {

      const gameName =
        card.textContent.toLowerCase();

      if (gameName.includes(keyword)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

}

// ======================
// CATEGORY BUTTON
// ======================

const categoryButtons =
  document.querySelectorAll(
    ".category-list button"
  );

categoryButtons.forEach(button => {

  button.addEventListener("click", () => {

    categoryButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

  });

