const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);

const categoriesEl = document.querySelectorAll(".item");

categoriesEl.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.childNodes[3].childElementCount}`)
});