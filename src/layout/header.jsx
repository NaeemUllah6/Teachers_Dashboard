import React, { useState } from 'react';
import inputicon from '../images/icons/search.svg';
import logo from '../images/icons/Logo.svg';
import Bell from '../images/icons/bell.svg';
import Profile from '../images/icons/profile.svg';
import profiletoggle from '../images/icons/profiletoggle.png';
import { Link } from 'react-router-dom';
import Home from '../images/icons/home.svg'
import Library from '../images/icons/library.svg'
import Courses from '../images/icons/courses.svg'
import Grades from '../images/icons/grades.svg'
import User from '../images/icons/users.svg'
import Logout from '../images/icons/log-out-01.svg'
import help from '../images/icons/question_mark.svg'
import Settings from '../images/icons/setting.svg'

export default function Header() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    return (
        <div className=''>
            <nav className='border h-[55px] md:h-[60px] lg:h-[80px]'>
                <div className='container mx-auto px-4'>
                    <div className='flex items-center justify-between py-3'>
                        <div>
                            <img className='h-15 w-auto hidden lg:block' src={logo} alt="Logo" />

                            <div className="text-center">
                                <button
                                    className="block  lg:hidden"
                                    type="button"
                                    onClick={toggleDrawer}
                                >
                                    <i class="block me-3 h-4 lg:hidden fa-solid fa-bars"></i>
                                </button>
                            </div>

                        </div>

                        <div className='hidden lg:block'>
                            <Link to="/">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <img src={inputicon} alt="Input Icon" />
                                    </div>
                                    <input
                                        type="text"
                                        id="input-group-1"
                                        className="border border-gray-300 text-sm rounded-lg block pl-10 p-2 lg:w-[510px] w-full"
                                        placeholder="Type to Search"
                                    />
                                </div>
                            </Link>
                            <input className='hidden' type="text" />
                        </div>
                        <div className='relative flex items-center gap-3'>
                            <div className='flex items-center gap-5 text-black' placeholder="Type to Search">
                                <div className="relative block lg:hidden">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <img src={inputicon} alt="Input Icon" />
                                    </div>
                                    <input
                                        type="text"
                                        id="input-group-1"
                                        className="border border-gray-300 text-sm rounded-lg block pl-10 px-2 py-1 w-full"
                                        placeholder="Type to Search"
                                    />
                                </div>
                                <img src={Bell} alt="Bell Icon" className="h-6 w-6 hidden lg:block md:block" />
                            </div>
                            <div className='hidden lg:flex items-center gap-3'>
                                <img src={Profile} alt="Profile Icon" className="h-10 w-10" />
                                <div>
                                    <p className='text-[12px] font-medium'>Olivia Joe PHD</p>
                                    <p className='text-[10px]'>Nursing Instructor</p>
                                </div>
                                <i className='fa fa-chevron-down text-slate-500 text-[8px]'></i>
                            </div>
                            <div className='lg:hidden'>
                                <  img src={profiletoggle}
                                    alt="Dummy Profile Icon "
                                    className="text-[20px] w-8 cursor-pointer fa-regular fa-user text-red-700"
                                    onClick={toggleProfile}
                                />
                            </div>
                            <div className='block md:hidden lg:hidden'><i className='fa fa-chevron-down text-slate-500 text-[8px]'></i></div>
                        </div>
                    </div>
                </div>
                {isProfileOpen && (
                    <div className='lg:hidden absolute top-[80px] right-4 w-[200px] bg-white shadow-md rounded-lg p-4'>
                        <div className='flex flex-col items-center'>
                            <img src={Profile} alt="Profile" className="h-12 w-12 rounded-full mb-2" />
                            <p className='text-[12px] font-medium'>Olivia Joe PHD</p>
                            <p className='text-[10px] text-gray-500'>Nursing Instructor</p>
                        </div>
                    </div>
                )}
            </nav>



            <div
                className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} bg-white w-80 dark:bg-gray-800`}
                aria-labelledby="drawer-label"
            >

                <button
                    type="button"
                    onClick={toggleDrawer}
                    aria-controls="drawer-example"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <div className="container ">
                    <div className='w-[240px] p-6 ps-0 border border-s-0 border-b-0  h-[85vh] max-h-screen'>
                        <ul className='gap-y-6 flex flex-col'>
                            <li className='bg-[#0348B7] px-3 py-2 rounded-xl'>
                                <Link to="/dashboard">
                                    <div className='flex gap-3'   >
                                        <img src={Home} alt="" />
                                        <h2 className='text-base font-bold calibri text-white'>Dashboard</h2>
                                    </div>
                                </Link>
                            </li>
                            <li className=' px-3 py-2 rounded-xl active:bg-[#0348B7] '>
                                <Link to="/library">
                                    <div className='flex gap-3'   >
                                        <img src={Library} alt="" />
                                        <h2 className='text-base font-medium calibri text-[#475467]' >Library</h2>
                                    </div>
                                </Link>
                            </li>

                            <li className=' px-3 py-2 rounded-xl'>
                                <Link to="/courses">
                                    <div className='flex gap-3'   >
                                        <img src={Courses} alt="" />
                                        <h2 className='text-base font-medium calibri text-[#475467]'>Courses</h2>
                                    </div>
                                </Link>
                            </li>

                            <li className=' px-3 py-2 rounded-xl'>
                                <Link to="/grades">
                                    <div className='flex gap-3'   >
                                        <img src={Grades} alt="" />
                                        <h2 className='text-base font-medium calibri text-[#475467]'>Grades</h2>
                                    </div>
                                </Link>
                            </li>

                            <li className=' px-3 py-2 rounded-xl'>
                                <Link to="/people">
                                    <div className='flex gap-3'   >
                                        <img src={User} alt="" />
                                        <h2 className='text-base font-medium calibri text-[#475467]'>Users</h2>
                                    </div>
                                </Link>
                            </li>

                            <hr />

                            <li className=' px-3 py-2 rounded-xl'>
                                <Link to="/help">
                                    <div className='flex gap-3'   >
                                        <img src={help} alt="" />
                                        <h2 className='text-base font-medium calibri text-[#475467]'>Help Center</h2>
                                    </div>
                                </Link>
                            </li>
                            <li className=' px-3 py-2 rounded-xl'>
                                <Link to="/setting">
                                    <div className='flex gap-3'   >
                                        <img src={Settings} alt="" />
                                        <h2 className='text-base font-medium calibri text-[#475467]'>Settings</h2>
                                    </div>
                                </Link>
                            </li>
                            <li className=' px-3 py-2 rounded-xl'>
                                <Link to="/login">
                                    <div className='flex gap-3'   >
                                        <img src={Logout} alt="" />
                                        <h2 className='text-base font-medium calibri text-[#475467]'>Logout</h2>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
