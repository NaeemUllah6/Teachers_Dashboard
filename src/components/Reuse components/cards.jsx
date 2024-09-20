import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Cards({ Image, student, text, publish, title, icon, Open, isBtnVisibile, isimgVisibile }) {
    const [list, setList] = useState(false)
    const listshow = () => {
        setList(prevState => !prevState)
    }

    return (
        <div>

            <div className='card border p-4 rounded-lg  bg-[#EAECF0] relative'>
                <div>
                    <img src={Image} alt="" />
                </div>
                <div className='flex pt-3 justify-between items-center '> <h3 className='text-[16px] font-medium font-sans text-[#344054] leading-[24px]'>{title}</h3>
                    <p>{student}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-[12px] leading-4 pt-2'>{text}</p>
                    </div>
                    <div>
                        {isimgVisibile && isimgVisibile ? (<button onClick={listshow}><img src={icon} alt="nothing" /></button>) : ''}
                    </div>
                </div>
                {isBtnVisibile && isBtnVisibile ? (
                    <button onClick={Open} className='px-5 py-2 border-[#D0D5DD] rounded-lg border mt-4 w-full'>{publish}</button>
                ) : ''}
                <div className={`absolute inset-0 bg-[#FFFFFF] border max-w-[300px] h-[42%] bottom-[80px] right-4 list z-50  shadow-2xl ${list ? 'block' : 'hidden'}`}>
                    <div>
                        <ul className={`rounded `}>
                            <Link to='/coursetabs'><li className='border p-3 border-l-amber-100 hover:bg-[#EAECF0]'>View Course</li></Link>
                            <Link to=''><li className='border p-3 border-l-amber-100 hover:bg-[#EAECF0]'>Add Course</li></Link>
                            <Link to=''><li className='border p-3 border-l-amber-100 hover:bg-[#EAECF0]'>Delete</li></Link>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}
