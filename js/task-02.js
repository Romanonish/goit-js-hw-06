const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsEl = ingredients.map(ingredient => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  return itemEl;
});

const listEl = document.querySelector("#ingredients");
listEl.append(...itemsEl);