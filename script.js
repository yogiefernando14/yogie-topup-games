// ======================
// PROMO SLIDER
// ======================

const track = document.querySelector(".slider-track");

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function updateSlider() {

  track.style.transform =

    `translateX(-${currentSlide * 100}%)`;

  dots.forEach(dot => {

    dot.classList.remove("active");

  });

  dots[currentSlide].classList.add("active");

}

setInterval(() => {

  currentSlide++;

  if (currentSlide >= dots.length) {

    currentSlide = 0;

  }

  updateSlider();

}, 4000);

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

});
