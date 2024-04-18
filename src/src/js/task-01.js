// tworzę tablicę poprzez odwołanie się do listy z kategoriami po id categories i klasie item
const categories = document.querySelectorAll("#categories .item");
//console.log(categories);

// wyświetlam liczbę kategorii
console.log("Number of categories: " + categories.length);

// odwołuję się do tablicy 'categories'
categories.forEach((category) => {
  // odwołuję się do h2, aby utworzyć tekst z nazwą kategorii
  const categoryName = category.querySelector("h2").textContent;
  //console.log(categoryName);

  // odwołuję się do 'ul', czyli do ostatniego elementu z dzieci elementu 'li'
  const categoryNumber = category.lastElementChild;
  //console.log(category);

  // tworzę tablicę ze wszystkimi dziećmi elementu 'ul'
  const categoryNumber2 = categoryNumber.children;
  //console.log(categoryNumber2);
  // wyświetlam spację
  console.log(" ");

  //wyświetlam nazwę kategorii
  console.log("Category: " + categoryName);

  //wyświetlam liczbę elementów w danej kategorii
  console.log("Elements: " + categoryNumber2.length);
});
