
import GlobalLayout from "@/Layout/GlobalLayout/GlobalLayout";
import React, { useEffect, useState } from "react";
import { Web3Button } from "@web3modal/react";
import { router } from "@inertiajs/react";
import { useAccount } from "wagmi";
import config from "@/config";

const UserLogin = ({ auth, inviter }) => {

    const invited = inviter || localStorage.getItem("inviter_id");
    if (inviter && inviter.email) {
        console.log("You are invited by: " + inviter.email);
        localStorage.setItem("inviter_id", inviter.id);
    }

    if (auth.user) router.get(route("dashboard.index"));
    const { address, isConnected } = useAccount();
    const login = async () => {
        if (address) {
            const response = await axios.post(route("user.signin"), {
                wallet: address,
            });
            if (response.data.check == true) {
                router.get(route("dashboard.index"));
            } else {
                router.get(route("user.create"));
            }
        }
    };
    useEffect(() => {
        if (isConnected) {
            login();
        }
    }, [isConnected]);
    return (
        <GlobalLayout title={"Welcome"} className={"bg-blue-gray-50/20 h-screen w-screen"} >
            <main className="flex  z-10 items-center bg-white shadow largeDesktop:rounded-xl largeDesktop:w-[55vw]  justify-center largeDesktop:h-[50rem] largeDesktop:max-h-max   m-auto right-0 left-0 top-0 bottom-0 absolute largeDesktop:p-0  ">

                <div className="container grid max-w-7xl gap-8 smallDesktop:pl-0 largeDesktop:justify-start justify-center largeDesktop:pl-20 mx-auto">
                    <header>
                        <div className="flex smallDesktop:justify-center justify-start">
                            <img src="/img/logo-dark.svg" alt="logo" />
                        </div>
                    </header>
                    <section className="grid gap-8 smallDesktop:text-center text-left">
                        <h2 className="smallDesktop:text-5xl font-extrabold text-5xl  ">
                            Bnic.io <br className="block smallDesktop:hidden " />
                            Manager Your <br />
                            Decentral <br className="smallDesktop:hidden" />
                            Idendity
                        </h2>
                        <p className="max-w-sm smallDesktop:mx-auto text-lg mx-0">
                            Create your Decentral identity and unlock new
                            opportunities in the digital world. Connect Wallet
                        </p>
                        <div className="flex smallDesktop:justify-center gap-2  justify-start">
                            <Web3Button />
                            <div></div>
                       
                        </div>
                    </section>
                </div>
                <div className=" w-screen smallDesktop:hidden relative h-screen pointer-events-none -z-10">
                    <div className="absolute top-0 bottom-0 right-0 w-[50vw] largeDesktop:rounded-r-xl  largeDesktop:w-[33vw]  largeDesktop:h-[50rem] largeDesktop:max-h-max  smallDesktop:hidden h-screen my-auto ">
                        <video autoPlay loop muted className="h-screen largeDesktop:rounded-r-xl ml-auto  largeDesktop:h-[50rem] largeDesktop:max-h-max object-cover">
                            <source src="/background.mp4" className="h-screen largeDesktop:rounded-r-xl object-cover" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </main>
        </GlobalLayout >
    );
};

export default UserLogin;
