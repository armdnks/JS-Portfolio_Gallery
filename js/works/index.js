const worksContainer = document.querySelector(".works-container");
const worksFilter = document.querySelector(".works-filter");
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

let resultImages = [];

window.addEventListener("DOMContentLoaded", loadImages);
async function loadImages() {
  try {
    const res = await fetch("../../data/data.json");
    resultImages = await res.json();
    displayImages(resultImages);
    displayButtons(resultImages);
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("keyup", searchImage);
function searchImage(e) {
  const searchString = e.target.value.toLowerCase();
  const filteredImages = resultImages.filter((image) => {
    return image.title.toLowerCase().includes(searchString) || image.brand.toLowerCase().includes(searchString);
  });

  if (filteredImages.length < 1) {
    worksContainer.innerHTML = "<h1>Sorry, no images matched your search</h1>";
  } else {
    displayImages(filteredImages);
  }
}

worksFilter.addEventListener("click", (e) => {
  const target = e.target;
  let filteredImages;
  if (target.classList.contains("works-filter-btn")) {
    if (target.dataset.id === "all") {
      filteredImages = [...resultImages];
    } else {
      filteredImages = resultImages.filter((image) => {
        return image.brand === target.dataset.id;
      });
    }
    searchInput.value = "";
    displayImages(filteredImages);
  }
});

function displayImages(images) {
  const workImages = images
    .map((image) => {
      const { id, imageUrl } = image;
      return `
        <div class="works-item" data-id="${id}">
            <div class="works-text">
                <h1 class="works-title">hello world</h1>
                <h1 class="works-year">2022</h1>
            </div>
            <img src="${imageUrl}" alt="placeholder" class="works-img" />
        </div>
        `;
    })
    .join("");
  worksContainer.innerHTML = workImages;
}

function displayButtons(images) {
  const buttons = [...new Set(images.map((image) => image.brand))];
  const filterButtons = buttons
    .map((brand) => {
      return `<li class="works-filter-btn" data-id="${brand}">${brand}</li>`;
    })
    .join("");

  worksFilter.insertAdjacentHTML("beforeend", filterButtons);
}
