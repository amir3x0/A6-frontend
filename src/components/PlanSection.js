import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import PlanBg from "../pages/plan/plan_img/planBg.jpg";
import { useNavigate } from "react-router-dom";
import { useSelectedRecipes } from "../context/SelectedRecipesContext";
import { useShoppingList } from "../context/ShoppingListContext";

const PlanSection = () => {
  const [expandedRecipeId, setExpandedRecipeId] = useState(null);
  const { selectedRecipes } = useSelectedRecipes();
  const navigate = useNavigate();
  const [shoppingList, setShoppingListState] = useState([]);

  const handleAddRecipe = (category) => {
    navigate(`/Recipes`, { state: { category } });
  };

  // Function to handle adding ingredients to the shopping list
  const handleAddIngredients = (ingredients) => {
    setShoppingListState((currentList) => {
      // Create a temporary object to map ingredient names to their details
      // This makes it easier to check for and update ingredients
      const ingredientMap = currentList.reduce((acc, ingredient) => {
        const key = `${ingredient.name}-${ingredient.unit}`;
        acc[key] = ingredient;
        return acc;
      }, {});
  
      ingredients.forEach((ingredientToAdd) => {
        const key = `${ingredientToAdd.name}-${ingredientToAdd.unit}`;
        if (ingredientMap[key]) {
          // Ingredient exists, sum the quantity
          ingredientMap[key].quantity = parseInt(ingredientMap[key].quantity, 10) + parseInt(ingredientToAdd.quantity, 10);
        } else {
          // Convert quantity to integer and add new ingredient
          ingredientMap[key] = {
            ...ingredientToAdd,
            quantity: parseInt(ingredientToAdd.quantity, 10),
          };
        }
      });
  
      // Convert the ingredientMap back to an array for the state
      return Object.values(ingredientMap);
    });
  };
  
  
  
  

  return (
    <div className="container mx-auto mt-10 px-5">
      <div className="w-full mb-10">
        <div className="image-container relative overflow-hidden max-h-72">
          <img className="w-full" src={PlanBg} alt="Plan Your Meal" />
          <div className="overlay absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-55 p-5">
            <h1 className="text-white text-4xl font-serif mb-5">Plan A Meal</h1>
            {/* Added padding below title */}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between">
        {/* Categories Container */}
        <div className="w-full lg:w-3/4 pr-4 mb-10 lg:mb-0">
          {["Appetizers", "Starters", "Main Dish", "Dessert"].map(
            (category) => (
              <div key={category} className="mb-10">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-green-800 uppercase">
                    {category}
                  </h2>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                    onClick={() => handleAddRecipe(category)}
                  >
                    +
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedRecipes
                    .filter((recipe) => recipe.category === category)
                    .map((recipe) => (
                      <RecipeCard
                        key={recipe._id}
                        recipe={recipe}
                        isExpanded={expandedRecipeId === recipe._id}
                        onClick={() =>
                          setExpandedRecipeId(
                            expandedRecipeId === recipe._id ? null : recipe._id
                          )
                        }
                        showSelectButton={false}
                        showAddIngredientsButton={true} // Always show the "Add Ingredients" button in PlanSection
                        onAddIngredients={handleAddIngredients} // Pass the handler to the RecipeCard component
                      />
                    ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Shopping List Section*/}
        <div className="w-full lg:w-1/4 lg:pl-4">
          <h2 className="text-2xl font-bold text-green-800 uppercase mb-2">
            Shopping List
          </h2>
          <div className="border border-gray-300 rounded-md p-4">
            <table className="w-full mb-4">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Ingredient</th>
                  <th className="border px-4 py-2">Quantity</th>
                  <th className="border px-4 py-2">Unit</th>
                </tr>
              </thead>
              <tbody>
                {shoppingList.map(({ name, quantity, unit }, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{name}</td>
                    <td className="border px-4 py-2">{quantity}</td>
                    <td className="border px-4 py-2">{unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <button
              onClick={makeList}
              className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition-colors duration-300 w-full"
            >
              Make List
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
