import React from 'react'
import { CustomTable } from '../Reuse components/table'
import { useState } from 'react';
import Mybutton from '../Reuse components/mybutton'
import { Link } from 'react-router-dom';
export default function Grades({ gradesimg,gradesheading }) {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
    };

    const columns = [
        { name: 'fullName', title: 'User' },
        { name: 'fullName2', title: 'Role' },
        { name: 'fullName3', title: 'Course' },
        { name: 'fullName4', title: 'Status' },
        { name: 'fullName5', title: 'Date Joined' },
        { name: 'fullName6', title: 'Action' },
    ]
    const rows = [
        {
            fullName: 'User Name',
            fullName2: 'Teacher',
            fullName3: 'Course Name',
            fullName4: 'Enrolled',
            fullName6: 'Completed',
            fullName5: '07/09/2024',
            bgColor: "#ECFDF3"
        },
        {
            fullName: 'User Name',
            fullName2: 'Student',
            fullName3: 'Course Name',
            fullName4: 'Enrolled',
            fullName6: 'Due',
            fullName5: '07/09/2024',
            bgColor: "#ECFDF3"
        },
        {
            fullName: 'User Name',
            fullName2: 'Student',
            fullName3: 'Course Name',
            fullName4: 'Active',
            fullName6: 'Completed',
            fullName5: '07/09/2024',
            bgColor: "#ECFDF3"

        },
        {
            fullName: 'User Name',
            fullName2: 'Admin',
            fullName3: 'Course Name',
            fullName4: 'Enrolled',
            fullName6: 'Due',
            fullName5: '07/09/2024',
            bgColor: "#ECFDF3"
        },
        {
            fullName: 'User Name',
            fullName2: 'Admin',
            fullName3: 'Course Name',
            fullName4: 'Expelled',
            fullName6: 'Due',
            fullName5: '07/09/2024',
            bgColor: "#ECFDF3"
        },
    ];
    return (
        <div className='md:p-4 overflow-x-hidden'>
            <div className='flex flex-wrap justify-between items-center pb-4 gap-2'>
                <div className='flex gap-2'>
                <img src={gradesimg} alt="" />
                <h2 className='text-[18px] md:text-[28px] font-medium text-[#475467]'>{gradesheading}</h2>
                </div>
                <div className='flex gap-3 flex-wrap'>
                    <div className='relative'>
                        <input className='border py-2  text-[10px] md:text-[16px]   ps-20 font-medium rounded-lg md:px-[30px] md:py-[10px]' type="text" placeholder='Search Users' />
                        <div className='absolute top-1 md:top-[10px] left-3'><i class="fa-solid fa-magnifying-glass text-[#D0D5DD]"></i></div>
                    </div>
                </div>
            </div>
            <CustomTable
                rows={rows}
                columns={columns}
                className='rounded-lg overflow-auto'
            />
            <div>

                <div className='h-[1px] bg-[#EAECF0] mt-8'></div>
                <div className='pt-5'>
                    <div className='flex justify-center md:justify-between gap-3 items-center  flex-wrap'>
                        <div>
                            <Mybutton text="Cancel" />
                        </div>
                        <div className='flex gap-3'>
                            <Mybutton text="Save As Draft" className="text-[#0348B7] border border-[#0348B7]" />
                            <button onClick={openModal} className="text-white bg-[#0348B7] px-5 rounded-lg md:font-medium text-[12px] md:text-[16px]">

                                Save Progress?
                            </button>
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <>
                        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
                        <div className="fixed inset-0 flex justify-center items-center text-center z-50 py-20">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                                <h2 className="text-xl font-semibold mb-4">Progress Saved</h2>
                                <p>Your course has been Published</p>
                                <Link to="/">
                                    <button onClick={closeModal} className="mt-4 py-2 px-5 bg-[#0348B7] text-white rounded">
                                        Go To Dashboard
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>

        </div>
    )
}
