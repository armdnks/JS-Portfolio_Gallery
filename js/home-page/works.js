import { CONSTANTS } from "../utils/constants.js";
import { snakeToCamel } from "../utils/helper.js";

const worksContainer = document.querySelector(".works-container");

const url = CONSTANTS.PORTFOLIO_URL;

async function loadGallery() {
  try {
    const res = await fetch(url);
    const data = snakeToCamel(await res.json());
    displayImages(data);
  } catch (error) {
    console.log(error);
    const worksContainerErrorStyle =
      "width: 100%; min-height: 10vh; display: flex; align-items: center; justify-conter: center; ";
    worksContainer.style = worksContainerErrorStyle;
    worksContainer.innerHTML = `<h1 class="works-container-error">Sorry, there is something wrong.</h1>`;
  }
}

function displayImages(data) {
  const worksImages = data
    // .filter((item) => item.isFeatured === true)
    .slice(0, 3)
    .map((item) => {
      const { id, imageUrl, title, brand, year } = item;
      return `
        <div class="works-item" data-id="${id}" data-aos="fade-up">
          <img src="${imageUrl[0]}" alt="works" class="works-img" />
          <div class="works-desc">
            <h1 class="works-title">${title}</h1>
            <h1 class="works-brand">${brand}</h1>
            <h1 class="works-year">${year}</h1>
          </div>
        </div>
      `;
    })
    .join("");
  worksContainer.innerHTML = worksImages;
}

loadGallery();
