import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const newGallery = createElement(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', newGallery);

function createElement(gallery) {
    return gallery.map(({ preview, original, destription }) => {
        return `
            <li class="gallery__item">
            <a class="gallery__item" 
            href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${destription}" />
            </a>
            </li>
        `;
    }).join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
     /* options */ 
     captions: true,
     captionType: 'alt',
     captionDelay: 250,
     preloading: true,
     captionPosition: 'bottom',
     captionsData: title,

     

    });