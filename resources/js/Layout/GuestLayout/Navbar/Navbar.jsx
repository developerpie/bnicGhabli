// resources\js\Pages\Dashboard\Navbar\Navbar.jsx
import React from "react";
import NavbarItem from "./NavbarItem/NavbarItem";
import Header from "./Header/Header";
import { disconnect } from "@wagmi/core";
import { router } from "@inertiajs/react";
const links = {
    Dashboard: {
        id: 1,
        icon: "fi fi-br-home",
        href: "/dashboard",
        color: "text-n-1",
    },
    Corporations: {
        id: 2,
        icon: "fi fi-br-building",
        href: "/daos",
        color: "text-n-2",
    },
    Certificates: {
        id: 3,
        icon: "fi fi-br-list",
        href: "/certificates",
        color: "text-n-2",
    },
    Inbox: {
        id: 4,
        icon: "fi fi-br-envelope",
        href: "/inbox",
        color: "text-n-3",
    },
    Events: {
        id: 5,
        icon: "fi fi-br-calendar-star",
        href: "/events",
        color: "text-n-4",
    },
    Petitions: {
        id: 6,
        icon: "fi fi-br-vote-yea",
        href: "/petitions",
        color: "text-n-5",
    },
    Settings: {
        id: 7,
        icon: "fi fi-rr-settings",
        href: "/settings",
        color: "text-n-6",
    },
    Logout: {
        id: 8,
        icon: "fi fi-br-sign-out-alt",
        href: "#",
        color: "text-n-7",
        onClick: () => {
            axios.post(route("user.logout")).then((response) => {
                if (response.status != 200) return;
                disconnect();
                router.get(route("user.login"));
            });
        },
    },
};
const Navbar = ({ activeLink, setNavbarOpen, navbarOpen, className }) => {
    return (
        <div className={className}>
            <Header setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />
            <div className="flex-grow overflow-y-auto scroll-smooth scrollbar-none">
                <div className="flex flex-col">
                    {Object.keys(links).map((link, index) => (
                        <NavbarItem
                            key={link}
                            href={links[link].href}
                            activeLink={activeLink}
                            onClick={links[link].onClick}
                            className={(index != 1 && index != 0 && index != Object.keys(links).length -1 ) ? `opacity-50 grayscale pointer-events-none select-none cursor-not-allowed` : ""}
                        >
                            <i
                                className={`mt-1 ${links[link].icon} ${links[link].color} p-0 m-0`}
                            ></i>
                            {navbarOpen &&
                                <div className="ml-5">{link}</div>
                            }
                        </NavbarItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
