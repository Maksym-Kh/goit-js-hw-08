const images = [
{
preview:
 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
 original:
 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
 description: 'Hokkaido Flower',
 },
 {
 preview:
 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
 original:
 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
 description: 'Container Haulage Freight',
 },
 {
 preview:
 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
 original:
 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
 description: 'Aerial Beach View',
 },
 {
 preview:
 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
 original:
 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
 description: 'Flower Blooms',
 },
 {
 preview:
 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
 original:
 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
 description: 'Alpine Mountains',
 },
 {
 preview:
 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
 original:
 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
 description: 'Mountain Lake Sailing',
 },
 {
 preview:
 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
 original:
 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
 description: 'Alpine Spring Meadows',
 },
 {
 preview:
 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
 original:
 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
 description: 'Nature Landscape',
 },
 {
 preview:
 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
 original:
 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
 description: 'Lighthouse Coast Sea',
 },
];

// шукаєм ел в дом
const refs = {
  galleryList: document.querySelector(".gallery"),
  galleryLink: document.querySelector(".gallery-link"),
}
// ств шабл рядок
const createImagesTemplate = image => {
    return `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`};
// через метод мап викликаєм для кожного ел вихідного масиву колбек функ і потім перетворюєм на рядок через метод джоін  
const imagesTemplate = images.map(image => createImagesTemplate(image)).join('');
// записуєм  зроблений рядок в дом 
refs.galleryList.innerHTML = imagesTemplate;




// колбек функ гелері ліст
const imageHandle = (event) => {
  // відміна дефолт подій
  event.preventDefault();
// якщо поточна ціль не містить клас гелері імедж 
  if (!event.target.classList.contains("gallery-image")) {
    // то повертаєм
    return;
  }
  // шукаєм атрибут поточної цілі дата сурс
  const bigImage = event.target.getAttribute('data-source');



// колбек функ 
  const onEscPress = event => {
  // перевіряє чи парам код(клавіша) поточного ел строго = ескейп 
  if (event.code === "Escape") {
    instance.close();
  }
  }
  


// ств шабл рядок розмітки хтмл модалки
const instance = basicLightbox.create(`
    <div class="modal">
      <img class="modal-gallery-image"
      src="${bigImage}"
      alt="${event.target.alt}"
    />
    </div>`, {
      // коли відкрито
  onShow: () => {
        // додаєм прослуховувач подій
    document.addEventListener('keydown', onEscPress);
  },
      // коли закрито
  onClose: () => {
    // видаляєм прослуховувач подій
    document.removeEventListener('keydown', onEscPress);
  }
});
  
  
// показуєм модалку
  instance.show();
}



// делегування. подія клік на ел гелері ліст з коллбеком імедж хендл
refs.galleryList.addEventListener("click", imageHandle);
