import React, { useState } from 'react';
import Library from '../images/icons/library.svg';
import { Link } from 'react-router-dom'
import Mybutton from '../components/Reuse components/mybutton'
import cardimg from '../images/icons/librarycard.svg';

export default function LibraryComponent() {
  const [isOpen, setIsOpen] = useState({ accordion1: false, accordion2: false });

  const toggleAccordion = (accordion) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [accordion]: !prevState[accordion],
    }));
  };
  const [Bar, setBar] = useState(null)
  const toggleMenu = (id) => {
    setBar(prevId => (prevId === id ? null : id));
  }
  const coursess = [
    {
      id: 1,
      Image: cardimg,
      title: 'Template Title',
      text: 'By Corseta Nursing',

    },
    {
      Image: cardimg,
      id: 2,
      title: 'Template Title',
      text: 'By Corseta Nursing',
    },
    {
      Image: cardimg,
      id: 3,
      title: 'Template Title',
      text: 'By Corseta Nursing',
    },
  ]

  return (
    <div className='p-4 w-full'>
      <div className='border rounded p-4'>

        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-3'>
            <img className='w-[24px] h-[24px]' src={Library} alt="img" />
            <h2 className='text-[24px] font-semibold calibri text-[#344054]'>Library</h2>
          </div>
          <div>
            <Mybutton text="Add New Collection" className="bg-[#0348B7] text-white"/>
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
                <h2 className='font-medium text-[18px] md:text-[24px] text-[#344054]'>Made By Courseta</h2>
              </span>
              <Link to="/library"><p className='text-[#0348B7]'>view all</p></Link>
            </button>

          </h2>
          <div
            id="accordion-collapse-body-1"
            className={`${isOpen.accordion1 ? 'block' : 'hidden'}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className='p-5 '>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {coursess.map((course) => (

                  <div className='card border p-4 rounded-lg  bg-[#EAECF0]'>
                    <div>
                      <img src={course.Image} alt="" />
                    </div>
                    <div className='flex justify-between items-center pt-4'>
                      <div>
                        <h3 className='text-[16px] font-medium font-sans text-[#344054] leading-[24px]'>{course.title}</h3>
                        <p className='text-[12px] leading-4 pt-2'>{course.text}</p>
                      </div>
                      <div>
                        <button
                          onClick={() => toggleMenu(course.id)}
                        ><i class="fa-solid fa-ellipsis-vertical"></i></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                <h2 className='font-normal text-[] md:text-[24px] text-[#344054]'>My Template</h2>
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

                {
                  coursess.map((course) => (
                    <div className='relative card border p-4 rounded-lg  bg-[#EAECF0]'>
                      <div>
                        <img src={cardimg} alt="" />
                      </div>
                      <div className='flex justify-between items-center pt-4'>
                        <div>
                          <h3 className='text-[16px] font-medium font-sans text-[#344054] leading-[24px]'>{course.title}</h3>
                          <p className='text-[12px] leading-4 pt-2'>{course.text}</p>
                        </div>
                        <div>
                          <button
                            onClick={() => toggleMenu(course.id)}
                          ><i class="fa-solid fa-ellipsis-vertical"></i></button>
                        </div>
                        <div className={`border absolute  bg-white rounded-lg w-[200px]  bottom-12 right-0 ${Bar === course.id ? '' : "hidden"}`}>
                          <Link className='cursor-default' to='/dashboard'><p className='p-3 border-b-2 hover:bg-[#EAECF0]'>View Course</p></Link>
                          <Link className='cursor-default' to='/dashboard'><p className='p-3 border-b-2 hover:bg-[#EAECF0]'>Edit Course Thumbnail</p></Link>
                          <Link className='cursor-default' to='/dashboad'><p className='p-3 hover:bg-[#EAECF0]'>Delete Course</p></Link>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
