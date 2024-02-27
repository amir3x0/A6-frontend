import React, { useState } from "react";
import Recipe from "../components/RecipeCard";
import Settings from "./settings"; // Adjust the import path as necessary

// Correct way to reference the image from the public directory in a JS file

const images = {
  ramsay: process.env.PUBLIC_URL + "/images/MyYummy_img/ramsay.jpg",
  spaghetti_carbonara:
    process.env.PUBLIC_URL + "/images/MyYummy_img/spaghetti_carbonara.jpg",
  Vegetarian_Chili:
    process.env.PUBLIC_URL + "/images/MyYummy_img/Vegetarian-Chili.jpg",
  lemon_salmon: process.env.PUBLIC_URL + "/images/MyYummy_img/lemon_salmon.jpg",
  chicken_tikka:
    process.env.PUBLIC_URL + "/images/MyYummy_img/chicken-tikka.jpg",
  Beef_Stir_Fry:
    process.env.PUBLIC_URL + "/images/MyYummy_img/Beef-Stir-Fry.jpg",
  Quinoa_Salad_with_Avocado:
    process.env.PUBLIC_URL +
    "/images/MyYummy_img/Quinoa-Salad-with-Avocado.jpg",
  Vegan_Chocolate_Cake:
    process.env.PUBLIC_URL + "/images/MyYummy_img/Vegan-Chocolate-Cake.jpg",
};

const userData = {
  name: "Gordon Ramsay",
  username: "GRamsay",
  profileImageUrl: images.ramsay,
  bio: "Food enthusiast. Love to cook and explore new recipes.",

  favoriteRecipes: [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish...",
      instructions: ["Step 1", "Step 2"],
      difficulty: "Medium",
      rank: 4,
      categories: ["Main Dishes", "Pasta"],
      picture: images.spaghetti_carbonara,
      calories: { total: 600, protein: "20g", carbs: "80g", fat: "22g" },
    },
    {
      id: 2,
      title: "Vegetarian Chili",
      description:
        "A hearty, filling chili that's packed with fiber and protein.",
      instructions: ["Step 1", "Step 2", "Step 3"],
      difficulty: "Easy",
      rank: 5,
      categories: ["Main Dishes", "Vegetarian"],
      picture: images.Vegetarian_Chili,
      calories: { total: 450, protein: "15g", carbs: "65g", fat: "10g" },
    },
    {
      id: 3,
      title: "Lemon Garlic Salmon",
      description: "Flavorful salmon with a lemon garlic butter sauce.",
      instructions: ["Step 1", "Step 2"],
      difficulty: "Easy",
      rank: 4,
      categories: ["Main Dishes", "Seafood"],
      picture: images.lemon_salmon,
      calories: { total: 500, protein: "45g", carbs: "5g", fat: "35g" },
    },
    {
      id: 4,
      title: "Chicken Tikka Masala",
      description: "A delicious creamy and richly spiced Indian chicken dish.",
      instructions: ["Step 1", "Step 2", "Step 3", "Step 4"],
      difficulty: "Medium",
      rank: 5,
      categories: ["Main Dishes", "Indian"],
      picture: images.chicken_tikka,
      calories: { total: 700, protein: "50g", carbs: "50g", fat: "30g" },
    },
  ],

  uploadedRecipes: [
    {
      id: 5,
      title: "Quinoa Salad with Avocado",
      description:
        "A refreshing and nutritious salad perfect for a quick lunch.",
      instructions: [
        "Step 1: Rinse and cook the quinoa.",
        "Step 2: Chop the vegetables and avocado.",
        "Step 3: Mix all ingredients with dressing.",
      ],
      difficulty: "Easy",
      rank: 5,
      categories: ["Salads", "Vegetarian"],
      picture: images.Quinoa_Salad_with_Avocado, // Ensure this key exists in your `images` object
      calories: { total: 350, protein: "8g", carbs: "45g", fat: "18g" },
    },

    {
      id: 6,
      title: "Beef Stir-Fry",
      description:
        "A savory and quick beef stir-fry with vegetables, perfect for a weeknight dinner.",
      instructions: [
        "Step 1: Slice beef and vegetables.",
        "Step 2: Stir-fry beef until browned.",
        "Step 3: Add vegetables and sauce, then cook until tender.",
      ],
      difficulty: "Medium",
      rank: 4,
      categories: ["Main Dishes", "Beef"],
      picture: images.Beef_Stir_Fry, // Ensure this key exists in your `images` object
      calories: { total: 500, protein: "30g", carbs: "35g", fat: "22g" },
    },

    {
      id: 7,
      title: "Vegan Chocolate Cake",
      description: "A moist and rich chocolate cake that's completely vegan.",
      instructions: [
        "Step 1: Mix dry ingredients.",
        "Step 2: Add wet ingredients and combine.",
        "Step 3: Bake until a toothpick comes out clean.",
      ],
      difficulty: "Medium",
      rank: 5,
      categories: ["Desserts", "Vegan"],
      picture: images.Vegan_Chocolate_Cake, // Ensure this key exists in your `images` object
      calories: { total: 450, protein: "6g", carbs: "60g", fat: "20g" },
    },
  ],

  mealPlans: [
    { id: 1, title: "Weekly Family Plan" },
    { id: 2, title: "Low Carb Plan" },
    // Add more meal plans as needed
  ],
};

