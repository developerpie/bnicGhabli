// resources\js\Pages\User\Dashboard\Dashboard.jsx
import { useState } from "react";
import GlobalLayout from "@/Layout/GlobalLayout/GlobalLayout";
import Navbar from "@/Layout/PageLayout/Navbar/Navbar";
import Screen from "@/Layout/PageLayout/Screen/Screen";
import Sidebar from "@/Layout/PageLayout/Screen/Sidebar/Sidebar";
import { useEffect } from "react";
const PageLayout = ({ children, showSidebar, title }) => {
    const [activeLink, setActiveLink] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(() => {
        const savedState = localStorage.getItem('navbarOpen');
        if (savedState !== null) return JSON.parse(savedState);
        return window.innerWidth > 768;
    });
    useEffect(() => {
        const handleResize = () => setNavbarOpen(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        localStorage.setItem('navbarOpen', JSON.stringify(navbarOpen));
    }, [navbarOpen]);
    const navOpenClass = "fixed z-20 top-0 left-0 bottom-0 flex flex-col pt-[120px] px-4 bg-b-1 w-80";
    const navCloseClass = "fixed z-20 top-0 left-0 bottom-0 flex flex-col pt-[120px] px-4 bg-b-1 w-20";
    return (
        <>
            <GlobalLayout title={title}>

                <main className={`pr-6 bg-b-1  mobile:pr-0 mobile:pl-0 ${navbarOpen ? "pl-80" : "pl-20"}`}>
                    <div onClick={() => setShowMenu(!showMenu)} className={`hidden mobile:flex fixed z-20 top-0 right-0 ${showMenu ? "w-[calc(100vw-80px)]" : "w-full"} bg-white items-center text-xl justify-end h-[70px] px-4`}>
                        {!showMenu ? (
                            <i className="fi fi-br-menu-burger"></i>) : (
                            <i className="fi fi-rr-circle-xmark"></i>
                        )}
                    </div>
                    {showMenu &&
                        <section className="relative w-screen h-screen">
                            <div className={`hidden mobile:block  z-30 relative mobile:bg-b-2 mobile:h-screen ${navbarOpen ? navOpenClass : navCloseClass}`}>
                                <Navbar activeLink={activeLink} navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
                            </div>
                            <Sidebar className={"mobile:bg-w-2 mobile:px-3 mobile:fixed mobile:pb-[3rem] mobile:pt-[calc(70px+3rem)] mobile:overflow-y-scroll h-screen  mobile:top-0 mobile:right-0 mobile:w-[calc(100vw-80px)]"} />
                        </section>
                    }
                    <div className={`mobile:hidden ${navbarOpen ? navOpenClass : navCloseClass}`}>
                        <Navbar activeLink={activeLink} navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
                    </div>
                    {!showMenu &&
                        <Screen navbarOpen={navbarOpen}  showSidebar={showSidebar}>{children}</Screen>
                    }
                </main>
            </GlobalLayout >
        </>
    );
};

export default PageLayout;
