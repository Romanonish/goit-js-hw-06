const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  
];

const makeListItems = (image) => {
  const { url, alt } = image;
  return `
  <li class = "gallery__item">
    <img class = "gallery__image" src=${url} alt=${alt}>
  </li>
  `
};

const makeImagesList = images.map(makeListItems).join('');
const galeryEl = document.querySelector('.gallery');
galeryEl.insertAdjacentHTML('beforeend', makeImagesList);

console.log(makeImagesList);

// const makeItemStyle = (item) => {
//   item.style.listStyle = "none";
//   item.style.display = "block";
//   item.style.marginBottom = "20px";
// };

// const makeImageStyle = (image) => {
//   image.width = 800;
//   image.style.display = "block";  
// }

// const itemsEl = document.querySelectorAll('.gallery__item');
// itemsEl.forEach(makeItemStyle);

// const imagesEl = document.querySelectorAll('.gallery__image');
// imagesEl.forEach(makeImageStyle);  
