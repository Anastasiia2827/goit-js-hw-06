input = document.querySelector('[data-length="6"]');

input.addEventListener('blur', onInputBlur);

function onInputBlur(evt) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    if (evt.currentTarget.lenght == input.dataset.length) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    }
}
