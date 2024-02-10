import React, { useState } from 'react';

const Share = () => {
    const [recipeName, setRecipeName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [description, setDescription] = useState('');
    const [selectedCategoryIngredients, setSelectedCategoryIngredients] = useState([]);
    const [ingredientQuantities, setIngredientQuantities] = useState({});

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setSelectedCategoryIngredients(ingredientCategories[selectedCategory]);
    };

    const handleIngredientChange = (ingredient) => {
        const updatedIngredients = [...ingredients];
        const index = updatedIngredients.indexOf(ingredient);
        if (index === -1) {
            updatedIngredients.push(ingredient);
        } else {
            updatedIngredients.splice(index, 1);
        }
        setIngredients(updatedIngredients);
    };

    const handleDeleteIngredient = (ingredient) => {
        const updatedIngredients = ingredients.filter((item) => item !== ingredient);
        setIngredients(updatedIngredients);
        const { [ingredient]: _, ...updatedQuantities } = ingredientQuantities;
        setIngredientQuantities(updatedQuantities);
    };

    const handleQuantityChange = (ingredient, quantity) => {
        setIngredientQuantities({ ...ingredientQuantities, [ingredient]: quantity });
    };

    const handleShare = () => {
        // Handle sharing logic here
        console.log('Recipe Name:', recipeName);
        console.log('Difficulty:', difficulty);
        console.log('Category:', category);
        console.log('Ingredients:', ingredients);
        console.log('Quantities:', ingredientQuantities);
        console.log('Description:', description);
    };

    const ingredientCategories = {
        Vegetables: ['Carrots', 'Broccoli', 'Spinach', 'Tomatoes'],
        Proteins: ['Chicken', 'Beef', 'Fish', 'Tofu'],
        Grains: ['Rice', 'Quinoa', 'Pasta', 'Bread'],
        Fruits: ['Apples', 'Bananas', 'Oranges', 'Berries'],
    };

    return (
        <div className="share-container">
            <h2 className="share-heading">Share Your Recipe</h2>
            <div className="form-group">
                <label htmlFor="recipeName">Recipe Name:</label>
                <input
                    type="text"
                    id="recipeName"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    className="input-field"
                    placeholder="Enter Recipe Name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="difficulty">Difficulty:</label>
                <select
                    id="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="input-field"
                >
                    <option value="">Select Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="hard">Hard</option>
                    <option value="chef">Chef Level</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    className="input-field"
                >
                    <option value="">Select Category</option>
                    {Object.keys(ingredientCategories).map((categoryName) => (
                        <option key={categoryName} value={categoryName}>{categoryName}</option>
                    ))}
                </select>
            </div>
            {selectedCategoryIngredients.length > 0 && (
                <div className="ingredient-tab">
                    <div className="ingredient-tab-column">
                        <h3 className="ingredient-tab-heading">Ingredients from {category}</h3>
                        <ul className="ingredient-list">
                            {selectedCategoryIngredients.map((ingredient) => (
                                <li
                                    key={ingredient}
                                    className={ingredients.includes(ingredient) ? 'active' : ''}
                                    onClick={() => handleIngredientChange(ingredient)}
                                >
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="ingredient-tab-column">
                        <h3 className="ingredient-tab-heading">Selected Ingredients</h3>
                        <ul className="selected-ingredient-list">
                            {ingredients.map((ingredient) => (
                                <li key={ingredient} className="selected-ingredient">
                                    <span>{ingredient}</span>
                                    <input
                                        type="number"
                                        min="1"
                                        value={ingredientQuantities[ingredient] || ''}
                                        onChange={(e) => handleQuantityChange(ingredient, e.target.value)}
                                        placeholder="Amount"
                                        className="quantity-input"
                                    />
                                    <button onClick={() => handleDeleteIngredient(ingredient)}>&times;</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="input-field description"
                    placeholder="Enter Recipe Description"
                />
            </div>
            <button onClick={handleShare} className="share-btn">Share Recipe</button>
        </div>
    );
};

export default Share;
