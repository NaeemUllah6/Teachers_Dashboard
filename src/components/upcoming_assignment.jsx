import React from 'react'
import { Link } from 'react-router-dom'
import Assignment from '../images/icons/assignment.svg';
export default function upcoming_assignment() {
  return (
    <div>
                  <div className='flex  items-center '>
              <div className='border rounded-lg p-4'>
                <div className='flex flex-wrap gap-3 justify-between '>
                  <div>
                    <h2 className='text-[20px] font-medium'>Upcoming Assignments</h2>
                  </div>
                  <div>
                    <Link to=""><h4 className='text[16px font-medium text-[#475467]'>See Courses <i className='fa fa-arrow-right'></i></h4></Link>
                  </div>
                </div>

                <div className='p-4'>
                  <div className='gap-4 md:text-left text-center flex-wrap flex justify-between items-center p-3'>
                    <div className='flex flex-wrap items-center gap-2'>
                      <div className='mx-auto'><img className='border rounded-full p-1' src={Assignment} alt="" /></div>
                      <div>
                        <p className='text-[16px] font-medium'>Neurological Assessment</p>
                        <p className='text[14px]'>10/03/2023</p>
                      </div>
                    </div>
                    <div className='mx-auto'><h2 className='px-5 py-1 bg-[#EEF4FF] text-[#3538CD] rounded-full'>Due</h2></div>
                    <div className='mx-auto'><h3 className='text[16px] text-[#475467]'>3 Not Submited</h3></div>
                  </div>
                </div>
                <hr />

                <div className='p-4'>
                  <div className='gap-4 md:text-left text-center flex-wrap flex justify-between items-center p-3'>
                    <div className='flex flex-wrap items-center gap-2'>
                      <div className='mx-auto'><img className='border rounded-full p-1' src={Assignment} alt="" /></div>
                      <div>
                        <p className='text-[16px] font-medium'>Neurological Assessment</p>
                        <p className='text[14px]'>10/03/2023</p>
                      </div>
                    </div>
                    <div className='mx-auto'><h2 className='px-5 py-1 bg-[#EEF4FF] text-[#3538CD] rounded-full'>Due</h2></div>
                    <div className='mx-auto'><h3 className='text[16px] text-[#475467]'>3 Not Submited</h3></div>
                  </div>
                </div>
                <hr />

                <div className='p-4'>
                  <div className='gap-4 text-center md:text-left lg:text-left flex-wrap flex justify-between items-center p-3'>
                    <div className='flex flex-wrap items-center gap-2'>
                      <div className='mx-auto'><img className='border rounded-full p-1' src={Assignment} alt="" /></div>
                      <div>
                        <p className='text-[16px] font-medium'>Neurological Assessment</p>
                        <p className='text[14px]'>10/03/2023</p>
                      </div>
                    </div>
                    <div className='mx-auto'><h2 className='px-5 py-1 bg-[#FFFAEB] text-[#B54708] rounded-full'>Upcoming</h2></div>
                    <div className='mx-auto'><h3 className='text[16px] text-[#475467]'>3 Not Submited</h3></div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}
