const skillItems = [...document.querySelectorAll(".skill-item")];

skillItems.forEach((item, index) => {
  item.setAttribute("data-aos", "fade-up");
  if (window.innerWidth > 640) {
    item.setAttribute("data-aos-delay", `${index * 50}`);
  }
});
