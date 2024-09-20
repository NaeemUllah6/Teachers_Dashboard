import React, { useState } from 'react';
import Viewcourse from '../components/course components/view_course';
import CustomButton from './Reuse components/mybutton'
import Mybutton from './Reuse components/mybutton'
import Module from './course components/module'
import Vrlibrary from './course components/vrlibrary';
import Atlantapaper from './course components/atlanta_paper';
import Accordion from './Reuse components/accordion';
import Materialvideo from './course components/material_videos'
import Bar from '../images/icons/dotsicon.svg'
import Assignments from './course components/assignments';
import People from './course components/people'
import Grades from './course components/grades'
import Footer from './Reuse components/course_footer'
export default function Coursetabs() {
    const [activeTab, setActiveTab] = useState('profile');
    const videocard = [
        {
            key: 1,
            title: 'Video Title',
            image: Bar,
            video: '../images/1113f6c9b641b05eacb1d7e596f20553_7887992.mp4',
            alt: 'Video Title',
            paragraph: 'John Doe',
        },
        {
            key: 1,
            title: 'Video Title',
            image: Bar,
            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            alt: 'Video Title',
            paragraph: 'John Doe',
        },
        {
            key: 1,
            title: 'Video Title',
            image: Bar,
            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            alt: 'Video Title',
            paragraph: 'John Doe',
        }
    ]


    return (
        <div className='p-4 bg-white'>
            <div className='border rounded-[12px] py-4'>
                <div className='bg-white'>
                    <div className="mb-4 ">
                        <div className='flex items-center justify-between mb-6 flex-wrap gap-y-2 px-4'>
                            <div className=''>
                                <h2 className='text-base font-semibold calibri text-[#344054] text-[16px] md:text-[24px]'>Course Title Here</h2>
                            </div>
                            <div className='flex gap-3'>
                                <CustomButton text="View As Student" className="" />
                                <CustomButton text="Unpublish This Course" className="" />
                            </div>
                        </div>
                        <div className='px-4'>
                            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 -mb-px lg:rounded-full py-2 border text-sm font-medium text-center px-2  gap-y-3 md:gap-5 lg:gap-9 " id="default-tab" role="tablist">
                                <li className="me-2" role="presentation">
                                    <button
                                        className={`inline-block px-2 py-1 md:px-5 md:py-2 rounded-full  ${activeTab === 'profile' ? 'bg-[#0348B7] text-white' : 'hover:text-gray-600 hover:border-gray-300 bg-[#F9FAFB]'}`}
                                        id="profile-tab"
                                        type="button"
                                        role="tab"
                                        onClick={() => setActiveTab('profile')}
                                        aria-controls="profile"
                                        aria-selected={activeTab === 'profile'}
                                    >
                                        Overview
                                    </button>
                                </li>
                                <li className="me-2" role="presentation">
                                    <button
                                        className={`inline-block px-2 py-1 md:px-5 md:py-2 rounded-full ${activeTab === 'dashboard' ? 'bg-[#0348B7] text-white' : 'hover:text-gray-600 hover:border-gray-300 bg-[#F9FAFB]'}`}
                                        id="dashboard-tab"
                                        type="button"
                                        role="tab"
                                        onClick={() => setActiveTab('dashboard')}
                                        aria-controls="dashboard"
                                        aria-selected={activeTab === 'dashboard'}
                                    >
                                        Modules
                                    </button>
                                </li>
                                <li className="me-2" role="presentation">
                                    <button
                                        className={`inline-block px-2 py-1 md:px-5 md:py-2 rounded-full ${activeTab === 'settings' ? 'bg-[#0348B7] text-white' : 'hover:text-gray-600 hover:border-gray-300 bg-[#F9FAFB]'}`}
                                        id="settings-tab"
                                        type="button"
                                        role="tab"
                                        onClick={() => setActiveTab('settings')}
                                        aria-controls="settings"
                                        aria-selected={activeTab === 'settings'}
                                    >
                                        Library
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button
                                        className={`inline-block px-2 py-1 md:px-5 md:py-2 rounded-full ${activeTab === 'material' ? 'bg-[#0348B7] text-white' : 'hover:text-gray-600 hover:border-gray-300 bg-[#F9FAFB]'}`}
                                        id="contacts-tab"
                                        type="button"
                                        role="tab"
                                        onClick={() => setActiveTab('material')}
                                        aria-controls="contacts"
                                        aria-selected={activeTab === 'material'}
                                    >
                                        Materials
                                    </button>
                                </li>

                                <li role="presentation">
                                    <button
                                        className={`inline-block px-2 py-1 md:px-5 md:py-2 rounded-full ${activeTab === 'assignment' ? 'bg-[#0348B7] text-white' : 'hover:text-gray-600 hover:border-gray-300  bg-[#F9FAFB]'}`}
                                        id="contacts-tab"
                                        type="button"
                                        role="tab"
                                        onClick={() => setActiveTab('assignment')}
                                        aria-controls="contacts"
                                        aria-selected={activeTab === 'assignment'}
                                    >
                                        Assignment
                                    </button>
                                </li>

                                <li role="presentation">
                                    <button
                                        className={`inline-block px-2 py-1 md:px-5 md:py-2 rounded-full ${activeTab === 'people' ? 'bg-[#0348B7] text-white' : 'hover:text-gray-600 hover:border-gray-300  bg-[#F9FAFB]'}`}
                                        id="contacts-tab"
                                        type="button"
                                        role="tab"
                                        onClick={() => setActiveTab('people')}
                                        aria-controls="contacts"
                                        aria-selected={activeTab === 'people'}
                                    >
                                        People
                                    </button>
                                </li>

                                <li role="presentation">
                                    <button
                                        className={`inline-block px-2 py-1 md:px-5 md:py-2 rounded-full ${activeTab === 'grade' ? 'bg-[#0348B7] text-white' : 'hover:text-gray-600 hover:border-gray-300  bg-[#F9FAFB]'}`}
                                        id="grade-tab"
                                        type="button"
                                        role="tab"
                                        onClick={() => setActiveTab('grade')}
                                        aria-controls="contacts"
                                        aria-selected={activeTab === 'grade'}
                                    >
                                        Grade
                                    </button>
                                </li>


                            </ul>
                        </div>
                    </div>

                    <div id="default-tab-content">
                        {activeTab === 'profile' && (
                            <div className="p-4  py-4 rounded-lg " id="profile" role="tabpanel">
                                <div className=''>
                                    <Viewcourse />
                                </div>
                                <Footer
                                    id="dashboard-tab"
                                    clickHandler={() => setActiveTab('dashboard')}
                                    ariaControls="dashboard"
                                    ariaSelected={activeTab === 'dashboard'}
                                />
                            </div>
                        )}
                        {activeTab === 'dashboard' && (
                            <div className="p-4 rounded-lg " id="dashboard" role="tabpanel">
                                <Module />
                                <Footer
                                    id="dashboard-tab"
                                    clickHandler={() => setActiveTab('settings')}
                                    ariaControls="settings"
                                    ariaSelected={activeTab === 'settings'}
                                />
                            </div>
                        )}
                        {activeTab === 'settings' && (
                            <div className="p-4 rounded-lg " id="settings" role="tabpanel">
                                <Vrlibrary />

                                <Footer
                                    id="dashboard-tab"
                                    clickHandler={() => setActiveTab('material')}
                                    ariaControls="material"
                                    ariaSelected={activeTab === 'material'}
                                />
                            </div>
                        )}
                        {activeTab === 'material' && (
                            <div className="p-4 rounded-lg " id="contacts" role="tabpanel">
                                <div className='flex flex-wrap justify-between items-center py-5'>
                                    <h2 className='text-[28px] font-medium'>Material</h2>
                                    <div className='flex gap-3'>
                                        <Mybutton text="Collapse All" />
                                        <Mybutton className="bg-[#0348B7] text-white" text="+ Upload Material" />
                                    </div>
                                </div>
                                <Accordion title='Power Points' className='border-t-2 border-b-2 rounded-0 overflow-auto'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-5 '>
                                        <Atlantapaper />
                                        <Atlantapaper />
                                        <Atlantapaper />
                                    </div>
                                </Accordion>
                                <Accordion title='PDFs' className='border-t-0 border-b-2' />
                                <Accordion title='Videos' className='border-t-0 border-b-2'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-5'>

                                        {videocard.map((video) => (
                                            < Materialvideo
                                                key={video.id}
                                                video={video.video}
                                                title={video.title}
                                                Bar={video.image}
                                                paragraph={video.paragraph}
                                            />
                                        ))}
                                    </div>
                                </Accordion>

                                <Footer
                                    id="dashboard-tab"
                                    clickHandler={() => setActiveTab('assignment')}
                                    ariaControls="assignment"
                                    ariaSelected={activeTab === 'assignment'}
                                />

                            </div>
                        )}
                        {activeTab === 'assignment' && (
                            <div className="p-4 rounded-lg " id="contacts" role="tabpanel">
                                <div className='flex flex-wrap justify-between items-center py-5'>
                                    <h2 className='text-[28px] font-medium'>Assignment</h2>
                                </div>
                                <Assignments />


                                <Footer
                                    id="dashboard-tab"
                                    clickHandler={() => setActiveTab('people')}
                                    ariaControls="people"
                                    ariaSelected={activeTab === 'people'}
                                />

                            </div>
                        )}
                        {activeTab === 'people' && (
                            <div className="p-4 rounded-lg " id="contacts" role="tabpanel">
                                <People user_heading="People" />
                                <Footer
                                    id="dashboard-tab"
                                    clickHandler={() => setActiveTab('grade')}
                                    ariaControls="grade"
                                    ariaSelected={activeTab === 'grade'}
                                />
                            </div>
                        )}
                        {activeTab === 'grade' && (
                            <div className="p-4 rounded-lg " id="contacts" role="tabpanel">
                                <Grades />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
}
