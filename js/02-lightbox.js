import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImgRef = document.querySelector('.gallery');
const imgMarkup = createItemsMarkup(galleryItems);

galleryImgRef.insertAdjacentHTML("beforeend", imgMarkup);



