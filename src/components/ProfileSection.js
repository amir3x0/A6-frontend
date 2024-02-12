import React, { useState } from "react";
import Recipe from "../components/RecipeCard";

import ramsay from "../images/MyYummy_img/ramsay.jpg";

const images = {
  // ramsay: "/images/MyYummy_img/ramsay.JPG",
  spaghetti_carbonara: "/images/MyYummy_img/spaghetti_carbonara.jpg",
  Vegetarian_Chili: "/images/MyYummy_img/Vegetarian-Chili.jpg",
  lemon_salmon: "/images/MyYummy_img/lemon_salmon.jpg",
  chicken_tikka: "/images/MyYummy_img/chicken-tikka.jpg",
};

const userData = {
  name: "Gordon Ramsay",
  username: "GRamsay",
  profileImageUrl: ramsay,
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
      picture: images.quinoa_salad, // Ensure this key exists in your `images` object
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
      picture: images.beef_stir_fry, // Ensure this key exists in your `images` object
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
      picture: images.vegan_chocolate_cake, // Ensure this key exists in your `images` object
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
  // State to keep track of the selected recipe
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [expandedRecipeId, setExpandedRecipeId] = useState(null); // Add this line

  // Add a new function to handle expanding/collapsing a recipe card
  const handleRecipeClick = (id) => {
    setExpandedRecipeId(expandedRecipeId === id ? null : id); // Toggle expansion
  };

  const handleRecipeSelect = (id) => {
    setSelectedRecipeId(id);
  };
  // Function to handle the click event of the add recipe button
  const handleAddRecipeClick = () => {
    console.log("Add new recipe clicked!");
    // Here, you would typically open a modal, display a form, or navigate to a new route
  };

  const handleAddMealPlanClick = () => {
    console.log("Add new meal plan clicked!");
    // Here, you would typically open a modal, display a form, or navigate to a new route
  };

  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <img
          src={userData.profileImageUrl}
          alt="Profile"
          className="profile-image"
        />
        <h2 className="user-name">{userData.name}</h2>
        <h2 className="user-username">@{userData.username}</h2>
        <p className="user-bio">{userData.bio}</p>
        <button className="settings-button">Settings</button>
      </div>

      <div className="profile-content">
        <div className="section-header">
          <div>
            <h2>Favorite Recipes</h2>
            <div className="recipe-cards-container">
              {" "}
              {/* Use updated class for grid layout */}
              {userData.favoriteRecipes.map((recipe) => (
                <Recipe
                  key={recipe.id}
                  recipe={{
                    ...recipe,
                    picture: recipe.picture, // Ensuring a fallback to an existing picture URL
                  }}
                  isSelected={selectedRecipeId === recipe.id}
                  isExpanded={expandedRecipeId === recipe.id} // Pass isExpanded prop to RecipeCard
                  onSelect={() => handleRecipeSelect(recipe.id)}
                  onClick={() => handleRecipeClick(recipe.id)} // Pass onClick handler
                />
              ))}
            </div>
          </div>
        </div>

        <div className="section-header">
          <div>
            <h2>Uploaded Recipes</h2>
            <button className="add-button" onClick={handleAddRecipeClick}>
              +
            </button>
            <div className="recipe-cards-container">
              {" "}
              {/* Use updated class for grid layout */}
              {userData.uploadedRecipes.map((recipe) => (
                <Recipe
                  key={recipe.id}
                  recipe={{
                    ...recipe,
                    picture: recipe.picture, // Ensuring a fallback to an existing picture URL
                  }}
                  isSelected={selectedRecipeId === recipe.id}
                  isExpanded={expandedRecipeId === recipe.id} // Pass isExpanded prop to RecipeCard
                  onSelect={() => handleRecipeSelect(recipe.id)}
                  onClick={() => handleRecipeClick(recipe.id)} // Pass onClick handler
                />
              ))}
            </div>
          </div>
        </div>

        {/* Render the uploaded recipes from the user data */}
        <div className="section-header">
          <h2>Meal Plans</h2>
          <button className="add-button" onClick={handleAddMealPlanClick}>
            +
          </button>
        </div>
        {/* <ul className="meal-plan-list">
                          {userData.mealPlans.map((plan) => (
                            <li key={plan.id}>{plan.title}</li>
                          ))}
                        </ul> */}
        <ul className="meal-plan-list">
          {/* Example meal plan list items */}
          <li>Weekly Family Plan</li>
          <li>Low Carb Plan</li>
        </ul>
      </div>
    </div>
  );
}
