const pageIndicator = document.querySelector(".page-indicator");
const sections = [...document.querySelectorAll(".section")];

const pageSection = sections
  .map((_section) => {
    return `<div class="page-indicator-dot"></div>`;
  })
  .join("");
pageIndicator.innerHTML = pageSection;

const pageIndicatorDots = [...document.querySelectorAll(".page-indicator-dot")];
const windowHeight = window.innerHeight;

function reset() {
  for (let i = 0; i < pageIndicatorDots.length; i++) {
    pageIndicatorDots[i].classList.remove("active");
  }
}

pageIndicatorDots[0].classList.add("active");

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  sections.forEach(function (section, index) {
    if (section.offsetTop < windowHeight / 2 + scrollTop) {
      reset();
      pageIndicatorDots[index].classList.add("active");
    }
  });
});
