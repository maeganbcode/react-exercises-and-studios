import recipeData from "./recipe.json";

function RecipeName() {
  const recipeName = recipeData[0].name;
  return <h1>{recipeName}</h1>;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header