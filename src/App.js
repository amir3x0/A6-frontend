/////////// Template (This is our main page, what changes is only the components) //////////////
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import PlanMeal from "./pages/Plan";
import Share from "./pages/Share";
import Shopping from "./pages/Shopping";
import MyYummy from "./pages/MyYummy";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container main">
          <Routes >
            <Route path="/Home" element={<Home />} /> {/* Updated route definition */}
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/Plan" element={<PlanMeal />} />
            <Route path="/Share" element={<Share />} />
            <Route path="/Shopping" element={<Shopping />} />
            <Route path="/MyYummy" element={<MyYummy />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

////////////////////////// End Of Template /////////////////////////////