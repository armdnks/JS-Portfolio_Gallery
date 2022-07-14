import "../layout/header.js";
import "../layout/footer.js";

import { CONSTANTS } from "../utils/constants.js";
import { showModal } from "./modal.js";

const htmlElement = document.documentElement;
htmlElement.classList.add(localStorage.getItem("theme"));
const worksContainer = document.querySelector(".works-container");
const worksFilter = document.querySelector(".works-filter");
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

let resultImages = [];

window.addEventListener("DOMContentLoaded", loadImages);
async function loadImages() {
  try {
    const res = await fetch(CONSTANTS.PORTFOLIO_URL);
    resultImages = await res.json();
    resultImages.splice(-1);
    displayImages(resultImages);
    displayButtons(resultImages);
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("keyup", searchImage);
form.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    searchImage(e);
  }
});

function searchImage(e) {
  const searchString = e.target.value.toLowerCase();
  let filteredImages = resultImages.filter((image) => {
    return (
      image.title.toLowerCase().includes(searchString) ||
      image.brand.toLowerCase().includes(searchString)
    );
  });

  if (filteredImages.length < 1) {
    worksContainer.innerHTML = `
      <div class="works-not-found">
        <img class="works-not-found-img" src="${CONSTANTS.WORKS_NOT_FOUND_IMG}" alt="not-found-img"/>
        <h1 class="works-not-found-text">${CONSTANTS.WORKS_NOT_FOUND_TEXT}</h1>
      </div>
    `;
  } else {
    displayImages(filteredImages);
  }
}

worksFilter.addEventListener("click", (e) => {
  const target = e.target;
  let filteredImages;

  if (target.classList.contains("works-filter-btn")) {
    const worksFilterBtn = document.querySelectorAll(".works-filter-btn");
    worksFilterBtn.forEach((button) => {
      button.classList.remove("active");
      target.classList.add("active");
    });

    if (target.dataset.brand === "all") {
      filteredImages = [...resultImages];
    } else {
      filteredImages = resultImages.filter((image) => {
        return image.brand.toLowerCase() === target.dataset.brand;
      });
    }
    searchInput.value = "";
    displayImages(filteredImages);
  }
});

function displayImages(images) {
  const workImages = images
    .map((image) => {
      const { id, imageUrl, title, year } = image;
      return `
        <div class="works-item" data-id="${id}">
            <div class="works-text">
                <h1 class="works-title">${title}</h1>
                <h1 class="works-year">${year}</h1>
            </div>
            <img src="${imageUrl[0]}" alt="placeholder" class="works-img" />
        </div>
        `;
    })
    .join("");
  worksContainer.innerHTML = workImages;

  const worksItem = document.querySelectorAll(".works-item");
  worksItem.forEach((item) => {
    item.addEventListener("click", getSingleImage);
  });
}

function getSingleImage(e) {
  const target = e.target;
  let dataId;
  if (target.classList.contains("works-item")) {
    dataId = target.dataset.id;
  } else if (
    target.classList.contains("works-title") ||
    target.classList.contains("works-year")
  ) {
    dataId = target.parentElement.parentElement.dataset.id;
  }
  showModal(dataId, resultImages);
}

function displayButtons(images) {
  const buttons = [
    ...new Set(images.map((image) => image.brand.toLowerCase())),
  ];
  const filterButtons = buttons
    .sort()
    .map((brand) => {
      const singleBrand = `<li class="works-filter-btn" data-brand="${brand}">${brand}</li>`;
      return singleBrand;
    })
    .join("");
  const allBrand = `<li class="works-filter-btn active" data-brand="all">all</li>`;
  worksFilter.innerHTML = allBrand + filterButtons;
}
