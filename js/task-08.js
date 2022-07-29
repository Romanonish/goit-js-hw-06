const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {

    e.preventDefault();
    e.currentTarget.elements.email.value === '' || e.currentTarget.elements.password.value === '' ? alert("Все поля должны быть заполнены!") : "";
    const formData = {
        email: e.currentTarget.elements.email.value,
        password: e.currentTarget.elements.password.value,
    };

    if(e.currentTarget.elements.email.value !== '' && e.currentTarget.elements.password.value !== '' ){
    console.log(formData);
    e.currentTarget.reset()
    };
};

