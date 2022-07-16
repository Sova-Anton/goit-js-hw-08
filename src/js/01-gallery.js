// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
// galleryContainer.addEventListener("click", )

const renderGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a></li>`
  )
  .join("");

function insertRenderedItems(string) {
  return galleryContainer.insertAdjacentHTML("beforeend", string);
}

insertRenderedItems(renderGallery);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
