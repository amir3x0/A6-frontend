import React from 'react';

// Enum for recipe categories
const CategoryLabels = {
  appetizers: 'Appetizers',
  starters: 'Starters',
  mainDish: 'Main Dish',
  dessert: 'Dessert',
};

const RecipeCard = ({ recipe, isExpanded, onClick }) => {
  return (
    <div
      className={`border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer ${isExpanded ? "scale-105" : "scale-100"} `}
      onClick={onClick}
    >
      <img
        src={recipe.picture}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className={`p-4 ${isExpanded ? "px-8 py-6" : "px-4 py-4"}`}>
        <p className="text-lg font-semibold text-gray-800">{recipe.title}</p>
        {isExpanded && (
          <>
            <p className="text-gray-600 mt-2">{recipe.description}</p>
            <div className="mt-4">
              <ul className="list-disc list-inside">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="text-sm text-gray-700">{step}</li>
                ))}
              </ul>
              <p className="text-sm mt-2">Difficulty: {recipe.difficulty}</p>
              <p className="text-sm">Category: {CategoryLabels[recipe.category]}</p>
              <div className="mt-2">
                <p className="text-sm font-semibold">Ingredients:</p>
                <ul className="list-disc list-inside">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-sm text-gray-700">{`${ingredient.name} - ${ingredient.quantity}`}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-2">
                <p className="text-sm">Calories: {recipe.calories.total} kcal</p>
                <p className="text-sm">Protein: {recipe.calories.protein}g</p>
                <p className="text-sm">Carbs: {recipe.calories.carbs}g</p>
                <p className="text-sm">Fat: {recipe.calories.fat}g</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
