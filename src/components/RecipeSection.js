
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
      description: "A classic Italian appetizer featuring toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.",
      ingredients: ["Baguette or Italian bread", "Tomatoes, diced","Garlic cloves","Fresh basil","Salt and pepper "],
      instructions: ["Step 1: Slice tomatoes.", "Step 2: Arrange basil leaves.", "Step 3: Add mozzarella slices."],
      difficulty: "Easy",
      rank: 4,
      categories: ["appetizers", "Bruschetta"],
      picture: images.Bruschetta,
      calories: { total: 500, protein: "30g", carbs: "35g", fat: "22g" },
    },
    {
      id: 2,
      title: "Caprese Salad",
      description: "A refreshing salad with tomatoes, mozzarella, and balsamic glaze.",
      ingredients: ["Ripe tomatoes", "Fresh mozzarella cheese", "Fresh basil leaves","Balsamic glaze","Salt and pepper"],
      instructions: ["Step 1: Slice tomatoes and mozzarella.", "Step 2: Arrange on a plate.", "Step 3: Drizzle with balsamic glaze."],
      difficulty: "Easy",
      rank: 5,
      categories: ["appetizers", "Caprese Salad"],
      picture: images.Caprese_Salad,
      calories: { total: 400, protein: "20g", carbs: "25g", fat: "18g" },
    },
    {
      id: 3,
      title: "Cheese Platter",
      description: "An assorted cheese platter with crackers and fruits.",
      ingredients: ["Assorted cheeses (e.g., Brie, Gouda, Cheddar, Blue, Goat cheese)", "Crackers or bread", "Grapes or berries","Nuts","Honey","Olives"],
      instructions: ["Step 1: Arrange a variety of cheeses.", "Step 2: Add crackers and fruits.", "Step 3: Serve and enjoy."],
      difficulty: "Easy",
      rank: 3,
      categories: ["appetizers", "Cheese Platter"],
      picture: images.Cheese_Platter,
      calories: { total: 450, protein: "25g", carbs: "30g", fat: "20g" },
    },
  ],
  starters: [
      {
        id: 4,
        title: "Artichoke",
        description: "A simple and delicious way to enjoy artichokes, steamed and served with a flavorful dipping sauce.",
        ingredients: ["Fresh artichokes", "Lemon wedges","Garlic cloves","Olive oil","Salt and pepper"],
        instructions: ["Step 1: Trim the stem of the artichokes and cut off the top third. Trim the tips of the leaves with kitchen shears.", "Step 2:Rub the cut edges with lemon wedges to prevent browning..", "Step 3: Steam the artichokes until the leaves pull away easily. Meanwhile, mix minced garlic with olive oil and a pinch of salt and pepper to create a dipping sauce."],
        difficulty: "Moderate",
        rank: 4,
        categories: ["starters", "Artichoke"],
        picture: images.Artichoke,
        calories: { total: 500, protein: "30g", carbs: "35g", fat: "22g" },
      },
      {
        id: 5,
        title: "Mushrooms",
        description: "A delightful dish featuring savory mushrooms with a flavorful balsamic glaze.",
        ingredients: ["Fresh mushrooms", "Olive oil", "Garlic cloves, minced", "Salt and pepper to taste", "Balsamic glaze"],
        instructions: [
          "Step 1: Clean and slice the fresh mushrooms.",
          "Step 2: In a pan, sauté minced garlic in olive oil until fragrant. Add the sliced mushrooms and cook until tender. Season with salt and pepper.",
          "Step 3: Arrange the cooked mushrooms on a plate and drizzle with balsamic glaze. Serve and enjoy!"
        ],
        difficulty: "Easy",
        rank: 4,
        categories: ["starters", " Mushrooms"],
        picture: images. Mushrooms,
        calories: { total: 400, protein: "20g", carbs: "25g", fat: "18g" },
      },
      {
        id: 6,
  title: "Spring Rolls",
  description: "Delicious and light spring rolls filled with fresh vegetables and served with a tasty dipping sauce.",
  ingredients: ["Rice paper wrappers","Shredded lettuce","Thinly sliced carrots","Cucumber strips", "Bean sprouts","Fresh mint leaves","Cooked vermicelli noodles",

  ],
  instructions: [
    "Step 1: Dip a rice paper wrapper in warm water until it softens. Lay it flat on a clean surface.",
    "Step 2: Place a small amount of shredded lettuce, carrots, cucumber, bean sprouts, mint leaves, and vermicelli noodles (plus shrimp or tofu if desired) in the center of the wrapper.",
    "Step 3: Fold the sides of the wrapper over the filling and then roll it tightly. Repeat with the remaining ingredients.",
    "Step 4: Serve the spring rolls with a dipping sauce of your choice. Enjoy!"
  ],
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
      title: "Filled Pepper",
      description: "A delightful dish featuring sweet peppers filled with a delicious combination of tomatoes and basil.",
      ingredients: [
        "Sweet peppers",
        "Tomatoes, sliced",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper"
      ],
      instructions: [
        "Step 1: Slice the sweet peppers and arrange them in a baking dish.",
        "Step 2: Place slices of tomatoes on top of the peppers, then add fresh basil leaves. Nestle mozzarella slices among the ingredients.",
        "Step 3: Drizzle olive oil over the peppers, season with salt and pepper, and bake until the peppers are tender and the cheese is melted and golden.",
        "Step 4: Serve the filled peppers hot. Enjoy this classic Italian appetizer!"
      ],
      difficulty: "Easy",
      rank: 5,
      categories: ["mainDishes", "filled pepper"],
      picture: images.filled_pepper,
      calories: { total: 500, protein: "30g", carbs: "35g", fat: "22g" },
    },
    {
      id: 8,
      title: "Hamburger",
      description: "A classic and delicious hamburger with a juicy beef patty, fresh vegetables, and your favorite condiments.",
      ingredients: [
        "Ground beef patty",
        "Hamburger bun",
        "Lettuce leaves",
        "Tomato slices",
        "Onion slices",
        "Ketchup, mustard, and mayonnaise",
        "Salt and pepper "
      ],
      instructions: [
        "Step 1: Season the ground beef with salt and pepper, then shape it into a patty.",
        "Step 2: Cook the beef patty on a grill or stovetop until it reaches your desired level of doneness.",
        "Step 3: Toast the hamburger bun on the grill or in a toaster.",
        "Step 4: Assemble the hamburger by placing the cooked patty on the bun and adding lettuce, tomato, onion. Top with your favorite condiments.",
        "Step 5: Serve the hamburger with your favorite side dishes. Enjoy your classic, homemade hamburger!"
      ],
      difficulty: "Easy",
      rank: 4,
      categories: ["mainDishes", "hamburger"],
      picture: images. hamburger,
      calories: { total: 400, protein: "20g", carbs: "25g", fat: "18g" },
    },
    {
      id: 9,
      title: "Meatballs",
      description: "Delicious homemade meatballs in a savory tomato sauce, perfect for serving over pasta or as a tasty appetizer.",
      ingredients: [
        "Ground beef ",
        "Breadcrumbs",
        "Egg",
        "Minced garlic",
        "Chopped parsley",
        "Salt and pepper",
        "Olive oil",
        "Tomato sauce"
      ],
      instructions: [
        "Step 1: In a bowl, combine ground meat, breadcrumbs, beaten egg, minced garlic, chopped parsley, salt, and pepper. Mix well.",
        "Step 2: Shape the mixture into meatballs of your desired size.",
        "Step 3: In a pan, heat olive oil over medium heat. Add the meatballs and brown on all sides.",
        "Step 4: Pour tomato sauce over the meatballs and simmer until cooked through, about 15-20 minutes.",
        "Step 5: Serve the meatballs over pasta or as an appetizer with toothpicks. Enjoy!"
      ],
      difficulty: "difficult",
      rank: 4,
      categories: ["mainDishes", "meatballs"],
      picture: images. meatballs,
      calories: { total: 450, protein: "25g", carbs: "30g", fat: "20g" },
    },
  ],
  desserts: [
    {
      id: 10,
      title: "Cheesecake",
      description: "A rich and creamy classic cheesecake with a buttery graham cracker crust, perfect for satisfying your sweet tooth.",
      ingredients: [
        "Graham cracker crumbs",
        "Butter, melted",
        "Cream cheese",
        "Granulated sugar",
        "Eggs",
        "Vanilla extract",
        "Sour cream (optional)",
        "Fresh berries for garnish"
      ],
      instructions: [
        "Step 1: Preheat the oven and mix graham cracker crumbs with melted butter to create the crust. Press the mixture into the bottom of a springform pan.",
        "Step 2: In a large bowl, beat cream cheese until smooth. Add sugar, eggs, and vanilla extract, mixing until well combined. Optional: Add sour cream for extra creaminess.",
        "Step 3: Pour the cream cheese mixture over the crust in the pan. Smooth the top with a spatula.",
        "Step 4: Bake the cheesecake in the preheated oven until set. Allow it to cool completely before refrigerating for a few hours or overnight.",
        "Step 5: Once chilled, remove the cheesecake from the pan, garnish with fresh berries, and slice. Enjoy your delicious homemade cheesecake!"
      ],
      difficulty: "Moderate",
      rank: 5,
      categories: ["desserts", "cheese cake"],
      picture: images.cheese_cake,
      calories: { total: 500, protein: "30g", carbs: "35g", fat: "22g" },
    },
    {
      id: 11,
      title: "Fruit Cake",
      description: "A delightful and moist fruit cake filled with a variety of dried fruits and nuts, perfect for any celebration or special occasion.",
      ingredients: [
        "Dried fruits (e.g., raisins, currants, chopped dates)",
        "Chopped nuts (e.g., walnuts, almonds)",
        "All-purpose flour",
        "Baking powder",
        "Ground cinnamon",
        "Butter, softened",
        "Brown sugar",
        "Eggs",
        "Milk",
        "Brandy or rum (optional)",
        "Powdered sugar for dusting (optional)"
      ],
      instructions: [
        "Step 1: Preheat the oven and prepare a baking pan by greasing and lining it with parchment paper.",
        "Step 2: In a bowl, combine dried fruits, chopped nuts, flour, baking powder, and ground cinnamon.",
        "Step 3: In a separate large bowl, cream together butter and brown sugar. Add eggs one at a time, beating well after each addition. Mix in milk.",
        "Step 4: Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Fold in brandy or rum if using.",
        "Step 5: Pour the batter into the prepared pan and bake until a toothpick inserted into the center comes out clean.",
        "Step 6: Allow the fruit cake to cool completely before removing it from the pan. Optionally, dust with powdered sugar before serving.",
        "Step 7: Slice and enjoy your delicious homemade fruit cake!"
      ],
      difficulty: "Moderate",
      rank: 4,
      categories: ["desserts", "fruit cake"],
      picture: images. fruitcake,
      calories: { total: 400, protein: "20g", carbs: "25g", fat: "18g" },
    },
    {title: "Soufflé",
    description: "A light and fluffy soufflé, a delightful French dish that can be sweet or savory, depending on your preference.",
    ingredients: [
      "Butter for greasing the soufflé dish",
      "Granulated sugar (for sweet soufflé) or grated cheese (for savory soufflé)",
      "Milk",
      "All-purpose flour",
      "Egg yolks",
      "Egg whites",
      "Salt",
      "Sugar (for sweet soufflé) or additional salt and pepper (for savory soufflé)"
    ],
    instructions: [
      "Step 1: Preheat the oven and generously butter the soufflé dish. Coat the dish with granulated sugar for a sweet soufflé or grated cheese for a savory one.",
      "Step 2: In a saucepan, heat milk until scalded. Gradually whisk in flour to create a smooth paste (roux). Cook until thickened and then remove from heat.",
      "Step 3: Whisk in egg yolks one at a time, ensuring each yolk is fully incorporated.",
      "Step 4: In a separate bowl, beat egg whites with salt until stiff peaks form. If making a sweet soufflé, gradually add sugar during this process.",
      "Step 5: Gently fold the beaten egg whites into the egg yolk mixture until just combined.",
      "Step 6: Pour the mixture into the prepared soufflé dish and bake until risen and golden brown.",
      "Step 7: Serve immediately, as soufflés tend to deflate quickly. Enjoy the light and airy texture!"
    ],
    difficulty: "Moderate",
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