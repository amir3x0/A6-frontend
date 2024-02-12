import React from 'react';

const images = {'planBg':process.env.PUBLIC_URL +  "/images/plan_img/planBg.jpg",
                'app1': process.env.PUBLIC_URL + "/images/plan_img/appetiser1.png",
                'app2': process.env.PUBLIC_URL + "/images/plan_img/appetiser2.png",
                'app3': process.env.PUBLIC_URL + "/images/plan_img/appetiser3.png",
                'star1': process.env.PUBLIC_URL + "/images/plan_img/Arancini.png",
                'star2': process.env.PUBLIC_URL + "/images/plan_img/Pasta salad.png",
                'main1': process.env.PUBLIC_URL + "/images/plan_img/Dijon salmon and lemon.png",
                'main2': process.env.PUBLIC_URL + "/images/plan_img/Seasoned chicken.png",
                'dess1': process.env.PUBLIC_URL + "/images/plan_img/Chocolate Souffle.png",
                'dess2': process.env.PUBLIC_URL + "/images//plan_img/Apple pie.png"}

// Recipe component
const Recipe = ({ name, imageUrl }) => {
    return (
        <div className="recipe">
            <h3>{name}</h3>
            <img src={imageUrl} alt={name} className="recipe-image" />
            <button className="add-to-meal">+</button>
        </div>
    );
};

export default function PlanSection() {
    return (
        <div className="plansection">
            <div className='image-container'>
                <img className='cus_img' src={images.planBg} alt="" /> 
                <div className='overlay'>
                    <h1>Plan Your Meal</h1>
                </div>
            </div>
            <div className="content">
                <div className="column">
                    <div className="row">
                       <h2 className="row-title">Appetizers</h2>
                       <div className="dish-container">
                            <Recipe name="Creamy bread" imageUrl={images.app1}/>
                            <Recipe name="Cheese plat" imageUrl={images.app2}/>
                            <Recipe name="Mini pie" imageUrl={images.app3}/>
                            {/* Add more recipes as needed */}
                       </div>
                    </div>
                    <div className="row">
                        <h2 className="row-title">Starters</h2>
                        <div className="dish-container">
                            <Recipe name="Arancini" imageUrl={images.star1}/>
                            <Recipe name="Pasta salad" imageUrl={images.star2}/>
                            {/* Add more recipes as needed */}
                       </div>
                    </div>
                    <div className="row">
                        <h2 className="row-title">Main dishes</h2>
                        <div className="dish-container">
                            <Recipe name="Dijon salmon&lemon" imageUrl={images.main1}/>
                            <Recipe name="Seasoned chicken" imageUrl={images.main2}/>
                            {/* Add more recipes as needed */}
                       </div>
                    </div>
                    <div className="row">
                        <h2 className="row-title">Desserts</h2>
                        <div className="dish-container">
                            <Recipe name="Chocolate Souffle" imageUrl={images.dess1}/>
                            <Recipe name="Apple pie" imageUrl={images.dess2}/>
                            {/* Add more recipes as needed */}
                       </div>
                    </div>
                </div>
                <div className="column">
                    <h2 className="row-title">Your Meal</h2>
                    <div className="table-section">
                        <table>
                            <thead>
                                <tr>
                                    <th>Recipe</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Add selected recipes here */}
                                <tr>
                                    <td>Creamy bread</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Chocolate Souffle</td>
                                    <td>1</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                    <button className="create-list-button">Create Shopping List</button>
                </div>
            </div>           
        </div>
    );
}