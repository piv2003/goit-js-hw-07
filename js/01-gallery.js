import { galleryItems } from './gallery-items.js';
// Change code below this line
let  modalImg;
const galleryImgRef = document.querySelector('.gallery');
const createMarkupImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`,
  )
  .join('');

galleryImgRef.insertAdjacentHTML('beforeend', createMarkupImg);

const onGalleryClick = evt => {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') return;
  onOpenModal(evt.target.dataset.source);
};

galleryImgRef.addEventListener('click', onGalleryClick);

const onCreateModal = img =>
  basicLightbox.create(
    `<img src="${img}" 
       width="800" 
      alt="${img}">`,
  );

const onOpenModal = img => {
  modalImg = onCreateModal(img);
  modalImg.show();  
  document.addEventListener('keydown', onKeyPress);
};

const onKeyPress = evt => {
  if (evt.code !== 'Escape') {
    return;
  };  
  // window.removeEventListener('keydown', onKeyPress, true);
  modalImg.close();
};

