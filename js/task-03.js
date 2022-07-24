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

const itemsEl = images.map(item => {
  const { url, alt } = item;
  const itemEl = document.createElement("li");
  itemEl.insertAdjacentHTML("afterbegin", `<img class = gallery__image src = ${url} alt = ${alt}></img>`); 
  itemEl.classList.add("gallery__item");
  itemEl.style.listStyle = "none";
  itemEl.style.display = "block";
  itemEl.style.marginBottom = "20px";
    
  return itemEl;
});

const galeryEl = document.querySelector(".gallery");
galeryEl.append(...itemsEl);

const imgEl = document.querySelectorAll(".gallery__image");
imgEl.forEach(img => {
  img.width = 800;
  img.style.display = "block";  
})
console.log("~ imgEl", imgEl);
  
