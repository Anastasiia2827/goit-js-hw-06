const range = document.querySelector('#font-size-control');
const textRenge = document.querySelector('#text');

range.addEventListener('input', function (evt) {
    textRenge.style.fontSize = this.value + 'px';
});


