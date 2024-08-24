import recipeData from "./recipe.json";
function RecipeImage() {
  const imageUrl = recipeData[0].recipeImage;
  const recipeName = recipeData[0].name;
   return (
    <div>
      <img
        src={imageUrl}
        alt={recipeName}
        className="recipeImage"
        />
    </div>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 