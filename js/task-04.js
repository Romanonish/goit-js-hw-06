const refs = {
    btnIncrement: document.querySelector(`[data-action = "increment"]`),
    btnDecrement: document.querySelector(`[data-action = "decrement"]`),
    value: document.querySelector("#value"),
}

let counterValue  = 0;

refs.btnIncrement.addEventListener("click", onBtnIncrementClick);

refs.btnDecrement.addEventListener("click", onBtnDecrementClick);

function onBtnIncrementClick() {    
    counterValue += 1;
    refs.value.textContent = counterValue ;
}

function onBtnDecrementClick() {    
    counterValue -= 1;
    refs.value.textContent = counterValue ;
}
