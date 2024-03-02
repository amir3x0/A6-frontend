import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import PlanBg from "../pages/shopping/shopping_img/ShoppingCart.jpg";
import { useNavigate } from "react-router-dom";
import { fetchRecipes } from "../services/BackendService";
// import { useShoppingList } from "../pages/shopping/ShoppingListContext";

const PlanSection = () => {
  const [expandedRecipeId, setExpandedRecipeId] = useState(null);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [shoppingList, setShoppingListState] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const [loadingStatus, setLoadingStatus] = useState("loading");
  // const { setShoppingList: setShoppingListContext } = useShoppingList(); // Destructure and rename

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
  }, []);

  // Logic For Selected Recipes
  useEffect(() => {
    const newShoppingList = selectedRecipes
      .flatMap((recipe) => recipe.ingredients)
      .reduce((acc, { name, quantity, unit }) => {
        const key = `${name} (${unit})`;
        acc[key] = (acc[key] || 0) + parseFloat(quantity);
        return acc;
      }, {});
    setShoppingListState(
      Object.entries(newShoppingList).map(([name, quantity]) => ({
        name: name.split(" (")[0],
        quantity,
        unit: name.split("(")[1].slice(0, -1),
      }))
    );
  }, [selectedRecipes]);

  const makeList = () => {
    // setShoppingListContext(shoppingList); // Now correctly refers to the context setter
    navigate("/Shopping");
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
            <h1 className="text-white text-4xl font-serif mb-5">
              Create Shopping List
            </h1>
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
            <button
              onClick={makeList}
              className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition-colors duration-300 w-full"
            >
              Make List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
