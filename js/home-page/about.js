const aboutImg = document.querySelector(".about-img");
const aboutText = document.querySelector(".about-text");

if (window.innerWidth > 640) {
  aboutImg.setAttribute("data-aos", "fade-up");
  aboutText.setAttribute("data-aos", "fade-up");
  aboutText.setAttribute("data-aos-delay", "100");
} else {
  aboutImg.setAttribute("data-aos", "fade-up");
  aboutText.setAttribute("data-aos", "fade-up");
}
