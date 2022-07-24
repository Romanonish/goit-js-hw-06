const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeEl.addEventListener("change", (e) => {
    textEl.style.fontSize = `${e.currentTarget.value}px`;    
})

