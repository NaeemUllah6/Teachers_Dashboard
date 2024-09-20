import React, { useState } from 'react';
import Course from '../images/icons/courses.svg';
import { Link } from 'react-router-dom'
import Mybutton from './Reuse components/mybutton'
import Cards from './Reuse components/cards'
import cardimg from '../images/icons/librarycard.svg'
import dots from '../images/Icon.svg'

export default function LibraryComponent() {
    const Coursess = [
        {
            id: 1,
            Image: cardimg,
            title: 'Course Title',
            text: 'By Corseta Nursing',
            icon: dots
        },
        {
            Image: cardimg,
            id: 2,
            title: 'Course Title',
            text: 'By Corseta Nursing',
            icon: dots
        },
        {
            Image: cardimg,
            id: 3,
            title: 'Course Title',
            text: 'By Corseta Nursing',
            icon: dots

           
            
        },
    ]
    const Coursess1 = [
        {
            id: 1,
            Image: cardimg,
            title: 'Course Title',
            text: 'By Corseta Nursing',
            publish: 'Publish This Course',
            student: '20 students',
           
        },
        {
            Image: cardimg,
            id: 2,
            title: 'Course Title',
            text: 'By Corseta Nursing',
            publish: 'Publish This Course',
            student: '20 students',
           
        },
        {
            Image: cardimg,
            id: 3,
            title: 'Course Title',
            text: 'By Corseta Nursing',
            publish: 'Publish This Course',
            student: '20 students',
           

           
            
        },
    ]

    const [isOpen, setIsOpen] = useState({ accordion1: false, accordion2: false });

    const toggleAccordion = (accordion) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [accordion]: !prevState[accordion],
        }));
    };
    // const [Bar, setBar] = useState(null)
    // const toggleMenu = (id) => {
    //     setBar(prevId => (prevId === id ? null : id));
    // }

    return (
        <div className='md:p-4 w-full'>
            <div className='border rounded p-4'>

                <div className='flex items-center flex-wrap gap-3 justify-between mb-6'>
                    <div className='flex items-center gap-3'>
                        <img className='w-[24px] h-[24px]' src={Course} alt="img" />
                        <h2 className='font-semibold calibri text-[#344054] text-[24px]'>Courses</h2>
                    </div>
                    <div>
                        <Mybutton className="bg-[#0348B7] text-white  rounded-lg text-[12px] md:text-[16px]" text="Add New Collection" />
                    </div>
                </div>



                <div id="accordion-collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button
                            type="button"
                            className='flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-l-0 border-r-0   gap-3'
                            onClick={() => toggleAccordion('accordion1')}
                            aria-expanded={isOpen.accordion1}
                            aria-controls="accordion-collapse-body-1"
                        >
                            <span className='flex items-center gap-3'>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transform ${isOpen.accordion1 ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                                <h2 className='font-medium text-[18px] md:text-[24px] text-[#344054]'>My Resource Library</h2>
                            </span>
                            <Link to="/library"><p className='text-[#0348B7]'>view all</p></Link>
                        </button>

                    </h2>
                    <div
                        id="accordion-collapse-body-1"
                        className={`${isOpen.accordion1 ? 'block' : 'hidden'}`}
                        aria-labelledby="accordion-collapse-heading-1"
                    >
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5'>
                            {Coursess.map((items) => (
                                <Cards
                                    key={items.id}
                                    Image={items.Image}
                                    title={items.title}
                                    text={items.text}
                                    icon={items.icon}
                                    isimgVisibile={true}
                                   
                                />
                            ))}
                            
                        </div>
                    </div>


                    <h2 id="accordion-collapse-heading-2">
                        <button
                            type="button"
                            className='flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-l-0 border-r-0   gap-3'
                            onClick={() => toggleAccordion('accordion2')}
                            aria-expanded={isOpen.accordion2}
                            aria-controls="accordion-collapse-body-2"
                        >
                            <span className='flex items-center gap-3'>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 text-[#344054] h-3 transform ${isOpen.accordion2 ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                                <h2 className='font-normal text-[18px] md:text-[24px] text-[#344054]'>Published Courses</h2>
                            </span>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-2"
                        className={`${isOpen.accordion2 ? 'block' : 'hidden'}`}
                        aria-labelledby="accordion-collapse-heading-2"
                    >
                        <div className='p-5 '>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {Coursess1.map((items) => (
                                    <Cards
                                        key={items.id}
                                        Image={items.Image}
                                        title={items.title}
                                        text={items.text}
                                        publish={items.publish}
                                        student={items.student}
                                        isBtnVisibile={true}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* {Bar && <Popup />} */}
            </div>


                                    





        </div>
    );
}
