
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../images/icons/home.svg'
import Library from '../images/icons/library.svg'
import Courses from '../images/icons/courses.svg'
import Grades from '../images/icons/grades.svg'
import User from '../images/icons/users.svg'
import Logout from '../images/icons/log-out-01.svg'
import Bell from '../images/icons/bell.svg'
export default function Drawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
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
                                <Link to="../components/dashboard">
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
                                <Link to="/">
                                    <div className='flex gap-3'   >
                                        <img src={Grades} alt="" />
                                        <h2 className='text-base font-medium calibri text-[#475467]'>Grades</h2>
                                    </div>
                                </Link>
                            </li>

                            <li className=' px-3 py-2 rounded-xl'>
                                <Link to="/">
                                    <div className='flex gap-3'   >
                                        <img src={User} alt="" />
                                        <h2 className='text-base font-medium calibri text-[#475467]'>Users</h2>
                                    </div>
                                </Link>
                            </li>

                            <hr />

                            <li className=' px-3 py-2 rounded-xl'>
                                <Link to="/">
                                    <div className='flex gap-3'   >
                                        <img src={Bell} alt="" />
                                        <h2 className='text-base font-medium calibri text-[#475467]'>Norification</h2>
                                    </div>
                                </Link>
                            </li>

                            <li className=' px-3 py-2 rounded-xl'>
                                <Link to="/">
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
    </>
  )
}
