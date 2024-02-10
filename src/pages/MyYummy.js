import React, { useState } from "react";
import Recipe from "../components/RecipeCard"; // Adjust path as necessary

const userData = {
  name: "Gordon Ramsay",
  username: "GRamsay",
  profileImageUrl: "./images/MyYummy/ramsay.jpg",
  bio: "Food enthusiast. Love to cook and explore new recipes.",
  uploadedRecipes: [
    { id: 1, title: "Spaghetti Carbonara" },
    { id: 2, title: "Chicken Alfredo" },
    // Add more recipes as needed
    ],

  mealPlans: [
    { id: 1, title: "Weekly Family Plan" },
    { id: 2, title: "Low Carb Plan" },
    // Add more meal plans as needed
  ],
  favoriteRecipes: [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish...",
      instructions: ["Step 1", "Step 2"],
      difficulty: "Medium",
      rank: 4,
      categories: ["Main Dishes", "Pasta"],
      picture: "./images/MyYummy/spaghetti._carbonara.jpg",
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
      picture: "./images/MyYummy/Vegetarian-Chili.jpg",
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
      picture: "./images/MyYummy/lemon_salmon.jpg",
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
      picture: "./images/MyYummy/chicken-tikka.jpg",
      calories: { total: 700, protein: "50g", carbs: "50g", fat: "30g" },
    },
    
  ],
};

export default function MyYummy() {
  // State to keep track of the selected recipe
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

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
                  recipe={recipe}
                  isSelected={selectedRecipeId === recipe.id}
                  onSelect={() => handleRecipeSelect(recipe.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="section-header">
          <h2>Uploaded Recipes</h2>

          <button className="add-button" onClick={handleAddRecipeClick}>
            +
          </button>
        </div>
        <ul className="recipe-list">
          {/* Example recipe list items */}
          <li>Chicken Alfredo</li>
        </ul>

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
