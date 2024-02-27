/////////// Template (This is our main page, what changes is only the components) //////////////
import "./App.css";
import Home from "./pages/home/Home";
import Shopping from "./pages/shopping/Shopping";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Recipes from "./pages/Recipes";
import PlanMeal from "./pages/Plan";
import Share from "./pages/Share";
import MyYummy from "./pages/profile/MyYummy";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/Plan" element={<PlanMeal />} />
            <Route path="/Share" element={<Share />} />
            <Route path="/shopping/Shopping" element={<Shopping />} />
            <Route path="/MyYummy" element={<MyYummy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;


////////////////////////// End Of Template /////////////////////////////