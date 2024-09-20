import React from 'react'
import { Link } from 'react-router-dom'
import UpcomingAssignments from '../upcoming_assignment'
import Avatar from '..//../images/icons/dashboardavtar.svg'
import { CustomTable } from '../Reuse components/table'


export default function view_course() {
    const columns = [
        { name: 'fullName', title: 'Assignment Title Here' },
        { name: 'fullName2', title: 'Safety' },
        { name: 'fullName3', title: 'Accuracy' },
        { name: 'fullName4', title: 'Communication' },
        { name: 'fullName5', title: 'Average' },
    ];


    const rows = [
        {
            fullName: 'Assignment Title Here',
            fullName2: '80%',
            fullName3: '75%',
            fullName4: '45%',
            fullName5: '40%',
        },
        {
            fullName: 'Assignment Title Here',
            fullName2: '75%',
            fullName3: '80%',
            fullName4: '75%',
            fullName5: '70%',
        },
        {
            fullName: 'Assignment Title Here',
            fullName2: '35%',
            fullName3: '30%',
            fullName4: '80%',
            fullName5: '80%',
        },
    ];
    const card = [
        {
            id: Avatar,
            name: "Sarah Miller",
            course: "Assignment Name",

        },
        {
            id: Avatar,
            name: "Sarah Miller",
            course: "Assignment Name",

        },
        {
            id: Avatar,
            name: "Sarah Miller",
            course: "Assignment Name",

        },
        {
            id: Avatar,
            name: "Sarah Miller",
            course: "Assignment Name",

        },
    ]
    return (
        <div className='bg-white '>

            <div className='pb-8 bg-white'>
                <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-3'>
                        <h2 className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px]'>Course Overview</h2>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-[6%] flex-wrap'>
                    <div>
                        <p className='text-[14px] text-[#475467]'>Admin</p>
                        <p className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px] py-3'>John Doe</p>
                    </div>
                    <div className='border-l-0 pl-2'>
                        <p className='text-[14px] text-[#475467]'>Students</p>
                        <p className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px] py-3'>100</p>
                    </div>

                    <div className='border-l-0 pl-2'>
                        <p className='text-[14px] text-[#475467]'>Date Created</p>
                        <p className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px] py-3'>07/0/2024</p>
                    </div>
                    <div className='border-l-0 pl-2'>
                        <p className='text-[14px] text-[#475467]'>Assignments</p>
                        <p className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px] py-3'>04</p>
                    </div>

                    <div className='border-l-0 pl-2'>
                        <p className='text-[14px] text-[#475467]'>Grades</p>
                        <p className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px] py-3'>75</p>
                    </div>

                    <div className='border-l-0 pl-2'>
                        <p className='text-[14px] text-[#475467]'>Status</p>
                        <p className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px] py-3 '>Published</p>
                    </div>
                </div>
            </div>
            <div className='p-4 border rounded-[12px]'>
                <p className='sm:text-[14px] text-[16px] leading-5 pb-4'>Course Analytics</p>
                <div className='p-4 border rounded-[12px]'>
                    <p className='sm:text-[14px] text-[16px] pb-4'>Overall Analytics</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[6%] '>
                        <div>
                            <p className='text-[14px] text-[#475467]'>Admin</p>
                            <p className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px] py-3'>10</p>
                        </div>
                        <div className='border-l-2 pl-2'>
                            <p className='text-[14px] text-[#475467]'>Students</p>
                            <p className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px] py-3'>85%</p>
                        </div>
                        <div className='border-l-2 pl-2'>
                            <p className='text-[14px] text-[#475467]'>Date Created</p>
                            <p className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px] py-3'>95%</p>
                        </div>
                        <div className='border-l-2 pl-2'>
                            <p className='text-[14px] text-[#475467]'>Assignments</p>
                            <p className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px] py-3'>85%</p>
                        </div>
                        <div className='md:border-l-2 pl-2'>
                            <p className='text-[14px] text-[#475467]'>Grades</p>
                            <p className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px] py-3'>88%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center py-4'>
                <div> <p className='text-[16px] font-medium'>Individual Analytics</p></div>
                <div><Link className='font-medium' to="">View All <i className='fa fa-arrow-right'></i></Link></div>
            </div>
            <div className='border rounded-[10px]'>
                <CustomTable columns = {columns} rows = {rows} />
            </div>
            <div className='py-4'>
                <div className='flex justify-between flex-wrap gap-y-4'>
                    <div className=''>
                        <UpcomingAssignments />
                    </div>
                    <div className=''>
                        <div className='border rounded-lg p-4 '>
                            <div className='flex justify-between text-center md:text-left flex-wrap items-center'>
                                <div>
                                    <h2 className='text-[20px] font-medium'>Latest Submission</h2>
                                </div>
                                <div>
                                    <Link to=""><h4 className='text[16px font-medium text-[#475467]'>See Courses <i className='fa fa-arrow-right'></i></h4></Link>
                                </div>
                            </div>
                            <div className='px-4 py-2'>
                                {
                                    card.map((item) => (
                                        <div className='flex items-center text-center md:text-left justify-between flex-wrap gap-[10px] py-4 border-b-[1px]'>
                                            <div className='mx-auto'><img src={item.id} alt="" /></div>
                                            <div>
                                                <div className='flex items-center'>
                                                    <div>
                                                        <p className='text-[16px] text-center md:text-left font-medium'>{item.name}</p>
                                                        <p className='text-[12px] mx-auto'>{item.course}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='bg-[#ECFDF3] text-[#027A48] px-2 rounded-full'>Submitted</p>
                                            </div>
                                            <div>
                                                <i className='hidden md:block lg:block fa fa-chevron-right text-[#475467]'></i>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}
