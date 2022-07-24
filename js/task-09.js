function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonEl: document.querySelector(".change-color"), 
  colorValEl: document.querySelector(".color"),
  bodyEl: document.querySelector("body"),
};

refs.buttonEl.addEventListener('click', () => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.colorValEl.textContent = refs.bodyEl.style.backgroundColor;
});