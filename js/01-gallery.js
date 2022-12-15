import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImg = document.querySelector('.gallery');
console.log(galleryItems);

const createMarkupImg = galleryItems.map(
    ({ original, preview, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`)
  .join('');
  
galleryImg.innerHTML = createMarkupImg;

