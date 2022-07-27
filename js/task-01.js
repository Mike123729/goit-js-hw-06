const countCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${countCategoriesEl.length}`);

const categoriesEL = document.querySelectorAll('#categories>li');
categoriesEL.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
