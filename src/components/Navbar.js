import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { images } from "../constants/index.js";

// Assuming you have user information like this
const user = {
  fullName: "John Doe",
  profilePicture: "/path/to/profile-picture.jpg", // Update this path accordingly
};

const getNavItemsInfo = (isLoggedIn) => [
  { name: "Home", path: "/" },
  { name: "Recipes", path: "/recipes" },
  { name: "Plan Meal", path: "/Plan" },
  { name: "Share", path: "/share" },
  { name: "Shopping", path: "/shopping" },
  ...(isLoggedIn
    ? [
        {
          name: "MyYummy",
          path: "/MyYummy",
          dropdown: [
            {
              name: "Profile",
              path: "/MyYummy",
              type: "profile",
              fullName: user.fullName,
              profilePicture: user.profilePicture,
            },
            { name: "Logout", path: "/logout", type: "logout" }, // Use a dummy path for logout for now
          ],
        },
      ]
    : []),
];

const NavItem = ({ item, onItemClick }) => (
  <li className="relative group">
    <Link to={item.path} className="px-4 py-2" onClick={onItemClick}>
      {item.name}
    </Link>
    <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
      /
    </span>
  </li>
);

const NavBar = ({ isLoggedIn, onLogout }) => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => setNavIsVisible(!navIsVisible);

  return (
    <section className="shadow-lg sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <span>
          <img className="w-16" src={images.yummylogo} alt="logo" />
        </span>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`lg:flex ${
            navIsVisible ? "flex" : "hidden"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-white lg:bg-transparent absolute lg:static top-0 right-0 bottom-0 w-full lg:w-auto justify-center lg:justify-between items-center`}
        >
          <ul className="text-dark-soft flex flex-row gap-x-2 font-semibold">
            {getNavItemsInfo(isLoggedIn).map((item) => (
              <NavItem
                key={item.name}
                item={item}
                onItemClick={navVisibilityHandler}
              />
            ))}
          </ul>
          {isLoggedIn ? (
            <button onClick={onLogout} className="px-6 py-2">
              Logout
            </button>
          ) : (
            <Link to="/signin" className="px-6 py-2">
              Sign In
            </Link>
          )}
        </div>
      </header>
    </section>
  );
};

export default NavBar;
