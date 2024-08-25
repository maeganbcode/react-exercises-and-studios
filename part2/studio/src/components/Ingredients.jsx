import recipeData from "./recipe.json";

function IngredientList() {
  const ingredients = recipeData[0].ingredients;

   return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>;       
    </div>
    
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 