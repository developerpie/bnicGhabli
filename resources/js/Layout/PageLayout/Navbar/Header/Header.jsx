// resources\js\Pages\Dashboard\Navbar\Header\Header.jsx
import Logo from "./Logo/Logo";
import { IcoMenuClose, IcoMenuOpen } from "@/Components/SVG/SVG";
const Header = ({ setNavbarOpen, navbarOpen }) => {
    return (
        <>
            <div className="absolute top-0 right-0 left-0 flex items-center h-32 pl-7 pr-6 justify-between">
                {navbarOpen &&
                    <a className="flex w-[11.88rem] justify-between">
                        <Logo src="/img/logo.svg" />
                    </a>
                }
                <button type="button" onClick={() => setNavbarOpen(!navbarOpen)} className="pl-[5px] group tap-highlight-color">
                {navbarOpen ? <IcoMenuOpen /> : <IcoMenuClose    />}
                </button>
            </div>
        </>
    );
};

export default Header;
