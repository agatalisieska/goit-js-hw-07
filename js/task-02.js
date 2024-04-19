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

// odwołuję sie do tablicy ingredients, przy użyciu metody map odwołuję się
//do każdego z elemtenów tablicy po kolei
const item = ingredients.map((ingredient) => {
  // dla każdego składnika tworzymy element li
  const lastItem = document.createElement("li");
  // tekstem w li ma być nazwa każdego z elementów tablicy ingredients
  lastItem.textContent = ingredient;
  // dodaję klasę item
  lastItem.classList.add("item");
  // zwracam 'lastItem'
  return lastItem;
});

//każdy ze składników dodaję na koniec listy
list.append(...item);

//wyświetlam całą tablice
console.log(item);
