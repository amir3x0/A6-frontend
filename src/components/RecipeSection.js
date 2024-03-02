
import React, { useState, useEffect } from "react";
import RecipeCard from './RecipeCard'; // Make sure the path is correct

const images = {
  Bruschetta: process.env.PUBLIC_URL + "/images/recipe_img/Bruschetta.jpg",
  Caprese_Salad: process.env.PUBLIC_URL + "/images/recipe_img/Caprese_Salad.jpg",
  Cheese_Platter:process.env.PUBLIC_URL + "/images/recipe_img/Cheese_Platter.jpg",
  Artichoke: process.env.PUBLIC_URL + "/images/recipe_img/Artichoke.jpg",
  Mushrooms:process.env.PUBLIC_URL + "/images/recipe_img/Mushrooms.jpg",
  Spring_Rolls:process.env.PUBLIC_URL + "/images/recipe_img/Spring_Rolls.jpg",
  filled_pepper:process.env.PUBLIC_URL + "/images/recipe_img/filled_pepper.jpg",
  hamburger:process.env.PUBLIC_URL + "/images/recipe_img/hamburger.jpg",
  meatballs:process.env.PUBLIC_URL + "/images/recipe_img/meatballs.jpg",
  cheese_cake:process.env.PUBLIC_URL + "/images/recipe_img/cheese_cake.jpg",
  fruitcake:process.env.PUBLIC_URL + "/images/recipe_img/fruitcake.jpg",
  sufle:process.env.PUBLIC_URL + "/images/recipe_img/sufle.jpg",
  // Add more image paths if needed for other recipes
};

