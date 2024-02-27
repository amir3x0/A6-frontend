import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { images } from "../constants/index.js";

const navItemsInfo = [
  { name: "Home", path: "/" },
  { name: "Recipes", path: "/recipes" },
  { name: "Plan Meal", path: "/Plan" },
  { name: "Share", path: "/share" },
  { name: "Shopping", path: "/shopping" },
  { name: "MyYummy", path: "/myyummy" },
];

const NavItem = ({ item, onItemClick }) => {
  return (
    <li className="relative group">
      <Link to={item.path} className="px-4 py-2" onClick={onItemClick}>
        {item.name}
      </Link>
      <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

const NavBar = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section className="shadow-lg sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <span to="/">
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
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                onItemClick={navVisibilityHandler}
              />
            ))}
          </ul>

        </div>
      </header>
    </section>
  );
};

export default NavBar;
