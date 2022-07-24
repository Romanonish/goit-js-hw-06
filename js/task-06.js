const inputEl = document.querySelector("#validation-input");
const dataLength = Number(inputEl.getAttribute("data-length"));


inputEl.addEventListener("blur", (e) => {
    let valueLength = e.currentTarget.value.length;

    inputEl.classList.add("invalid");
    
    valueLength === dataLength ? inputEl.classList.replace("invalid", "valid") : inputEl.classList.replace("valid","invalid");    
})

