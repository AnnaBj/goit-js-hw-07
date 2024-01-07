const categoriesItems = document.querySelectorAll("ul#categories > li.item"); // Отримати всі елементи li.item

console.log(`Кількість категорій: ${categoriesItems.length}`); // Вивести кількість категорій

categoriesItems.forEach((item) => {
  // Вивести назву категорії та кількість елементів у кожній категорії
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryItemsCount = item.querySelectorAll("ul > li").length;
  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryItemsCount}`);
});
