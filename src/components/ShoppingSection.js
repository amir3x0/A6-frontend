import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard"; // Assuming RecipeCard.js is in the same directory
import capreseSalad from "../pages/plan/plan_img/Caprese-Salad.jpg";
import cucumberHummusBites from "../pages/plan/plan_img/Cucumber-Hummus-Bites.jpg";
import stuffedMiniBellPeppers from "../pages/plan/plan_img/Stuffed-Mini-Bell-Peppers.jpg";
import avocadoShrimpCocktails from "../pages/plan/plan_img/Avocado-Shrimp-Cocktails.jpg";
import spinachFetaPuffs from "../pages/plan/plan_img/Spinach-and-Feta-Puffs.jpg";
import miniQuiches from "../pages/plan/plan_img/Mini-Quiches.jpg";
import chickenSataySkewers from "../pages/plan/plan_img/Chicken-Satay-Skewers.jpg";
import beefStroganoff from "../pages/plan/plan_img/Beef-Stroganoff.jpg";
import vegetableLasagna from "../pages/plan/plan_img/Vegetable-Lasagna.jpg";
import salmonTeriyaki from "../pages/plan/plan_img/Salmon-Teriyaki.jpg";
import lemonCheesecake from "../pages/plan/plan_img/Lemon-Cheesecake.jpg";
import tiramisu from "../pages/plan/plan_img/Tiramisu.jpg";
import applePie from "../pages/plan/plan_img/Apple-Pie.jpg";
import garlicBread from "../pages/plan/plan_img/Garlic-Bread.jpg"; // Assuming you're re-importing for illustration
import grilledChicken from "../pages/plan/plan_img/Grilled-Chicken.jpg"; // Assuming you're re-importing for illustration
import chocolateMousse from "../pages/plan/plan_img/Chocolate-Mousse.jpg";

import PlanBg from "../pages/shopping/shopping_img/ShoppingCart.jpg";
import { useNavigate } from "react-router-dom";
import { fetchRecipes } from "../services/BackendService";
// import { useShoppingList } from "../pages/shopping/ShoppingListContext";

const images = [
  capreseSalad,
  cucumberHummusBites,
  stuffedMiniBellPeppers,
  avocadoShrimpCocktails,
  spinachFetaPuffs,
  miniQuiches,
  chickenSataySkewers,
  beefStroganoff,
  vegetableLasagna,
  salmonTeriyaki,
  lemonCheesecake,
  tiramisu,
  applePie,
  garlicBread,
  grilledChicken,
  chocolateMousse,
];

