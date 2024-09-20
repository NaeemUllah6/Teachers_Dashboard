import React from 'react'
import Bar from '../../images/icons/dotsicon.svg'
export default function Atlanta_paper({className}) {
    return (
        <div className={`${className && className}`}>
            <div className='p-6 rounded-2xl bg-[#F9FAFB] border-2 border-[#EAECF0]'>
                <div className='py-3 px-6 bg-white border-2 rounded-lg border-[#EAECF0]'>
                    <h2 className='font-bold text-[20px] md:text-[30px]'>Atlanta Paper</h2>
                    <div className='pt-5 flex flex-col gap-y-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-medium'>Your Name</label>
                                <input type="text" className='py-2 px-2 border-2 border-[#E7E7E7] rounded-md mt-2' placeholder='' />
                            </div>
                            <div className='flex-col flex'>
                                <label htmlFor="" className='font-medium'>Email</label>
                                <input type="text" className='py-2 px-2 border-2 border-[#E7E7E7] rounded-md mt-2' placeholder='' />
                            </div>

                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-medium'>Nearest Service Center</label>
                            <select className='py-2 px-2 border-2 border-[#E7E7E7] rounded-md mt-2' name="" id="" >
                                <option value=""> (Select) </option>
                                <option value=""> Lahore </option>
                                <option value=""> Multan </option>
                                <option value=""> Peshawar </option>
                                <option value=""> Africa </option>
                                <option value=""> Newzealand </option>
                                <option value=""> Australia </option>
                                <option value=""> England </option>
                                <option value=""> Karachi </option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="" className='font-medium'>Issue Type</label>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                                <div className='flex flex-col'>
                                    <input type="text" className='py-2 px-2 border-2 border-[#E7E7E7] active:ring-0 rounded-md mt-2' placeholder='Sales' />
                                </div>
                                <div className='flex-col flex'>

                                    <input type="text" className='py-2 px-2 border-2 border-[#E7E7E7] rounded-md mt-2' placeholder='Billing' />
                                </div>
                                <div className='flex flex-col'>

                                    <input type="text" className='py-2 px-2 border-2 border-[#E7E7E7] rounded-md mt-2' placeholder='Technical' />
                                </div>
                                <div className='flex flex-col'>

                                    <input type="text" className='py-2 px-2 border-2 border-[#E7E7E7] rounded-md mt-2' placeholder='Other' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-3'>
                        <h2 className='text-[18px] font-bold text-[#344054]'>Template Title</h2>
                        <div className='flex justify-between items-center py-3'>
                        <p>By John Doe</p>
                        <img src={Bar} alt="asd" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
