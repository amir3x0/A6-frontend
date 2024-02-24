import React from 'react';
import RecipeCard from './RecipeCard'; // Assuming RecipeCard.js is in the same directory

const PlanSection = () => {
    const images = {
        'planBg': process.env.PUBLIC_URL + "/images/plan_img/planBg.jpg",
        'app1': process.env.PUBLIC_URL + "/images/plan_img/appetiser1.png",
        'app2': process.env.PUBLIC_URL + "/images/plan_img/appetiser2.png",
        'app3': process.env.PUBLIC_URL + "/images/plan_img/appetiser3.png",
        'star1': process.env.PUBLIC_URL + "/images/plan_img/Arancini.png",
        'star2': process.env.PUBLIC_URL + "/images/plan_img/Pasta salad.png",
        'main1': process.env.PUBLIC_URL + "/images/plan_img/Dijon salmon and lemon.png",
        'main2': process.env.PUBLIC_URL + "/images/plan_img/Seasoned chicken.png",
        'dess1': process.env.PUBLIC_URL + "/images/plan_img/Chocolate Souffle.png",
        'dess2': process.env.PUBLIC_URL + "/images//plan_img/Apple pie.png"
    };

    return (
        <div className="plansection flex flex-col items-center">
            <div className='image-container relative max-h-96 overflow-hidden'>
                <img className='cus_img w-full h-auto' src={images.planBg} alt="" />
                <div className='overlay absolute bottom-0 left-0 bg-gray-800 bg-opacity-55 p-5 w-full'>
                    <h1 className="text-white text-4xl font-serif">Plan Your Meal</h1>
                </div>
            </div>
            <div className="content flex justify-between w-full px-5">
                <div className="column flex flex-col w-4/6 px-5">
                    <div className="row">
                        <h2 className="row-title text-lg font-bold text-green-800 uppercase mb-2">Appetizers</h2>
                        <div className="dish-container max-h-48 overflow-y-auto border border-gray-300 rounded-md p-2 flex flex-wrap gap-4">
                            <RecipeCard recipe={{ title: "Creamy bread", picture: images.app1, description: "Description of Creamy bread", instructions: ["Step 1", "Step 2"], difficulty: "Easy", rank: 4, categories: ["Category 1", "Category 2"], calories: { total: 200, protein: 10, carbs: 20, fat: 5 }}} />
                            <RecipeCard recipe={{ title: "Cheese plat", picture: images.app2, description: "Description of Cheese plat", instructions: ["Step 1", "Step 2"], difficulty: "Easy", rank: 3, categories: ["Category 1", "Category 2"], calories: { total: 250, protein: 12, carbs: 22, fat: 6 }}} />
                            <RecipeCard recipe={{ title: "Mini pie", picture: images.app3, description: "Description of Mini pie", instructions: ["Step 1", "Step 2"], difficulty: "Medium", rank: 5, categories: ["Category 1", "Category 2"], calories: { total: 300, protein: 15, carbs: 25, fat: 7 }}} />
                            {/* Add more recipes as needed */}
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="row-title text-lg font-bold text-green-800 uppercase mb-2">Starters</h2>
                        <div className="dish-container max-h-48 overflow-y-auto border border-gray-300 rounded-md p-2 flex flex-wrap gap-4">
                            <RecipeCard recipe={{ title: "Arancini", picture: images.star1, description: "Description of Arancini", instructions: ["Step 1", "Step 2"], difficulty: "Easy", rank: 4, categories: ["Category 1", "Category 2"], calories: { total: 220, protein: 11, carbs: 21, fat: 6 }}} />
                            <RecipeCard recipe={{ title: "Pasta salad", picture: images.star2, description: "Description of Pasta salad", instructions: ["Step 1", "Step 2"], difficulty: "Easy", rank: 3, categories: ["Category 1", "Category 2"], calories: { total: 240, protein: 13, carbs: 23, fat: 7 }}} />
                            {/* Add more recipes as needed */}
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="row-title text-lg font-bold text-green-800 uppercase mb-2">Main dishes</h2>
                        <div className="dish-container max-h-48 overflow-y-auto border border-gray-300 rounded-md p-2 flex flex-wrap gap-4">
                            <RecipeCard recipe={{ title: "Dijon salmon and lemon", picture: images.main1, description: "Description of Dijon salmon and lemon", instructions: ["Step 1", "Step 2"], difficulty: "Medium", rank: 5, categories: ["Category 1", "Category 2"], calories: { total: 280, protein: 14, carbs: 24, fat: 8 }}} />
                            <RecipeCard recipe={{ title: "Seasoned chicken", picture: images.main2, description: "Description of Seasoned chicken", instructions: ["Step 1", "Step 2"], difficulty: "Hard", rank: 4, categories: ["Category 1", "Category 2"], calories: { total: 260, protein: 15, carbs: 25, fat: 9 }}} />
                            {/* Add more recipes as needed */}
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="row-title text-lg font-bold text-green-800 uppercase mb-2">Desserts</h2>
                        <div className="dish-container max-h-48 overflow-y-auto border border-gray-300 rounded-md p-2 flex flex-wrap gap-4">
                            <RecipeCard recipe={{ title: "Chocolate Souffle", picture: images.dess1, description: "Description of Chocolate Souffle", instructions: ["Step 1", "Step 2"], difficulty: "Medium", rank: 4, categories: ["Category 1", "Category 2"], calories: { total: 290, protein: 16, carbs: 26, fat: 10 }}} />
                            <RecipeCard recipe={{ title: "Apple pie", picture: images.dess2, description: "Description of Apple pie", instructions: ["Step 1", "Step 2"], difficulty: "Hard", rank: 5, categories: ["Category 1", "Category 2"], calories: { total: 300, protein: 17, carbs: 27, fat: 11 }}} />
                            {/* Add more recipes as needed */}
                        </div>
                    </div>
                </div>

                <div className="column w-2/6">
                    <h2 className="row-title text-lg font-bold text-green-800 uppercase mb-2">Your Meal</h2>
                    <div className="table-section">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">Recipe</th>
                                    <th className="border px-4 py-2">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Creamy bread</td>
                                    <td className="border px-4 py-2">1</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Chocolate Souffle</td>
                                    <td className="border px-4 py-2">1</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                    <button className="create-list-button bg-green-500 text-white border-none px-4 py-2 rounded transition-colors duration-300 hover:bg-green-600">Create Shopping List</button>
                </div>
            </div>
        </div>
    );
}

export default PlanSection;
