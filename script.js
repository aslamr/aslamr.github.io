fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => displayCocktail(data))
  .catch((error) => console.error("FETCH ERROR:", error));

function displayCocktail(data) {
  const cocktail = data.drinks[0];
  const cocktailDiv = document.getElementById("cocktail");
}   
