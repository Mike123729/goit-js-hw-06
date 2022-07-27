const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const array = [];
const galleryEL = document.querySelector('ul');

ingredients.forEach((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  array.push(item);
});
galleryEL.append(...array);

console.log(galleryEL);
