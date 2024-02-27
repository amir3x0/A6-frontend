import React, { useState } from "react";
import Recipe from "../components/RecipeCard";

// Correct way to reference the image from the public directory in a JS file



const images = {
  ramsay : process.env.PUBLIC_URL + '/images/MyYummy_img/ramsay.jpg',
  spaghetti_carbonara: process.env.PUBLIC_URL + "/images/MyYummy_img/spaghetti_carbonara.jpg",
  Vegetarian_Chili: process.env.PUBLIC_URL + "/images/MyYummy_img/Vegetarian-Chili.jpg",
  lemon_salmon: process.env.PUBLIC_URL + "/images/MyYummy_img/lemon_salmon.jpg",
  chicken_tikka: process.env.PUBLIC_URL + "/images/MyYummy_img/chicken-tikka.jpg",
  Beef_Stir_Fry: process.env.PUBLIC_URL + "/images/MyYummy_img/Beef-Stir-Fry.jpg",
  Quinoa_Salad_with_Avocado: process.env.PUBLIC_URL + "/images/MyYummy_img/Quinoa-Salad-with-Avocado.jpg",
  Vegan_Chocolate_Cake: process.env.PUBLIC_URL + "/images/MyYummy_img/Vegan-Chocolate-Cake.jpg",
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

  const handleRecipeClick = (id) => {
    setExpandedRecipeId(expandedRecipeId === id ? null : id);
  };

  const handleRecipeSelect = (id) => {
    setSelectedRecipeId(id);
  };

  // Simplified button click handlers (demonstration purposes)
  const handleAddRecipeClick = () => console.log("Add new recipe clicked!");
  const handleAddMealPlanClick = () => console.log("Add new meal plan clicked!");

  // Function to render RecipeCards for a given list of recipes
  const renderRecipeCards = (recipes) => recipes.map((recipe) => (
    <Recipe
      key={recipe.id}
      recipe={recipe}
      isSelected={selectedRecipeId === recipe.id}
      isExpanded={expandedRecipeId === recipe.id}
      onSelect={() => handleRecipeSelect(recipe.id)}
      onClick={() => handleRecipeClick(recipe.id)}
    />
  ));

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <img src={userData.profileImageUrl} alt="Profile" className="rounded-full h-32 w-32 mx-auto" />
        <h2 className="text-xl font-bold text-center mt-2">{userData.name}</h2>
        <p className="text-sm text-center text-gray-600">@{userData.username}</p>
        <p className="text-center mt-3">{userData.bio}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Settings
        </button>
      </div>

      <div className="w-3/4 p-4">
        <section>
          <h2 className="text-2xl font-bold">Favorite Recipes</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {renderRecipeCards(userData.favoriteRecipes)}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">Uploaded Recipes</h2>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleAddRecipeClick}
          >
            +
          </button>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {renderRecipeCards(userData.uploadedRecipes)}
          </div>
        </section>

        {/* Additional sections for Meal Plans, etc., can follow the same pattern */}
      </div>
    </div>
  );
}
