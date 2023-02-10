import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryLayout = galleryItems.map(({ original, description, preview }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                loading="lazy"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;
}).join('');

gallery.insertAdjacentHTML('beforeend', galleryLayout);

gallery.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.nodeName !== "IMG") {
        return
    }

    const originalSizeImg = e.target.dataset.source;
    const instance = basicLightbox.create(`
        <img src="${originalSizeImg}" >
    `)

    const closeByEscapeBtn = (e) => {
        if (e.code === 'Escape') {
            instance.close()
            document.removeEventListener('keydown', closeByEscapeBtn)
        }
    }

    instance.show()

    document.addEventListener('keydown', closeByEscapeBtn)
})

