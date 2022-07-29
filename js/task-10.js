function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  formEl: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  insBoxEl: document.querySelector('#boxes'),

}
// const qwantity = refs.formEl.valueAsNumber;
let arr = [];
let width = 20;
let height = 20;
for (let i = 0; i < 3; i += 1) {   
  let backgroundColor = getRandomHexColor();
  let box = { width: width += 10, height: height += 10, backgroundColor };
  arr.push(box);
}
  // refs.insBoxEl.append(boxEl);
 
const createBoxes = function (obj) {
  let boxEl = document.createElement(`div`);
  boxEl.style.width = `${obj.width}px`;
   boxEl.style.height = `${obj.height}px`;
   boxEl.style.backgroundColor = obj.backgroundColor;
};
  console.log(arr);
const destroyBoxes = function () {
  refs.insBoxEl.innerHTML = "";
}


// refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

// console.log("~ refs.formEl", refs.btnCreate)
// console.log("~ refs.formEl", refs.btnDestroy)
