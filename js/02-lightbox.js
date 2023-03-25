import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryEl = document.querySelector(".gallery");

const Images = createMarkupGallery(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", Images);

function createMarkupGallery(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

// Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery.
// Додати відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
