const findCategory = document.querySelector("#categories");
console.log('Number of categories:', findCategory.childElementCount);

const newArray = [...findCategory.children];
newArray.forEach((element) => {
    console.log("Category:",
     element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.childElementCount);
});