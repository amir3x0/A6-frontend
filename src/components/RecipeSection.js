import React, { useState } from 'react';

// Sample recipe objects with name, image, and ingredients
const recipes = [
  { name: 'Filled pepper', image: '/images/recipe_img/filled_pepper.jpg', ingredients: ['4 large bell peppers', '1 lb beef', 'chopped onion'] },
  { name: 'Meatballs', image: '/images/recipe_img/meatballs.jpg', ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'] },
  { name: 'Soup', image: '/images/recipe_img/soup.jpg', ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'] },
];

// Additional three recipes to be displayed on the right side
const additionalRecipes = [
  { name: 'shakshuka', image: '/images/recipe_img/shakshuka.jpg', ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'] },
  { name: 'hamburger', image: '/images/recipe_img/hamburger.jpg', ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'] },
  { name: 'pizza', image: '/images/recipe_img/pizza.jpg', ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'] },
];

export default function RecipeSection() {
  // State to track selected recipe and its ingredients
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to handle click on a recipe
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(selectedRecipe === recipe ? null : recipe);
  };

  document.title = "Our Recipes";
  return (
    <div className="section recipe">
      <div className="title-container">
        <h1 className="page-title">Our Recipes</h1>
      </div>
      <div className="recipe-list">

        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-item" onClick={() => handleRecipeClick(recipe)}>
            <table className="recipe-details">
              <tbody>
                <tr>
                  <td>
                    <img src={recipe.image} alt={recipe.name} style={{ width: '250px', height: '200px' }} />
                  </td>
                  {selectedRecipe && selectedRecipe.name === recipe.name && (
                    <td className="ingredients-list">
                      <h3>{recipe.name} Ingredients</h3>
                      <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <div className="recipe-list" style={{ marginLeft: '100px' }}>
        {/* Right side: Additional recipes */}
        {additionalRecipes.map((recipe, index) => (
          <div key={index} className="recipe-item" onClick={() => handleRecipeClick(recipe)}>
            <table className="recipe-details">
              <tbody>
                <tr>
                  <td>
                    <img src={recipe.image} alt={recipe.name} style={{ width: '250px', height: '200px' }} />
                  </td>
                  {selectedRecipe && selectedRecipe.name === recipe.name && (
                    <td className="ingredients-list">
                      <h3>{recipe.name} Ingredients</h3>
                      <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}