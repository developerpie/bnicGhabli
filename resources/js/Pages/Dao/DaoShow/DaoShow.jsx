import PageLayout from "@/Layout/PageLayout/PageLayout";
import { useMediaQuery } from 'react-responsive'
import QRCode from "qrcode.react";
import cn from "classnames";
import config from "@/config";
import moment from 'moment';
const DaoShow = ({ dao }) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const hasMemberRole = dao.members.some(member => member.pivot.role === "Member");
    const asideCards = [
        {
            title: "Organization",
            bg: "#0084ff20",
            titleclass: "bg-n-1",
            content: <h2>{dao.name}</h2>,
            colsize: 1,
        },
        {
            title: "Date of stablishmend",
            bg: "#52ba6920",
            titleclass: "bg-n-2",
            content: (
                <h2>
                    {moment(dao.created_at).format('MMMM Do YYYY')}
                </h2>
            ),
            colsize: 1,
        },
        {
            title: "Headcount",
            bg: "#e8963420",
            titleclass: "bg-n-3",
            content: <h2>{dao.members.length} Members</h2>,
            colsize: 1,
        },
        {
            title: "Token id",
            bg: "#8e55ea20",
            titleclass: "bg-n-4",
            content: <h2 onClick={() => handleMintNftByWalletClick()} className="text-dp1/90 hover:text-dp1 cursor-pointer">{dao.token ?? "Unauthorized "}</h2>,
            colsize: 1,
        },
        // {
        //     title: "Contract",
        //     bg: "#80866520",
        //     titleclass: "bg-[#808665]",
        //     content: <h2 className="break-all"> {config.nftContractAddress}</h2>,
        //     colsize: 2,
        // },
    ];
    return (
        <PageLayout title="Dashboard" showSidebar>
            <main className="grid gap-4">
                <div>
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Organization</h2>
                    </div>
                    <div className="grid gap-4">
                        {!dao.token && (
                            <div
                                className="bg-red-100 text-red-800 text-black/60 rounded-lg py-3 px-3  items-center flex gap-2"
                            >
                                <span className="h-5">
                                <i className="fi fi-rr-triangle-warning"></i>
                                </span>
                                This organization is not authorized yet.
                            </div>
                        )}

                        <div className="grid gap-4  xl:grid-cols-1">
                            <aside className="grid grid-cols-2 self-start gap-4">
                                {asideCards.map((card, index) => (
                                    <main
                                        className={cn(
                                            "col-span-2 rounded-lg p-4",
                                            "lg:col-span-" + card.colsize
                                        )}
                                        key={index}
                                        style={{ background: card.bg }}
                                    >
                                        <header>
                                            <div className="flex items-center gap-3">
                                                <div className={`${card.titleclass} rounded-[6px] h-8 w-5`}></div>
                                                <div className="font-semibold">
                                                    {card.title}
                                                </div>
                                            </div>

                                        </header>
                                        <section className="pt-6">
                                            {card.content}
                                        </section>
                                    </main>
                                ))}
                            </aside>

                            <div>
                                <h2 className="text-lg font-semibold mb-3 mt-6">Information</h2>
                            </div>
                            <div className={"flex shadow  rounded-lg  flex-col"}>
                                <div className="flex gap-2 p-4">
                                    <div className="  h-max w-max p-2 px-4 pb-4  shadow-sm  bg-n-1/10  rounded-lg  z-10 ">
                                        <div className="rounded px-2 mx-auto  flex  mt-2 bg-white py-2 w-max items-center justify-center">
                                            <QRCode
                                                fgColor="#0084ff"
                                                bgColor="#e4f1fe"
                                                value={`${window.location.origin}/dao/show/${dao.id}`}
                                                size={80}
                                            ></QRCode>
                                        </div>
                                        <div className=" text-center justify-center  mt-1 items-center flex">
                                            <div>
                                                <div className="font-semibold text-n-1  text-lg">
                                                    {dao.name}
                                                </div>
                                                <div className="text-center text-sm text-n-1/80 font-light rounded ">
                                                    {dao.symbol}
                                                </div>
                                            </div>
                                        </div>
                                        {dao.token && (
                                            <a
                                                href={`${config.blockchainExplorer}${dao.token}`}
                                                target="_blank"
                                                className="bg-dp2/80 hover:bg-dp2 flex items-center gap-1 font-medium text-dp2-base ml-auto h-max rounded-lg py-1 px-2"
                                            >
                                                Authorized
                                                <i className="fi pt-1 fi-br-badge-check"></i>
                                            </a>
                                        )}
                                    </div>
                                    <article className="px-4 ">{dao.describe}</article>
                                </div>
                                <footer className="p-4 block mt-auto w-full ">
                                    <label className="border-t pt-4 border-black/10   block semibold ">
                                        Shareholders
                                    </label>
                                    <div className="mt-4 grid  gap-2 grid-cols-3 sm:grid-cols-5 md:grid-cols-4 2xl:grid-cols-5">
                                        {dao.members.map((member, index) => (
                                            <div
                                                className="flex flex-col shadow rounded-sm items-center py-3 px-[7px] justify-center w-max"
                                                key={index}
                                            >
                                                <QRCode
                                                    fgColor="#232627"
                                                    bgColor="#ffff"
                                                    style={{
                                                        padding: "2px",
                                                        background: "white",
                                                        borderRadius: "1px",
                                                    }}
                                                    renderAs="svg"
                                                    value={member.email}
                                                    size={70}
                                                />
                                                <div className=" text-center w-20 break-words leading-none pt-2 text-xs">
                                                    {member.full_name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </footer>
                            </div>
                            <div className="TAILWINDCSS_FIX hidden lg:col-span-1"></div>
                        </div>
                    </div>
                </div>
    
            </main>
        </PageLayout>
    );
};

export default DaoShow;
