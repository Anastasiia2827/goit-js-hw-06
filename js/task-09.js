// const buttonRandomColor = document.querySelector('.change-color');
// const backgroundColor = document.querySelector('.color');

// buttonRandomColor.addEventListener('click', () => {
//   document.body.style.backgroundColor = `${getRandomHexColor()}`;
//   backgroundColor.textContent = `${getRandomHexColor()}`;
// })

const buttonRandomColor = document.querySelector('.change-color');
const spanBackgroundColor = document.querySelector('.color');
const body = document.querySelector("body");

function buttonRandomColorClic() {
  const randomColor = getRandomHexColor();
  spanBackgroundColor.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

buttonRandomColor.addEventListener("click", buttonRandomColorClic)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
