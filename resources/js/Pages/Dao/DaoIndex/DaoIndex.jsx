import React from 'react';
import PageLayout from "@/Layout/PageLayout/PageLayout";
import moment from 'moment';
import { Link } from '@inertiajs/react';

const DaoCard = ({ dao }) => {
    return (
        <Link href={route('daos.show', { "dao_id": dao.id })}>
            <div className=" relative cursor-pointer min-h-[360px] rounded-lg overflow-hidden shadow-lg">
                <img className="w-full h-48 object-cover" src={`https://api.dicebear.com/7.x/initials/svg?seed=${dao.name}`} alt={dao.name} />
                <div className="border-n-1 absolute bottom-5 right-6 bg-n-1 text-white border rounded px-2">
                                {dao.symbol} 
                            </div>
                <div className="px-6 py-4">
                    <div className="flex items-center justify-between">

                        <div className="`flex` items-center gap-2">
                         
                            <div className="font-bold ">{dao.name} </div>
                        </div>
                        <div>
                            <div className="flex gap-1 items-center">
                                <div className='h-5'>
                                    <i className='fi fi-br-user'></i>
                                </div>
                                <div>{dao.members.length} Members</div>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-700 text-base mt-2 truncate">{dao.describe}</p>
                </div>
                <footer className="px-6 absolute w-full bottom-2  mt-auto pt-4 pb-2">
                    <p className="text-gray-600 flex items-center gap-2 "> <i className='fi block h-5 fi-br-clock'></i>
                        {moment(dao.created_at).format('MMMM Do YYYY')}</p>
                </footer>
            </div>
        </Link>
    )
}
const DaoIndex = ({ daos }) => {
    console.log(daos);
    return (
        <>
            <PageLayout title="Dashboard" showSidebar>
                <header className='mt-8'>
                    <div className="tabs tabs-bordered bg-transparent relative">
                        <a href='https://icdo.io/dao/create' className='rounded-lg py-2 px-3 flex items-center justify-center cursor-pointer bg-n-6 hover:bg-n-1 text-white btn-sm absolute top-0 right-0 ml-auto'>Generate</a>
                        <input type="radio" name="daos_tabs" className="tab" aria-label="Explore" defaultChecked />
                        <section className='tab-content pt-10'>
                            <div className="grid @lg/main:grid-cols-2  gap-4 grid-cols-1 ">
                                {daos.map((dao, index) => (
                                    <DaoCard key={index} dao={dao} />
                                ))}
                               
                            </div>
                        </section>
                        {/* <input type="radio" name="daos_tabs" className="tab" aria-label="Mine" />
                        <div className="tab-content p-10">Tab content 2</div> */}

                    </div>
                </header>


            </PageLayout>
        </>
    );
}

export default DaoIndex;
