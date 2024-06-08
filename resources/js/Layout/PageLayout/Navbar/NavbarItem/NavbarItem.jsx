// resources\js\Pages\Dashboard\NavbarItem\NavbarItem.jsx
import React from "react";

const NavbarItem = ({ href, activeLink, children, onClick, className }) => (
    <a
        onClick={onClick}
        href={href}
        className={`${className} ${activeLink == "" && "active"
            } flex items-center h-[52px] font-medium hover:text-w-1 rounded-lg transition-colors text-w-3 px-5`}
    >
        {children}
    </a>
);

export default NavbarItem;
