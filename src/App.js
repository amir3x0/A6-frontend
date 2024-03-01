/////////// Template (This is our main page, what changes is only the components) //////////////
import "./App.css";
import Home from "./pages/home/Home";
import Shopping from "./pages/shopping/Shopping";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Recipes from "./pages/Recipes";
import PlanMeal from "./pages/plan/Plan";
import Share from "./pages/share/Share";
import MyYummy from "./pages/profile/MyYummy";
import Footer from "./components/Footer";
import { ShoppingListProvider } from './pages/shopping/ShoppingListContext'; 
import React from 'react';
// import { fetchMessageFromBackend } from './services/BackendService'; 
import FetchMessageButton from './components/FetchMessageButton';
// import RecipeDetails from './services/RecipeDetails';


function App() {
  return (
    <Router>
      <ShoppingListProvider>
      <div>
        <NavBar />
        <FetchMessageButton /> 
        <div className="font-serif">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/A6" element={<Home />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/Plan" element={<PlanMeal />} />
            <Route path="/Share" element={<Share />} />
            <Route path="/Shopping" element={<Shopping />} />
            <Route path="/MyYummy" element={<MyYummy />} />
            {/* <Route path="/recipe/:id" element={<RecipeDetails id="65e0fbc4c9940ddd3655e0b9" />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
        </ShoppingListProvider>
    </Router>
  );
}


export default App;


////////////////////////// End Of Template /////////////////////////////