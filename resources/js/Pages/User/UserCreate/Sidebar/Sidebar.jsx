// Sidebar.jsx
import StepItem from "../StepItem/StepItem";



const Sidebar = ({ steps }) => {
    return (
        <aside className="basis-1/4 h-screen p-2 mobile:hidden items-center flex justify-center">
            <div className="bg-[#FAFAFB] flex flex-col gap-12   justify-center rounded-lg w-full p-8 h-full">
                {steps.map((step) => (
                    <StepItem {...step} />
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
