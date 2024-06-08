import { useState } from "react";
import Flex from "@/Components/Flex/Flex";
import NftCard from "../../../../Components/NftCard/NftCard";
import Profile from "./Profile/Profile";
import NftDialog from "../../../../Components/NftDialog/NftDialog";
import Grid from "@/Components/Grid/Grid";
import DisabledItems from "./DisabledItems/DisabledItems";
import EmailInvite from "./EmailInvite/EmailInvite";





const Sidebar = ({ className }) => {

    const [minimizeSidebar, setMinimizeSidebar] = useState(false);
    const SiderbarContainer = () => {
        return (

            <Flex className={className} >
                <Grid className="w-full relative gap-4">
                    <div onClick={() => setMinimizeSidebar(true)} className="absolute mobile:hidden  right-0 rounded-full cursor-pointer hover:bg-n-1 hover:text-white bg-n-1/10 text-n-1 w-8 h-8 flex items-center justify-center -top-8">
                        <i className="fi fi-br-arrow-right h-0 w-0 flex items-center justify-center  bg-red-400"></i>
                    </div>
                    <Profile />
                    <NftCard />
                    <EmailInvite />
                    <DisabledItems />
                </Grid>
            </Flex >
        )
    }
    return (<>
        {
            !minimizeSidebar ? (
                <SiderbarContainer />
            )
                : (
                    <div className=" fixed mobile:hidden  right-10 top-12">
                        <div className="rounded-full hover:bg-n-1 hover:text-white bg-white shadow shadow-black/20 cursor-pointer w-8 h-8 flex items-center justify-center">
                            <i onClick={() => setMinimizeSidebar(false)} className="fi fi-sr-user h-0 w-0 flex items-center justify-center  bg-red-400"></i >
                        </div >
                    </div >
                )
        }
    </>);
};

export default Sidebar;
