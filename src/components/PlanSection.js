import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard"; // Assuming RecipeCard.js is in the same directory
import PlanBg from "../pages/plan/plan_img/planBg.jpg";
import { useNavigate } from "react-router-dom";
import { fetchRecipes } from "../services/BackendService";


const PlanSection = () => {
  const [expandedRecipeId, setExpandedRecipeId] = useState(null);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const navigate = useNavigate();
  const [shoppingList, setShoppingListState] = useState([]); // Renamed to avoid conflict
  const [recipes, setRecipes] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");
  // const { setShoppingList: setShoppingListContext } = useShoppingList(); // Destructure and rename

  // Fetching all the recipes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data); 
        setLoadingStatus("True");
      } catch (error) {
        setLoadingStatus("Error");
      }
    };

    fetchData();
  }, [navigate]);

  const handleRecipeClick = (id) =>
    setExpandedRecipeId(expandedRecipeId === id ? null : id);

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipes((prevSelected) => {
      const isAlreadySelected = prevSelected.some(
        (item) => item.id === recipe.id
      );
      if (isAlreadySelected) {
        return prevSelected.filter((item) => item.id !== recipe.id);
      } else {
        return [...prevSelected, recipe];
      }
    });
  };

  useEffect(() => {
    // Update to only include the titles of selected recipes
    const titlesList = selectedRecipes.map((recipe) => recipe.title);
    setShoppingListState(titlesList);
  }, [selectedRecipes]);

  const makeList = () => {
    //setShoppingListContext(shoppingList); // Now correctly refers to the context setter
    navigate("/Plan");
  };

  const handleAddRecipe = (category) => {
    console.log(`Add recipe to ${category}`);
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
          {["appetizers", "starters", "main dish", "dessert"].map(
            (category) => (
              <div key={category} className="mb-10">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-green-800 uppercase">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h2>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                    onClick={() => handleAddRecipe(category)}
                  >
                    +
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {recipes
                    .filter(
                      (recipe) => recipe.category.toLowerCase() === category
                    )
                    .map((recipe, index) => (
                      <RecipeCard
                        key={recipe._id}
                        recipe={recipe}
                        isExpanded={expandedRecipeId === recipe._id}
                        onClick={() => handleRecipeClick(recipe._id)}
                        onSelect={() => handleSelectRecipe(recipe)}
                      />
                    ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Selected List Section */}
        <div className="w-full lg:w-1/4 lg:pl-4">
          <h2 className="text-2xl font-bold text-green-800 uppercase mb-2">
            Selected Recipes
          </h2>
          <div className="border border-gray-300 rounded-md p-4">
            <ul className="list-disc pl-5">
              {shoppingList.map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
            <button
              onClick={makeList}
              className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition-colors duration-300 w-full"
            >
              Create Meal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
