import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

function createGallery(images) {
  return images
    .map(
      (image) =>
        `<a class="gallery__item" href="${image.original}">
        <img
            class="gallery__image"
            src="${image.preview}"
            alt="${image.description}"
         />
         </a>`
    )
    .join("");
}

const addGallery = createGallery(galleryItems);
galleryList.innerHTML = addGallery;

console.log(galleryList);

//adding SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);
console.log(galleryList);
