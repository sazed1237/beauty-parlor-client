import React from 'react';
import useAuth from '../hooks/useAuth';
import { FaBarsStaggered } from 'react-icons/fa6';

const DashboardHead = () => {
    const { user } = useAuth()
    return (
        <div className='flex h-14 bg-white w-full px-8 items-center'>
            <div className='flex-1 text-[#F63E7B] font-semibold from-accent-content md:text-xl'>
                <h1>Dashboard</h1>
            </div>
            <div className='flex  items-center'>
                <h2 className='' >{user?.displayName}</h2>
                <label htmlFor="my-drawer-2" className=" text-lg cursor-pointer ml-2  drawer-button lg:hidden"> <FaBarsStaggered></FaBarsStaggered> </label>

            </div>

        </div>
    );
};

export default DashboardHead;