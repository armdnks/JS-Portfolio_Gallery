import { CONSTANTS } from "../utils/constants.js";

const modalContainer = document.querySelector(".modal-container");

export function showModal(requestId, resultImages) {
  const findImage = resultImages.find((image) => image.id === requestId);
  const { id, imageUrl, title, brand, year, country, category, description } =
    findImage;
  modalContainer.classList.add("show");
  document.body.style.overflow = "hidden";

  const modalContent = `
    <div class="modal">
      <p class="close-warning">${CONSTANTS.CLOSE_MODAL_TEXT}</p>
      <div class="modal-img-container">
        <div class="modal-img-btn-container">
          <button type="button" class="modal-img-prev-btn">prev</button>
          <button type="button" class="modal-img-next-btn">next</button>
        </div>
        <img src="${imageUrl[0]}" alt="" class="modal-img" />
      </div>
      <div class="modal-content">
        <div class="modal-group">
          <p class="modal-label">title</p>
          <h1 class="modal-title">${title}</h1>
        </div>
        <div class="modal-group">
          <p class="modal-label">brand</p>
          <h1 class="modal-brand">${brand}</h1>
        </div>
        <div class="modal-group">
          <p class="modal-label">year</p>
          <h1 class="modal-year">${year}</h1>
        </div>
        <div class="modal-group">
          <p class="modal-label">country</p>
          <h1 class="modal-country">${country}</h1>
        </div>
        <div class="modal-group">
          <p class="modal-label">category</p>
          <h1 class="modal-category">${category.join(", ")}</h1>
        </div>
        <div class="modal-group">
          <p class="modal-label">description</p>
          <p class="modal-desc">${
            description === undefined ? "..." : description
          }</p>
        </div>
      </div>
    </div>
  `;
  modalContainer.innerHTML = modalContent;
}

modalContainer.addEventListener("click", () => {
  modalContainer.classList.remove("show");
  document.body.style.overflow = "unset";
  document.body.style.position = "unset";
});
