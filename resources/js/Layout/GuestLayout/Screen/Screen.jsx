// resources\js\Pages\Dashboard\Screen\Screen.jsx

import Sidebar from "./Sidebar/Sidebar";

const Screen = ({ children, navbarOpen, showSidebar = true }) => {
    return (
        <>
            <div className=" @container/rightside flex min-h-screen mobile:p-0 py-6">
                <div className="relative flex w-full bg-[#fefefe] mobile:p-0 mobile:rounded-none rounded-[1.25rem]">
                    <div className={`w-full @container/main mobile:pt-20 flex py-14 ${navbarOpen ? "max-w-[900px] mediumDesktop:max-w-[700px] " : "max-w-[700px]"}  px-10 mx-auto grow shrink-0  flex-col `}>
                        {children}
                    </div>
                    {showSidebar &&
                        <Sidebar className={`shadow-inner mobile:hidden flex-col py-14 items-center bg-[#f6f6f6] w-[350px] top-0 z-20 gap-8 DYNAMICS=> px-4 @[1100px]/rightside:px-8 @[1010px]/rightside:h-full h-screen fixed -right-6  @[1010px]/rightside:static @[1010px]/rightside:flex  @[1010px]/rightside:rounded-r-[1.25rem]  `} />
                    }
                </div>
            </div>
        </>
    );
};

export default Screen;
