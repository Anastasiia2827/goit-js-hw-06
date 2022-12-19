// const input = document.querySelector('[data-length="6"]');

// input.addEventListener('blur', onInputBlur);

// function onInputBlur(evt) {
//     input.classList.add('invalid');
//     input.classList.remove('valid');
//     if (evt.currentTarget.value.length == input.dataset.length) {
//       input.classList.remove('invalid');
//       input.classList.add('valid');
//     }
// }

const input = document.querySelector('[data-length="6"]');
input.addEventListener('blur', onInputBlur);
 
function onInputBlur(evt) {
    changeClass(evt.target, 'invalid', 'valid')
    if (evt.currentTarget.value.length === Number(input.dataset.length)) {
       changeClass(evt.target, 'valid', 'invalid')
    }
 }
function changeClass(ref, add, rem) {
   ref.classList.add(add)
   ref.classList.remove(rem)
}
