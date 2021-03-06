// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.Получится 'В списке 3 категории.'.


// const categoryListEl = document.querySelector('#categories')
// const itemsCategoryEl = categoryListEl.querySelectorAll('.item')
// const categoryQuantity = itemsCategoryEl.length
// const messageCategories = `В списке ${categoryQuantity} категории`
// console.log(messageCategories);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const totalEl =
document.querySelectorAll('.item');

console.log(`В списке ${totalEl.length} категории.`);

const titleEl = [...totalEl]
.map(categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length
}`)
.join('\n');

console.log(titleEl);

