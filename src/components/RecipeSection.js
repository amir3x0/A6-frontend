import React, { useState, useEffect } from "react";
import RecipeCard from './RecipeCard'; // Make sure the path is correct


// Assuming the recipes are categorized accordingly
const categorizedRecipes = {
  appetizers: [
    {
      name: "Bruschetta",
      image: process.env.PUBLIC_URL + "/images/recipe_img/bruschetta.jpg",
      ingredients: ["Ingredient A", "Ingredient B"],
    },
    // Add more appetizer recipes
  ],
  starters: [
    {
      name: "Caesar Salad",
      image: process.env.PUBLIC_URL + "/images/recipe_img/caesar_salad.jpg",
      ingredients: ["Ingredient A", "Ingredient B"],
    },
    // Add more starter recipes
  ],
  mainDishes: [
    // Include your initial recipes here
    {
      name: "Filled pepper",
      image: process.env.PUBLIC_URL + "/images/recipe_img/filled_pepper.jpg",
      ingredients: ["4 large bell peppers", "1 lb beef", "chopped onion"],
    },
    {
      name: "Meatballs",
      image: process.env.PUBLIC_URL + "/images/recipe_img/meatballs.jpg",
      ingredients: ["Ingredient A", "Ingredient B", "Ingredient C"],
    },
    {
      name: "Soup",
      image: process.env.PUBLIC_URL + "/images/recipe_img/soup.jpg",
      ingredients: ["Ingredient A", "Ingredient B", "Ingredient C"],
    },
    // Add more main dish recipes
  ],
  desserts: [
    {
      name: "Tiramisu",
      image: process.env.PUBLIC_URL + "/images/recipe_img/tiramisu.jpg",
      ingredients: ["Ingredient A", "Ingredient B"],
    },
    // Add more dessert recipes
  ],
};

export default function RecipeSection() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(categorizedRecipes);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredRecipes(categorizedRecipes);
      return;
    }

    const newFiltered = Object.keys(categorizedRecipes).reduce(
      (acc, category) => {
        acc[category] = categorizedRecipes[category].filter((recipe) =>
          recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return acc;
      },
      {}
    );

    setFilteredRecipes(newFiltered);
  }, [searchTerm]);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(selectedRecipe === recipe ? null : recipe);
  };

  document.title = "Our Recipes";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex">
        <input
          type="text"
          placeholder="Search for recipes..."
          className="w-full p-4 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-4 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          onClick={(e) => {
            e.preventDefault(); // Prevent form submission if wrapped in a form
            // Logic to handle search can be implemented here if needed
          }}
        >
          Search
        </button>
      </div>

      {Object.entries(filteredRecipes).map(([category, recipes]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{recipe.name}</h3>
                  {selectedRecipe && selectedRecipe.name === recipe.name && (
                    <div className="mt-2">
                      <h4 className="font-semibold">Ingredients:</h4>
                      <ul className="list-disc ml-4">
                        {recipe.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button
                    onClick={() => handleRecipeClick(recipe)}
                    className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                  >
                    {selectedRecipe && selectedRecipe.name === recipe.name
                      ? "Hide Ingredients"
                      : "Show Ingredients"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
