// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector('.gallery')

galleryItems.forEach(({ preview, original, description }) => {
    gallery.insertAdjacentHTML('beforeend',
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`)
});

const clickOnThePicture = new SimpleLightbox('.gallery__item', { captionDelay: 500, captionsData: 'alt'});
clickOnThePicture.on('show.simplelightbox', function () {});
