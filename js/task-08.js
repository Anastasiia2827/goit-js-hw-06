const form = document.querySelector('.login-form');

form.addEventListener('submit',onFormSubmit );

function onFormSubmit(evt) {
    evt.preventDefault();
    const formEl = evt.currentTarget.elements;

    if (!formEl.email.value.trim() || !formEl.password.value.trim()) {
        alert('Всі поля повинні бути заповнені');
        return;
    } 
    const email = formEl.email.value;
    const password = formEl.password.value;

    const formData = {
        email,
        password,
    };
    console.log(formData);
    form.reset();
}


