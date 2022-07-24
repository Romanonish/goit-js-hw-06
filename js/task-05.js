const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (e) => {
    refs.output.textContent = e.currentTarget.value;
    e.currentTarget.value === "" ? refs.output.textContent = "Anonymous" : "";
}
);