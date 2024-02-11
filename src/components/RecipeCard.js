import React from 'react';

const RecipeCard = ({ recipe, isExpanded, onClick }) => {
  // Now using isExpanded and onClick passed from the parent component

  return (
    <div className={`recipe-card ${isExpanded ? "expanded" : ""}`} onClick={onClick}>
      <img src={recipe.picture} alt={recipe.title} style={{ width: '100%', objectFit: 'cover', height: '200px' }} />
      <div className="recipe-card-info">
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">{isExpanded ? recipe.description : ""}</p>
        {isExpanded && (
          <div className="recipe-details">
            <ul>
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <p>Difficulty: {recipe.difficulty}</p>
            <p>Rank: {'★'.repeat(recipe.rank)}{'☆'.repeat(5 - recipe.rank)}</p>
            <p>Categories: {recipe.categories.join(', ')}</p>
            <div className="recipe-nutrition">
              <p>Calories: {recipe.calories.total} kcal</p>
              <p>Protein: {recipe.calories.protein}</p>
              <p>Carbs: {recipe.calories.carbs}</p>
              <p>Fat: {recipe.calories.fat}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
