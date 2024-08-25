import recipeData from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const authorName = recipeData[0].author;
  const authorImage = recipeData.map((recipe, index) => (
    <img 
    key={index}
    src={recipe.authorImage}
    alt={authorName}
    className="authorImage"
    />
  ));
  const recipeWebite = recipeData[0].website;
  return (  
    <div key={authorName}>
      <h3>{authorName}</h3>
      {authorImage}
      <a href={recipeWebite}>{recipeWebite}</a>
    </div>  
  );
}
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 