import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImgRef = document.querySelector('.gallery');
const imgMarkup = createItemsMarkup(galleryItems);
galleryImgRef.insertAdjacentHTML("beforeend", imgMarkup);
//galleryImgRef.addEventListener("click", );

function createItemsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>
      </li>`;
    })
    .join("");
}

const ligthBox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});