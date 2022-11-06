import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const arr = [];


galleryItems.forEach(el => {
    const divEl = document.createElement('div');
    divEl.className = 'gallery__item';
    const linkEl = document.createElement('a');
    linkEl.className = 'gallery__link';
    linkEl.href = el.original;
    const imgEl = document.createElement('img');
    imgEl.className = 'gallery__image';
    imgEl.src = el.preview;
    imgEl.alt = el.description;
    imgEl.setAttribute('data-source', el.original);

    divEl.append(linkEl);
    linkEl.append(imgEl);
    arr.push(divEl);
});

galleryEl.append(...arr);

galleryEl.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return ;
    }

    const selectImg = event.target.dataset.source;
})
