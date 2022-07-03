// DARK MODE TOGGLE
const htmlElement = document.documentElement;
htmlElement.classList.add(localStorage.getItem("theme"));

const darkModeToggle = document.querySelector(".dark-mode-toggle");
darkModeToggle.addEventListener("click", darkMode);
function darkMode() {
  htmlElement.classList.toggle("dark-theme");
  if (htmlElement.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark-theme");
  } else {
    localStorage.setItem("theme", null);
  }
}
