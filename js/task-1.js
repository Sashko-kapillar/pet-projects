"use strict";

const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryEl = document.querySelector(".gallery");
galleryEl.style.listStyleType = "none";
galleryEl.style.flexWrap = "wrap";
galleryEl.style.gap = "20px 24px";
console.log(galleryEl);

// Деструктурізація
for (const img of images) {
  const { preview, original, description } = img;

  // створення елемента <li>
  const itemEl = document.createElement("li");
  itemEl.classList = "gallery-item";
  itemEl.style.width = "calc((100% - 48px) / 3)";
  itemEl.style.boxShadow =
    "0px 1px 6px rgba(46, 47, 66, 0.18), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.18)";

  // створення елемента <img>
  const imgEl = document.createElement("img");
  imgEl.classList = "gallery-image";
  imgEl.src = `${preview}`;
  imgEl.alt = `${description}`;
  imgEl.width = "360";
  imgEl.dataset.source = original;

  // створення елемента <a>
  const linkEl = document.createElement("a");
  linkEl.classList = "gallery-link";
  linkEl.href = `${original}`;

  // вкладення елементів (перший той у який вкладаємо, тоді той що вкладаємо)
  linkEl.appendChild(imgEl);
  itemEl.appendChild(linkEl);
  galleryEl.appendChild(itemEl);
}

galleryEl.addEventListener("click", (event) => {
  // заборона стандартної поведінки браузера(завантаження зображення на ПК)
  event.preventDefault();

  // перевірка чи клік на картинці
  if (event.target.nodeName !== "IMG") return;

  // бібліотека створює елемент <img>
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="900">
  `);

  // елемент <img> відкривається у модальному вікні
  instance.show();

  // закриваємо модальне вікно клавішею Esc
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
});
