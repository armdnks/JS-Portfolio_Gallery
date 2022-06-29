const worksContainer = document.querySelector(".works-container");

const url = "../data/data.json";
async function getGallery() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const worksImages = data
      .filter((item) => item.isFeatured === true)
      .map((item) => {
        const { id, image, title, brand, year } = item;
        return /*html*/ `
        <div class="works-item" data-id="${id}" data-aos="fade-up">
          <img src="${image}" alt="works" class="works-img" />
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
  } catch (error) {
    console.log(error);
    const worksContainerErrorStyle = "width: 100%; min-height: 10vh; display: flex; align-items: center; justify-conter: center; ";
    worksContainer.style = worksContainerErrorStyle;
    worksContainer.innerHTML = `<h1 class="works-container-error">Sorry, there is something wrong.</h1>`;
  }
}

getGallery();
