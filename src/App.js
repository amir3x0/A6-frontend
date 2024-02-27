import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Home from "./pages/home/Home";
import Shopping from "./pages/shopping/Shopping";
import Recipes from "./pages/Recipes";
import PlanMeal from "./pages/Plan";
import Share from "./pages/Share";
import MyYummy from "./pages/profile/MyYummy";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <div>
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/Plan" element={<PlanMeal />} />
            <Route path="/Share" element={<Share />} />
            <Route path="/shopping/Shopping" element={<Shopping />} />
            {isLoggedIn && <Route path="/MyYummy" element={<MyYummy />} />}
            <Route path="/signin" element={<SignInPage onSignIn={handleLogin} />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
