const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemElPotatoes = document.createElement('li');
itemElPotatoes.classList.add('item');
itemElPotatoes.textContent = 'Potatoes'; 
console.log(itemElPotatoes);

const itemElMushrooms = document.createElement('li');
itemElMushrooms.classList.add('item');
itemElMushrooms.textContent = 'Mushrooms'; 
console.log(itemElMushrooms);

ingredients.append(itemElPotatoes, itemElMushrooms);
console.log(ingredients);