const categorizedRecipes = {
  appetizers: [
    {
      id: 1,
      title: "Bruschetta",
      description: "A classic Italian appetizer with tomatoes, basil, and mozzarella.",
      ingredients: ["Ingredient A", "Ingredient B"],
      instructions: ["Step 1: Slice tomatoes.", "Step 2: Arrange basil leaves.", "Step 3: Add mozzarella slices."],
      difficulty: "Easy",
      rank: 5,
      categories: ["appetizers", "Bruschetta"],
      picture: images.Bruschetta,
      calories: { total: 500, protein: "30g", carbs: "35g", fat: "22g" },
    },
    {
      id: 2,
      title: "Caprese Salad",
      description: "A refreshing salad with tomatoes, mozzarella, and balsamic glaze.",
      ingredients: ["Ingredient A", "Ingredient B", "Ingredient C"],
      instructions: ["Step 1: Slice tomatoes and mozzarella.", "Step 2: Arrange on a plate.", "Step 3: Drizzle with balsamic glaze."],
      difficulty: "Easy",
      rank: 4,
      categories: ["appetizers", "Caprese Salad"],
      picture: images.Caprese_Salad,
      calories: { total: 400, protein: "20g", carbs: "25g", fat: "18g" },
    },
    {
      id: 3,
      title: "Cheese Platter",
      description: "An assorted cheese platter with crackers and fruits.",
      ingredients: ["Ingredient A", "Ingredient B", "Ingredient C"],
      instructions: ["Step 1: Arrange a variety of cheeses.", "Step 2: Add crackers and fruits.", "Step 3: Serve and enjoy."],
      difficulty: "Easy",
      rank: 4,
      categories: ["appetizers", "Cheese Platter"],
      picture: images.Cheese_Platter,
      calories: { total: 450, protein: "25g", carbs: "30g", fat: "20g" },
    },
  ],
  starters: [
      {
        id: 4,
        title: "Artichoke",
        description: "A classic Italian appetizer with tomatoes, basil, and mozzarella.",
        ingredients: ["Ingredient A", "Ingredient B"],
        instructions: ["Step 1: Slice tomatoes.", "Step 2: Arrange basil leaves.", "Step 3: Add mozzarella slices."],
        difficulty: "Easy",
        rank: 5,
        categories: ["starters", "Artichoke"],
        picture: images.Artichoke,
        calories: { total: 500, protein: "30g", carbs: "35g", fat: "22g" },
      },
      {
        id: 5,
        title: " Mushrooms",
        description: "A refreshing salad with tomatoes, mozzarella, and balsamic glaze.",
        ingredients: ["Ingredient A", "Ingredient B", "Ingredient C"],
        instructions: ["Step 1: Slice tomatoes and mozzarella.", "Step 2: Arrange on a plate.", "Step 3: Drizzle with balsamic glaze."],
        difficulty: "Easy",
        rank: 4,
        categories: ["starters", " Mushrooms"],
        picture: images. Mushrooms,
        calories: { total: 400, protein: "20g", carbs: "25g", fat: "18g" },
      },
      {
        id: 6,
        title: "Spring Rolls",
        description: "An assorted cheese platter with crackers and fruits.",
        ingredients: ["Ingredient A", "Ingredient B", "Ingredient C"],
        instructions: ["Step 1: Arrange a variety of cheeses.", "Step 2: Add crackers and fruits.", "Step 3: Serve and enjoy."],
        difficulty: "Easy",
        rank: 4,
        categories: ["starters", "Spring_Rolls"],
        picture: images.Spring_Rolls,
        calories: { total: 450, protein: "25g", carbs: "30g", fat: "20g" },
      },
  ],
  mainDishes: [
    {
      id: 7,
      title: "filled_pepper",
      description: "A classic Italian appetizer with tomatoes, basil, and mozzarella.",
      ingredients: ["Ingredient A", "Ingredient B"],
      instructions: ["Step 1: Slice tomatoes.", "Step 2: Arrange basil leaves.", "Step 3: Add mozzarella slices."],
      difficulty: "Easy",
      rank: 5,
      categories: ["mainDishes", "filled pepper"],
      picture: images.filled_pepper,
      calories: { total: 500, protein: "30g", carbs: "35g", fat: "22g" },
    },
    {
      id: 8,
      title: "hamburger",
      description: "A refreshing salad with tomatoes, mozzarella, and balsamic glaze.",
      ingredients: ["Ingredient A", "Ingredient B", "Ingredient C"],
      instructions: ["Step 1: Slice tomatoes and mozzarella.", "Step 2: Arrange on a plate.", "Step 3: Drizzle with balsamic glaze."],
      difficulty: "Easy",
      rank: 4,
      categories: ["mainDishes", "hamburger"],
      picture: images. hamburger,
      calories: { total: 400, protein: "20g", carbs: "25g", fat: "18g" },
    },
    {
      id: 9,
      title: "meatballs",
      description: "An assorted cheese platter with crackers and fruits.",
      ingredients: ["Ingredient A", "Ingredient B", "Ingredient C"],
      instructions: ["Step 1: Arrange a variety of cheeses.", "Step 2: Add crackers and fruits.", "Step 3: Serve and enjoy."],
      difficulty: "Easy",
      rank: 4,
      categories: ["mainDishes", "meatballs"],
      picture: images. meatballs,
      calories: { total: 450, protein: "25g", carbs: "30g", fat: "20g" },
    },
  ],
  desserts: [
    {
      id: 10,
      title: "cheese cake",
      description: "A classic Italian appetizer with tomatoes, basil, and mozzarella.",
      ingredients: ["Ingredient A", "Ingredient B"],
      instructions: ["Step 1: Slice tomatoes.", "Step 2: Arrange basil leaves.", "Step 3: Add mozzarella slices."],
      difficulty: "Easy",
      rank: 5,
      categories: ["desserts", "cheese cake"],
      picture: images.cheese_cake,
      calories: { total: 500, protein: "30g", carbs: "35g", fat: "22g" },
    },
    {
      id: 11,
      title: "fruit cake",
      description: "A refreshing salad with tomatoes, mozzarella, and balsamic glaze.",
      ingredients: ["Ingredient A", "Ingredient B", "Ingredient C"],
      instructions: ["Step 1: Slice tomatoes and mozzarella.", "Step 2: Arrange on a plate.", "Step 3: Drizzle with balsamic glaze."],
      difficulty: "Easy",
      rank: 4,
      categories: ["desserts", "fruit cake"],
      picture: images. fruitcake,
      calories: { total: 400, protein: "20g", carbs: "25g", fat: "18g" },
    },
    {
      id:12,
      title: "sufle",
      description: "An assorted cheese platter with crackers and fruits.",
      ingredients: ["Ingredient A", "Ingredient B", "Ingredient C"],
      instructions: ["Step 1: Arrange a variety of cheeses.", "Step 2: Add crackers and fruits.", "Step 3: Serve and enjoy."],
      difficulty: "Easy",
      rank: 4,
      categories: ["desserts", "sufle"],
      picture: images. sufle,
      calories: { total: 450, protein: "25g", carbs: "30g", fat: "20g" },
    },
  ],
};

const RecipeSection = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
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
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return acc;
      },
      {}
    );

    setFilteredRecipes(newFiltered);
  }, [searchTerm]);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(selectedRecipe === recipe ? null : recipe);
    // Set the category of the selected recipe
    setSelectedCategory(recipe ? recipe.categories[0] : null);
  };

  document.title = "Our Recipes";
  const categoryColors = {
    appetizers: "bg-green-300",
    starters: "bg-blue-200",
    mainDishes: "bg-yellow-200",
    desserts: "bg-pink-200",
    // Add more categories and colors as needed
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex">
        <input
          type="text"
          placeholder="Search for recipes..."
          className="w-full p-4 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-4 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Search
        </button>
      </div>

      {Object.entries(filteredRecipes).map(([category, recipes]) => (
        <div key={category} className="mb-12">
          <h2 className={`text-2xl font-bold mb-4 capitalize ${categoryColors[category]}`}>
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 ${selectedCategory === category && selectedRecipe === recipe ? categoryColors[category] : ''}`}
              >
                <RecipeCard
                  recipe={recipe}
                  isExpanded={selectedRecipe && selectedRecipe.id === recipe.id}
                  onClick={() => handleRecipeClick(recipe)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default RecipeSection;