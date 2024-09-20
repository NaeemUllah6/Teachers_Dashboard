import React from 'react'
import { CustomTable } from '../Reuse components/table'
import Mybutton from '../Reuse components/mybutton'
import user from '../../images/icons/users.svg'
export default function People({ user_heading }) {
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
        <div className='md:p-4'>
            <div className='flex flex-wrap justify-between items-center pb-4 gap-y-2'>
                <div className='flex gap-2'>
                    <img src={user} alt="" />
                <h2 className='text-[18px] md:text-[28px] font-medium text-[#475467]'>{user_heading}</h2>
                </div>
                <div className='flex gap-3 flex-wrap'>
                    <div className='relative'>
                        <input className='border  text-[10px] md:text-[16px] py-2  ps-20 font-medium rounded-lg md:px-[30px] md:py-[10px]' type="text" placeholder='Search Users' />
                        <div className='absolute top-1 md:top-[10px] left-3'><i class="fa-solid fa-magnifying-glass text-[#D0D5DD]"></i></div>
                    </div>
                    <Mybutton className="py-2" text="Invite User" />
                    <Mybutton className="bg-[#0348B7] py-2 text-white" text="Bulk Invite" />
                </div>
            </div>
            <div className='p-4 bg-[#FCFCFD] rounded-xl border border-[#EAECF0]'>
                <div className='py-3 justify-between items-center flex'>
                    <p className='font-medium text-[#344054]'>Users</p>
                    <p className='font-medium text-[#475467]'>View All <i className='fa fa-arrow-right'></i></p>
                </div>
                <CustomTable
                    className="bg-white rounded text-center"
                    columns={columns}
                    rows={rows}
                    showImage={true}
                    Selectable={true}
                />
            </div>
        </div>
    )
}
