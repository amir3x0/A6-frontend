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
import SignInPage from "./components/SignInPage";
import React from 'react';
import { ShoppingListProvider } from './pages/shopping/ShoppingListContext'; // Adjust the path as necessary



function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="font-serif">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/A6" element={<Home />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/Plan" element={<PlanMeal />} />
            <Route path="/Share" element={<Share />} />
            // Wrap the Shopping component with ShoppingListProvider
            <Route path="/Shopping" element={<ShoppingListProvider><Shopping /></ShoppingListProvider>} />
            <Route path="/MyYummy" element={<MyYummy />} />
            <Route path="/SignIn" element={<SignInPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


////////////////////////// End Of Template /////////////////////////////