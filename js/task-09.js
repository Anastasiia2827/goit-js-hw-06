const buttonRandomColor = document.querySelector('.change-color');
const backgroundColor = document.querySelector('.color');

buttonRandomColor.addEventListener('click', () => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  backgroundColor.textContent = `${getRandomHexColor()}`;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
