// tworzę tablicę ingredients
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//odwołuję się do listy ul (po ID)
const list = document.querySelector("#ingredients");
//console.log(list);

// odwołuję sie do tablicy ingredients
ingredients.forEach((ingredient) => {
  // dla każdego składnika tworzymy element li
  const lastItem = document.createElement("li");
  // tekstem w li ma być nazwa każdego z elementów tablicy ingredients
  lastItem.textContent = ingredient;
  // dodaję klasę item
  lastItem.classList.add("item");
  //każdy ze składników dodaję na koniec listy
  list.append(lastItem);
  //wyświetlam całą listę
  console.log(lastItem);
});
