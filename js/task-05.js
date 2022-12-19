const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', onInputChange);
function onInputChange(evt) {
    if (evt.currentTarget.value.trim()) {
       return (textOutput.textContent = evt.currentTarget.value);  
    }
    textOutput.textContent = 'Anonymous'; 
 }  
