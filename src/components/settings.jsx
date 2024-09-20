import React from 'react'
import Setting from '../images/icons/setting.svg'
import helpimg from '../images/icons/help_profile.svg'
import Mybutton from './Reuse components/mybutton'
export default function Help() {
    return (
        <div className='p-0 md:p-4'>
            <div className='  border rounded-xl'>
                <div className='p-4'>
                    <div className='flex items-center justify-center flex-wrap md:justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src={Setting} alt="pic" />
                            <p className='text-[28px]'>Settings</p>
                        </div>
                        <div>
                            <div className='relative'>
                                <input
                                    id="password"
                                    name="password"
                                    className='h-[44px] border w-full pl-8 mt-2 rounded-lg '
                                    type="text"
                                    placeholder='Search'
                                    required
                                />
                                <div className='absolute top-4 left-2'>
                                    <button

                                        type="button"
                                        aria-label="Toggle password visibility"
                                    >
                                        <i className="fa fa-magnifying-glass text-[#71717A]"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-4'>
                        <p className='font-medium text-center md:text-left'>Profile Settings</p>
                    </div>
                    <div className='flex flex-wrap justify-center md:justify-between items-center gap-3'>
                        <div className='flex flex-wrap items-center gap-4'>
                            <div className='justify-center  mx-auto'>
                                <img className='mx-auto' src={helpimg} alt="" />
                            </div>
                            <div className='text-center flex flex-col justify-center md:justify-start'>
                                <p className='text-[20px] font-medium'>John Doe <span className='bg-[#ECFDF3] text-[#027A48] text-[14px] px-3 rounded-full'>Active</span></p>
                                <div className='flex items-center flex-wrap justify-center mx-auto gap-3'><p className='font-medium py-1 text-[#344054]'>Teacher</p><p><span className='font-medium text-[#344054]'>Joined Date :</span>17/05/24</p></div>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <Mybutton text="Change Password" />
                            <Mybutton text="Edit Profile" />

                        </div>
                    </div>
                    <p className='text-center md:text-left font-medium text-[22px] pt-5'>Details</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
                        <div className='pt-4'>
                            <p className='text-[14px] text-[#667085]'>Email</p>
                            <p className='text-[16px] text-[#344054] pt-4'>johndoe@mail.com</p>
                        </div>
                        <div>
                            <p className='text-[14px] text-[#667085]'>Institute</p>
                            <p className='text-[16px] text-[#344054] pt-4'>School Name</p>
                        </div>
                        <div>
                            <p className='text-[14px] text-[#667085]'>Time Zone</p>
                            <p className='text-[16px] text-[#344054] pt-4'>Central Standard  Time US</p>
                        </div>
                    </div>

                    <p className='text-center md:text-left font-medium text-[18px] pt-5'>Enrolled Courses</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
                        <div className='pt-4'>
                            <p className='text-[14px] text-[#667085]'>Course1</p>
                            <p className='text-[16px] text-[#344054] pt-4'>Course Title</p>
                        </div>
                        <div>
                            <p className='text-[14px] text-[#667085]'>Course2</p>
                            <p className='text-[16px] text-[#344054] pt-4'>Course Title</p>
                        </div>
                        <div>
                            <p className='text-[14px] text-[#667085]'>Course3</p>
                            <p className='text-[16px] text-[#344054] pt-4'>Course Title</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[18px] font-medium text-center md:text-left pt-5'>Privacy & Security</p>
                    </div>
                    <div className='flex items-center flex-wrap gap-4'>
                        <p className='text-[14px] text-[#344054] font-medium py-2'>Allow Two Step Verification</p>

                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="relative w-11 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox"/>
                        <p className='text-[14px] text-[#344054] font-medium'>Text Message</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox"/>
                        <p className='text-[14px] text-[#344054] font-medium'>Email</p>
                    </div>
                    <div>
                        <p className='text-[18px] font-medium text-center md:text-left pt-5'>Notification Settings</p>
                    </div>
                    <div className='container'>
                        <div className='flex flex-wrap  gap-10'>
                            <div className='space-y-2 md:text-left'>
                                <h2 className='text-[#344054] font-medium text-[14px] pt-4'>Email Notification</h2>
                                <p className=''><input type="checkbox" />   Assignment Submission</p>
                                <p><input type="checkbox" />   Late Submissions</p>
                                <p><input type="checkbox" />   Overdue Assignments</p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-[#344054] font-medium text-[14px] pt-4'>Phone Notification</h2>
                                <p><input type="checkbox" />  Assignment Submission</p>
                                <p><input type="checkbox" />  Late Submissions</p>
                                <p><input type="checkbox" />  Overdue Assignments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
