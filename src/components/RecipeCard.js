import React, { useState } from 'react';
import CustomImage from "./CustomImage";

const RecipeCard = ({ recipe }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelect = () => setIsSelected(!isSelected);

  return (
    <div className={`recipe-card ${isSelected ? "selected" : ""}`} onClick={toggleSelect}>
      <CustomImage imgSrc={recipe.picture} alt={recipe.title} pt="45%" />
      <div className="recipe-card-info">
        <img className="author-img" src={recipe.authorImg} alt={recipe.authorName} />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">{isSelected ? recipe.description : recipe.shortDescription || "Click to see more details."}</p>
        {isSelected && (
          <div className="recipe-details">
            <ul>
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <p>Difficulty: {recipe.difficulty}</p>
            <p>Rank: {'★'.repeat(recipe.rank)}{'☆'.repeat(5 - recipe.rank)}</p>
            <p>Categories: {recipe.categories.join(', ')}</p>
            <p>Calories: {recipe.calories.total} kcal</p>
            <p>Protein: {recipe.calories.protein}, Carbs: {recipe.calories.carbs}, Fat: {recipe.calories.fat}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
