import React from 'react';

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
      <div className="p-4">
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
              <p className="text-sm">Rank: {'★'.repeat(recipe.rank)}{'☆'.repeat(5 - recipe.rank)}</p>
              <p className="text-sm">Categories: {recipe.categories.join(', ')}</p>
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
