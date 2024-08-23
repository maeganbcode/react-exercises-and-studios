    import styles from './Description.module.css';
    import React from 'react';
    
    const RecipeAuthor = () => {
    const authorLink = "https://www.bing.com/images/search?view=detailv2&iss=sbi&FORM=recidp&sbisrc=ImgDropper&q=martha+stewart+recipes+free&imgurl=https://bing.com/th?id=OSK.e3f7807558c77373a0677349170b3b8e&idpbck=1&sim=4&pageurl=8cc5ae0c2e0991cb0725efedef85e51f&idpp=recipe&ajaxhist=0&ajaxserp=0";
    const authorPhoto = "https://th.bing.com/th?id=OSK.94b8e3cde28e619c90ea4fe5a5eacdb5&w=46&h=46&c=12&rs=1&qlt=80&o=6&dpr=1.4&pid=SANGAM";
    const authorName = "Martha Stewart";

    return (
            <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
        <div>
           <h3>{authorName}</h3>
           <a href={authorLink}>Blog name</a> 
        </div>
     </div>
    );
    }

    class RecipeDescription extends React.Component {
        render () {
            return(
        <div> 
          <div>
            <h1>Recipe Title</h1>
            <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
    </div>
            )
        };
        
    }


    export default RecipeDescription