const recipesData = [
  // Appetizers
  {
    id: 1,
    title: "Caprese Salad",
    description: "Fresh Italian salad with tomatoes, mozzarella, and basil.",
    category: "appetizers",
    ingredients: [
      { name: "Tomato", quantity: "2 large" },
      { name: "Mozzarella", quantity: "200g" },
      { name: "Fresh basil", quantity: "10 leaves" },
    ],
    instructions: [
      "Slice tomatoes and mozzarella",
      "Layer with basil leaves",
      "Drizzle with olive oil and balsamic glaze",
    ],
    difficulty: "Easy",
    picture: capreseSalad,
    calories: { total: 250, protein: "15g", carbs: "10g", fat: "18g" },
  },
  {
    id: 5,
    title: "Cucumber Hummus Bites",
    description:
      "A refreshing and healthy appetizer with hummus on cucumber slices.",
    category: "appetizers",
    ingredients: [
      { name: "Cucumber", quantity: "2 large, sliced" },
      { name: "Hummus", quantity: "1 cup" },
      { name: "Paprika", quantity: "1 tsp" },
    ],
    instructions: [
      "Slice cucumbers into thick rounds",
      "Top each slice with a spoonful of hummus",
      "Sprinkle with paprika and serve",
    ],
    difficulty: "Easy",
    picture: cucumberHummusBites,
    calories: { total: 150, protein: "5g", carbs: "18g", fat: "7g" },
  },
  {
    id: 6,
    title: "Stuffed Mini Bell Peppers",
    description:
      "Sweet mini bell peppers filled with a savory cream cheese mixture.",
    category: "appetizers",
    ingredients: [
      { name: "Mini bell peppers", quantity: "12" },
      { name: "Cream cheese", quantity: "1 cup" },
      { name: "Chopped chives", quantity: "2 tbsp" },
      { name: "Garlic powder", quantity: "1 tsp" },
    ],
    instructions: [
      "Cut mini bell peppers in half and remove seeds",
      "Mix cream cheese with chives and garlic powder",
      "Stuff peppers with cream cheese mixture and chill before serving",
    ],
    difficulty: "Easy",
    picture: stuffedMiniBellPeppers,
    calories: { total: 200, protein: "4g", carbs: "15g", fat: "14g" },
  },
  {
    id: 7,
    title: "Avocado Shrimp Cocktails",
    description:
      "A modern twist on the classic shrimp cocktail, served in avocado halves.",
    category: "appetizers",
    ingredients: [
      { name: "Shrimp", quantity: "24 cooked and chilled" },
      { name: "Avocado", quantity: "4 halved and pitted" },
      { name: "Cocktail sauce", quantity: "1/2 cup" },
      { name: "Lemon juice", quantity: "2 tbsp" },
    ],
    instructions: [
      "Place shrimp on a bed of cocktail sauce in avocado halves",
      "Drizzle with lemon juice",
      "Serve chilled",
    ],
    difficulty: "Medium",
    picture: avocadoShrimpCocktails,
    calories: { total: 320, protein: "25g", carbs: "12g", fat: "20g" },
  },
  // Starters
  {
    id: 2,
    title: "Garlic Bread",
    description: "Crunchy and buttery garlic bread.",
    category: "starters",
    ingredients: [
      { name: "Baguette", quantity: "1" },
      { name: "Butter", quantity: "50g" },
      { name: "Garlic cloves", quantity: "3 minced" },
    ],
    instructions: [
      "Preheat oven to 200°C",
      "Mix butter and garlic",
      "Spread on baguette slices, bake for 10 minutes",
    ],
    difficulty: "Easy",
    picture: garlicBread,
    calories: { total: 180, protein: "4g", carbs: "20g", fat: "10g" },
  },
  {
    id: 8,
    title: "Spinach and Feta Puffs",
    description: "Flaky pastry filled with creamy spinach and feta.",
    category: "starters",
    ingredients: [
      { name: "Puff pastry", quantity: "1 sheet" },
      { name: "Spinach", quantity: "200g" },
      { name: "Feta cheese", quantity: "100g" },
      { name: "Eggs", quantity: "1 beaten" },
    ],
    instructions: [
      "Sauté spinach until wilted",
      "Mix spinach with crumbled feta",
      "Cut pastry into squares, fill with mixture, fold, and brush with egg",
      "Bake at 200°C for 20 minutes",
    ],
    difficulty: "Easy",
    picture: spinachFetaPuffs,
    calories: { total: 250, protein: "8g", carbs: "24g", fat: "14g" },
  },
  {
    id: 9,
    title: "Mini Quiches",
    description: "Bite-sized quiches with a variety of fillings.",
    category: "starters",
    ingredients: [
      { name: "Pastry shells", quantity: "12" },
      { name: "Eggs", quantity: "4" },
      { name: "Milk", quantity: "1 cup" },
      { name: "Fillings (ham, cheese, vegetables)", quantity: "as needed" },
    ],
    instructions: [
      "Preheat oven to 175°C",
      "Whisk eggs and milk, season with salt and pepper",
      "Place fillings in pastry shells, pour egg mixture over",
      "Bake for 25 minutes",
    ],
    difficulty: "Easy",
    picture: miniQuiches,
    calories: { total: 150, protein: "10g", carbs: "8g", fat: "9g" },
  },
  {
    id: 10,
    title: "Chicken Satay Skewers",
    description: "Grilled chicken skewers with peanut sauce.",
    category: "starters",
    ingredients: [
      { name: "Chicken breast", quantity: "2, cut into strips" },
      { name: "Soy sauce", quantity: "2 tbsp" },
      { name: "Peanut butter", quantity: "100g" },
      { name: "Coconut milk", quantity: "100ml" },
    ],
    instructions: [
      "Marinate chicken in soy sauce",
      "Skewer and grill until cooked",
      "Simmer peanut butter and coconut milk for sauce",
      "Serve skewers with sauce",
    ],
    difficulty: "Medium",
    picture: chickenSataySkewers,
    calories: { total: 320, protein: "30g", carbs: "8g", fat: "20g" },
  },
  // Main Dish
  {
    id: 3,
    title: "Grilled Chicken",
    description: "Perfectly marinated grilled chicken with herbs.",
    category: "mainDish",
    ingredients: [
      { name: "Chicken breast", quantity: "2" },
      { name: "Olive oil", quantity: "2 tbsp" },
      { name: "Mixed herbs", quantity: "1 tbsp" },
    ],
    instructions: [
      "Marinate chicken",
      "Preheat grill",
      "Grill each side for 7 minutes",
    ],
    difficulty: "Medium",
    picture: grilledChicken,
    calories: { total: 300, protein: "35g", carbs: "0g", fat: "15g" },
  },
  {
    id: 11,
    title: "Beef Stroganoff",
    description: "Classic Russian dish with tender beef in a creamy sauce.",
    category: "mainDish",
    ingredients: [
      { name: "Beef sirloin", quantity: "500g" },
      { name: "Mushrooms", quantity: "200g" },
      { name: "Onion", quantity: "1" },
      { name: "Sour cream", quantity: "1 cup" },
    ],
    instructions: [
      "Sauté beef until browned",
      "Add mushrooms and onions, cook until soft",
      "Stir in sour cream and heat through",
      "Serve with noodles or rice",
    ],
    difficulty: "Medium",
    picture: beefStroganoff,
    calories: { total: 600, protein: "40g", carbs: "20g", fat: "42g" },
  },
  {
    id: 12,
    title: "Vegetable Lasagna",
    description: "Hearty lasagna packed with vegetables and cheese.",
    category: "mainDish",
    ingredients: [
      { name: "Lasagna noodles", quantity: "12" },
      { name: "Ricotta cheese", quantity: "2 cups" },
      { name: "Spinach", quantity: "300g" },
      { name: "Zucchini", quantity: "2" },
      { name: "Tomato sauce", quantity: "2 cups" },
    ],
    instructions: [
      "Layer noodles with ricotta, vegetables, and sauce",
      "Repeat layers, top with mozzarella",
      "Bake at 180°C for 45 minutes",
    ],
    difficulty: "Medium",
    picture: vegetableLasagna,
    calories: { total: 450, protein: "25g", carbs: "55g", fat: "20g" },
  },
  {
    id: 13,
    title: "Salmon Teriyaki",
    description: "Salmon fillets glazed with homemade teriyaki sauce.",
    category: "mainDish",
    ingredients: [
      { name: "Salmon fillets", quantity: "4" },
      { name: "Soy sauce", quantity: "1/3 cup" },
      { name: "Brown sugar", quantity: "3 tbsp" },
      { name: "Ginger", quantity: "1 tsp grated" },
    ],
    instructions: [
      "Mix soy sauce, sugar, and ginger for the sauce",
      "Marinate salmon, then grill",
      "Glaze with remaining sauce while cooking",
      "Serve with rice and vegetables",
    ],
    difficulty: "Easy",
    picture: salmonTeriyaki,
    calories: { total: 350, protein: "23g", carbs: "25g", fat: "18g" },
  },
  // Desserts
  {
    id: 4,
    title: "Chocolate Mousse",
    description: "Rich and airy chocolate mousse.",
    category: "dessert",
    ingredients: [
      { name: "Dark chocolate", quantity: "100g" },
      { name: "Heavy cream", quantity: "200ml" },
      { name: "Egg whites", quantity: "2" },
    ],
    instructions: [
      "Melt chocolate",
      "Whip cream",
      "Fold in egg whites",
      "Chill for 2 hours",
    ],
    difficulty: "Medium",
    picture: chocolateMousse,
    calories: { total: 400, protein: "6g", carbs: "25g", fat: "30g" },
  },
  {
    id: 14,
    title: "Lemon Cheesecake",
    description: "Creamy cheesecake with a tangy lemon flavor.",
    category: "dessert",
    ingredients: [
      { name: "Cream cheese", quantity: "500g" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Eggs", quantity: "3" },
      { name: "Lemon zest", quantity: "1 tbsp" },
    ],
    instructions: [
      "Beat cream cheese and sugar until smooth",
      "Add eggs one at a time, then stir in lemon zest",
      "Pour into crust and bake at 160°C for 1 hour",
      "Chill overnight",
    ],
    difficulty: "Medium",
    picture: lemonCheesecake,
    calories: { total: 500, protein: "8g", carbs: "50g", fat: "30g" },
  },
  {
    id: 15,
    title: "Tiramisu",
    description:
      "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    category: "dessert",
    ingredients: [
      { name: "Ladyfingers", quantity: "24" },
      { name: "Strong coffee", quantity: "1 cup" },
      { name: "Mascarpone cheese", quantity: "500g" },
      { name: "Sugar", quantity: "3/4 cup" },
    ],
    instructions: [
      "Dip ladyfingers in coffee",
      "Layer with mascarpone mixture",
      "Repeat layers, dust with cocoa powder",
      "Chill for 4 hours",
    ],
    difficulty: "Medium",
    picture: tiramisu,
    calories: { total: 450, protein: "10g", carbs: "45g", fat: "27g" },
  },
  {
    id: 16,
    title: "Apple Pie",
    description:
      "Warm and comforting pie with a flaky crust and sweet apple filling.",
    category: "dessert",
    ingredients: [
      { name: "Apples", quantity: "6 peeled and sliced" },
      { name: "Sugar", quantity: "3/4 cup" },
      { name: "Cinnamon", quantity: "1 tsp" },
      { name: "Pie crust", quantity: "2" },
    ],
    instructions: [
      "Toss apples with sugar and cinnamon",
      "Fill crust with apple mixture, top with second crust",
      "Bake at 200°C for 50 minutes",
    ],
    difficulty: "Medium",
    picture: applePie,
    calories: { total: 350, protein: "3g", carbs: "55g", fat: "14g" },
  },
];

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
