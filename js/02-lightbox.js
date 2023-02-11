import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryLayout = galleryItems.map(({ original, description, preview }) => {
    return ` <a class="gallery__item" href="${original}">
                <img 
                    class="gallery__image" 
                     src="${preview}" 
                     alt="${description}" 
                />
            </a>`;

}).join('');

gallery.insertAdjacentHTML('beforeend', galleryLayout);



let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});
