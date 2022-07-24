function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  formEl: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  insBoxEl: document.querySelector('#boxes'),

}

function createBoxes() { 
  document.createElement(`div`);
refs.insBoxEl.append()
};

refs.btnCreate.addEventListener('click', createBoxes(refs.formEl.value));

console.log("~ refs.formEl", refs.formEl.value)
console.log("~ refs.formEl", refs.btnCreate)
console.log("~ refs.formEl", refs.btnDestroy)
