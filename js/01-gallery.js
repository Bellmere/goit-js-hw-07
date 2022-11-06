import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const divEl = document.createElement('div').classList.add('gallery__item');
const linkEl = document.createElement('a').classList.add('gallery__link');
let imgEl = document.createElement('img').classList.add('gallery__image');

divEl.innerHTML = linkEl;

const newGallery = galleryItems.map(item => {
    imgEl = `<img src=${item.preview} alt=${item.description} data-source=${item.original}></img>`;
}).join('');

// galleryEl.insertAdjacentElement('afterbegin', newGallery);
