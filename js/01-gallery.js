import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const newGallery = createElement(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', newGallery);
galleryEl.addEventListener('click', onClickGalleryImg);


function createElement(gallery) {
    return gallery.map(({ preview, original, destription }) => {
        return `
            <div class="gallery__item">
            <a class="gallery__link" 
            href="">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${destription}"
            />
            </a>
            </div>
        `;
    }).join('');
}

function onClickGalleryImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const selectImg = e.target.dataset.source;
    console.log(selectImg);
    return selectImg;
}

import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instance.show()























// const arr = [];


// galleryItems.forEach(el => {
//     const divEl = document.createElement('div');
//     divEl.className = 'gallery__item';
//     const linkEl = document.createElement('a');
//     linkEl.className = 'gallery__link';
//     linkEl.href = el.original;
//     const imgEl = document.createElement('img');
//     imgEl.className = 'gallery__image';
//     imgEl.src = el.preview;
//     imgEl.alt = el.description;
//     imgEl.setAttribute('data-source', el.original);

//     divEl.append(linkEl);
//     linkEl.append(imgEl);
//     arr.push(divEl);
// });

// galleryEl.append(...arr);

// galleryEl.addEventListener('click', event => {
//     event.preventDefault();
//     if (event.target.nodeName !== 'IMG') {
//         return ;
//     }

//     const selectImg = event.target.dataset.source;
// })
