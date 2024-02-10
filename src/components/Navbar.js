import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

// import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"


export default function NavBar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation(); // Used to determine the current path for active link styling
    const links = [
        {
            name: "Home",
            path: "/Home"
        },
        {
            name: "Recipes",
            path: "/Recipes"
        },
        {
            name: "Plan Meal",
            path: "/Plan"
        },
        {
            name: "Share",
            path: "/Share"
        },
        {
            name: "Shopping",
            path: "/Shopping"
        },
        {
            name: "MyYummy",
            path: "/MyYummy"
        },
    ];

    function closeSidebar(){
        setShowSidebar(false);
    };

    // const handleLinkClick = (event, pageName) => {
    //     event.preventDefault(); // Prevent default behavior of hyperlink
    //     onPageChange(pageName); // Update the current page
    // };

    return (
        <div className="navbar container">
            <Link to="/" className="logo">Yu<span>mm</span>y</Link>
            <div className="nav-links">
                {links.map(link => (
                    <Link
                        to={link.path}
                        key={link.name}
                        className={location.pathname === link.path ? "active" : ""}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <div onClick={() => setShowSidebar(true)} className="sidebar-btn">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        </div>
    );
}