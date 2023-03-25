import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryEl = document.querySelector(".gallery");

const Images = createMarkupGallery(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", Images);

function createMarkupGallery(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                      <a class="gallery__link" href="${original}">
                              <img class="gallery__image"
                              src="${preview}"
                              data-source="${original}"
                              alt="${description}"/>
                              </a>
                    </li>`;
    })
    .join("");
}

// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Відкриття модального вікна по кліку на елементі галереї.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Додати закриття модального вікна після натискання клавіші Escape. Зробити так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.

galleryEl.addEventListener("click", onOpenModalClick);

function onOpenModalClick(e) {
  e.preventDefault();
  if (!e.target.dataset.source) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  document.addEventListener(
    "keydown",
    (e) => {
      if (e.code === "Escape") {
        instance.close();
      }
    },
    { once: true }
  );
}
