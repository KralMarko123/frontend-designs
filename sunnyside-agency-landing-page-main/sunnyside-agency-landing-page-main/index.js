// VARIABLES
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile__list");
const hamburgerLines = document.querySelectorAll(".hamburger__line");

// LISTENERS
hamburger.addEventListener("click", () => {
  toggleMobileMenu();
});

// METHODS
const toggleMobileMenu = () => {
  toggleActive(hamburger);
  toggleActive(mobileMenu);
  console.log("gets called");
  hamburgerLines.forEach((line) => {
    toggleActive(line);
  });
};

// HELPER METHODS
const toggleActive = (element) => {
  element.classList.contains("active")
    ? element.classList.remove("active")
    : element.classList.add("active");
};
