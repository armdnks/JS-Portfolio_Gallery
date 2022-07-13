// CREATE HEADER
function createHeader() {
  // header content
  const header = document.getElementById("header");
  header.innerHTML = `
    <a href="#" class="menu-btn">
      <svg x="0px" y="0px" viewBox="0 0 50 30">
        <rect y="0" width="50" height="4" />
        <rect y="13" width="50" height="4" />
        <rect y="26" width="50" height="4" />
      </svg>
    </a>
    <div class="page-indicator">
      <div class="page-indicator-value">
        <p class="page-indicator-percentage">0%</p>
      </div>
    </div>
    <button class="dark-mode-toggle">
      <svg x="0px" y="0px" viewBox="0 0 60 60">
        <path d="M30,0C13.4,0,0,13.4,0,30s13.4,30,30,30s30-13.4,30-30S46.6,0,30,0z M30,53.2V41.8 c-6.5,0-11.8-5.3-11.8-11.8S23.5,18.2,30,18.2V6.8c12.8,0,23.2,10.4,23.2,23.2S42.8,53.2,30,53.2z M30,18.2 c6.5,0,11.8,5.3,11.8,11.8S36.5,41.8,30,41.8V18.2z" />
      </svg>
      <p>dark mode</p>
    </button>
  `;

  // load header css
  const headerStylePath = "./css/layout/header.css";
  const headerStyleLink = document.createElement("link");
  headerStyleLink.rel = "stylesheet";
  headerStyleLink.href = headerStylePath;
  document.head.appendChild(headerStyleLink);
}
createHeader();

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

// PAGE INDICATOR
const pageIndicator = document.querySelector(".page-indicator");
const pageIndicatorValue = document.querySelector(".page-indicator-value");
const pageIndicatorPercentage = document.querySelector(".page-indicator-percentage");

function scrollProgress() {
  const scrollY = document.body.scrollTop || document.documentElement.scrollTop;
  const contentHeight = document.documentElement.scrollHeight;
  const windowHeight = document.documentElement.clientHeight;

  const scrollHeight = contentHeight - windowHeight;
  const scrollProgressValue = (scrollY / scrollHeight) * 100;

  console.log(windowHeight === NaN);
  pageIndicatorValue.style.height = scrollProgressValue + "%";
  pageIndicatorPercentage.textContent = Math.floor(scrollProgressValue) + "%";
}
window.addEventListener("scroll", scrollProgress);