export default function MyYummy() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [expandedRecipeId, setExpandedRecipeId] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  const handleRecipeClick = (id) =>
    setExpandedRecipeId(expandedRecipeId === id ? null : id);
  const handleRecipeSelect = (id) => setSelectedRecipeId(id);
  const toggleSettings = () => setShowSettings(!showSettings);

  const renderRecipeCards = (recipes) =>
    recipes.map((recipe) => (
      <Recipe
        key={recipe.id}
        recipe={recipe}
        isSelected={selectedRecipeId === recipe.id}
        isExpanded={expandedRecipeId === recipe.id}
        onSelect={() => handleRecipeSelect(recipe.id)}
        onClick={() => handleRecipeClick(recipe.id)}
      />
    ));

  // Custom function to render the Add button
  const renderAddButton = (onClickFunction, buttonText = "+") => (
    <button
      className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClickFunction}
    >
      {buttonText}
    </button>
  );

  return (
    <div className="flex">
<div className="flex flex-col items-center w-1/3 p-6 bg-white rounded-lg shadow-xl">
    <img
      src={userData.profileImageUrl}
      alt="Profile"
      className="rounded-full h-48 w-48 object-cover shadow-lg border-4 border-blue-300"
    />
    <h2 className="text-3xl font-extrabold text-center mt-4 text-blue-600">{userData.name}</h2>
    <p className="text-base text-center text-gray-500 mt-2">
      @{userData.username}
    </p>
    <p className="text-center mt-4 text-lg text-gray-700">{userData.bio}</p>
    <button
      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-150 ease-in-out"
      onClick={toggleSettings}
    >
      Settings
    </button>
</div>


      <div className="w-2/3 p-4 space-y-8">
        {/* Favorite Recipes */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-extrabold text-indigo-600 tracking-tight">Favorite Recipes</h2>
            {renderAddButton(() => console.log("Add Favorite Recipe"))}
          </div>
          <div className="grid grid-cols-3 gap-6 mt-4 overflow-auto max-h-[30rem]">
            {renderRecipeCards(userData.favoriteRecipes)}
          </div>
        </div>

        {/* Uploaded Recipes */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-extrabold text-indigo-600 tracking-tight">Uploaded Recipes</h2>
            {renderAddButton(() => console.log("Add Uploaded Recipe"))}
          </div>
          <div className="grid grid-cols-3 gap-6 mt-4 overflow-auto max-h-[30rem]">
            {renderRecipeCards(userData.uploadedRecipes)}
          </div>
        </div>

        {/* Meal Plans */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-extrabold text-indigo-600 tracking-tight">Meal Plans</h2>
            {renderAddButton(
              () => console.log("Add Meal Plan"),
             "+"
            )}
          </div>
          <div className="mt-4 overflow-auto max-h-[30rem]">
            {userData.mealPlans.map((plan) => (
              <div key={plan.id} className="py-2">
                {plan.title}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}





