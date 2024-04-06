import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaInbox, FaList, FaListAlt, FaMailBulk, FaPlus, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/image/logo.jpg';
import DashboardHead from '../components/DashboardHead';
import useAdmin from '../hooks/useAdmin';


// const isAdmin = true;

const Dashboard = () => {
    const [isAdmin] = useAdmin()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex">
                {/* Page content here */}
                {/* Dashboard content */}
                <div className='flex-1 bg-slate-200 '>
                    <DashboardHead></DashboardHead>
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet></Outlet>
                </div>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className='flex'>
                    {/* Dashboard side bar */}
                    <div className='w-64 min-h-screen bg-base-100'>
                        <div className='text-center pt-3 md:pb-8 font-bold'>
                            <img className='md:w-10/12 w-7/12  mx-auto' src={logo} alt="" />
                        </div>
                        <ul className='menu uppercase'>
                            {
                                isAdmin ? <>
                                    <li><NavLink to={'/dashboard/adminHome'}>
                                        <FaHome></FaHome>
                                        Admin Home
                                    </NavLink></li>

                                    <li><NavLink to={'/dashboard/service'}>
                                        <FaPlus></FaPlus>
                                        add service
                                    </NavLink></li>

                                    <li><NavLink to={'/dashboard/manageBookings'}>
                                        <FaBook></FaBook>
                                        Manage Bookings
                                    </NavLink></li>

                                    <li><NavLink to={'/dashboard/users'}>
                                        <FaUsers></FaUsers>
                                        All Users
                                    </NavLink></li>


                                </>
                                    :
                                    <>
                                        <li><NavLink to={'/dashboard/userHome'}>
                                            <FaHome></FaHome>
                                            User Home
                                        </NavLink></li>

                                        {/* <li><NavLink to={'/dashboard/bookingAppointment'} >
                        <FaWallet></FaWallet>
                        book
                    </NavLink></li> */}

                                        <li><NavLink to={'/dashboard/myBookings'}>
                                            <FaList></FaList>
                                            my bookings
                                        </NavLink></li>

                                        <li><NavLink to={'/dashboard/addReview'}>
                                            <FaAd></FaAd>
                                            ADD Review
                                        </NavLink></li>

                                    </>
                            }

                            {/* divider Dashboard content and Main content */}

                            <div className="divider "></div>

                            <li><NavLink to={'/'}>
                                <FaHome></FaHome>
                                Home
                            </NavLink></li>

                            <li><NavLink to={'/services'}>
                                <FaShoppingBag></FaShoppingBag>
                                Services
                            </NavLink></li>

                            <li><NavLink to={'/contact'}>
                                <FaEnvelope></FaEnvelope>
                                Contact
                            </NavLink></li>


                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;



