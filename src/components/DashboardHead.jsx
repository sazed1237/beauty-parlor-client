import React from 'react';
import useAuth from '../hooks/useAuth';

const DashboardHead = () => {
    const { user } = useAuth()
    return (
        <div className='flex h-14 bg-white w-full px-8 items-center'>
            <div className='flex-1 from-accent-content text-xl'>
                <h1>Book Now</h1>
            </div>
            <div >
                <h2>{user?.displayName}</h2>
            </div>

        </div>
    );
};

export default DashboardHead;