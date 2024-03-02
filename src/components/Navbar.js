import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const baseNavItems = [
  { name: "Home", path: "/" },
  { name: "Recipes", path: "/Recipes" },
  { name: "Plan Meal", path: "/Plan" },
  { name: "Share", path: "/Share" },
  { name: "Shopping", path: "/Shopping" },
];

const loggedInItems = [...baseNavItems, { name: "MyYummy", path: "/MyYummy" }];

const loggedOutItems = [...baseNavItems, { name: "Sign In", path: "/SignIn" }];

const NavItem = ({ item, onItemClick, isActive }) => {
  return (
    <li className="relative group">
      <Link
        to={item.path}
        className={`px-4 py-2 font-bold text-lg ${
          isActive ? "text-red-800" : "text-black"
        }`} // Use backticks here
        onClick={onItemClick}
      >
        {item.name}
      </Link>
      <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

const NavBar = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const location = useLocation();
  const [navItems, setNavItems] = useState(baseNavItems);

  useEffect(() => {
    const authUser = async => {
      try {
        const token = localStorage.getItem("userToken");
        setNavItems(token ? loggedInItems : loggedOutItems);
      } catch {
        setNavItems(loggedOutItems);
      }
    };
    authUser()
  }, []);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section className="shadow-lg sticky top-0 left-0 right-0 z-50 bg-white mb-10">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div className="text-2xl font-bold text-red-800">
          <span>Yu</span>
          <span className="text-black">mm</span>
          <span>y</span>
        </div>

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
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                onItemClick={navVisibilityHandler}
                isActive={
                  location.pathname === item.path ||
                  (location.pathname === "/A6" && item.name === "Home")
                }
              />
            ))}
          </ul>
        </div>
      </header>
    </section>
  );
};

export default NavBar;
