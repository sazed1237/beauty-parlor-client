import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/image/logo.jpg';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {

    const { user, logOut } = useAuth()
    const [isAdmin] = useAdmin()

    const menuItems = <>
        <li><Link to={'/'} >Home</Link></li>
        <li><Link to={'/services'} >Our Services</Link></li>
        <li><Link to={'/'} >Our Portfolio</Link></li>
        <li><Link to={'/'} >Our Team</Link></li>
        <li><Link to={'/contact'} >Contact Us</Link></li>
        <li><Link to={'/secret'} >Secret</Link></li>

        {user && !isAdmin && <li><Link to={'/dashboard/userHome'} >Dashboard</Link></li>}
        {user && isAdmin && <li><Link to={'/dashboard/adminHome'} >Dashboard</Link></li>}



    </>
    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <section>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className='bg-slate-80000' >
                        <img className='h-20' src={`${logo}`} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt={user?.displayName} src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <button onClick={handleLogOut} className='btn btn-ghost'>LogOut</button>
                                </ul>
                            </div>
                        </>
                            :
                            <>
                                <Link to={'/login'}> <button className="btn btn-sm bg-[#F63E7B] hover:bg-[#ef729c] px-10 text-white">Login</button></Link>
                            </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Navbar;