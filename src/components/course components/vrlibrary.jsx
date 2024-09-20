import React, { useState } from 'react';
import Mybutton from '../Reuse components/mybutton';
import Accordion from '../Reuse components/accordion';
import Cards from '../Reuse components/cards';
import dots from '../../images/icons/dotsicon.svg'
import cardimg from '../../images/icons/coursesresource.svg'
export default function Vrlibrary() {

  const Coursess = [
    {
      id: 1,
      Image: cardimg,
      title: 'Course Title',
      text: 'By Corseta Nursing',
      publish: 'Publish This Course',
      student: '20 students',
      icon: dots
    },
    {
      Image: cardimg,
      id: 2,
      title: 'Course Title',
      text: 'By Corseta Nursing',
      publish: 'Publish This Course',
      student: '20 students',
      icon: dots
    },
    {
      Image: cardimg,
      id: 3,
      title: 'Course Title',
      text: 'By Corseta Nursing',
      publish: 'Publish This Course',
      student: '20 students',
      icon: dots



    },
  ]

  const [yesopen, setIsopen] = useState(false);

  const toggleAccordion = () => {
    setIsopen(!yesopen);
  };

  return (
    <div>
      <div className="flex justify-between gap-3 gap-y-3 flex-wrap mb-4">
        <div>
          <h2 className="text-[24px] font-medium text-[#344054]">Course Module</h2>
        </div>
        <div className="flex gap-3 relative flex-wrap">
          <Mybutton text="Collapse All" />
          <Mybutton text="Add from Library" />
          <Mybutton text="Open Lab" />
          <Mybutton text="Create New Scenario" className="bg-[#0348B7] text-white" />
        </div>
      </div>


      <Accordion
        title="Made by Courseta"
        className={`border-s-0 border-e-0 border rounded-none ${yesopen ? 'border-b-0' : 'border-b'}`}
        onClick={toggleAccordion}
      >
        <div className="p-4">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Coursess.map((items) => (
              <Cards
                key={items.id}
                Image={items.Image}
                title={items.title}
                text={items.text}
                icon={items.icon}
              />
            ))}

          </div>
        </div>
      </Accordion>
      <Accordion
        title="Templates"
        className={`border-s-0 border-e-0 border rounded-none ${yesopen ? 'border-b-0' : 'border-b'}`}
        onClick={toggleAccordion}
      >
        <div className="p-4">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Coursess.map((items) => (
              <Cards
                key={items.id}
                Image={items.Image}
                title={items.title}
                text={items.text}
                icon={items.icon}
              />
            ))}

          </div>
        </div>
      </Accordion>

      <div className='py-5'>
        <Mybutton text="Add New Collection" className="bg-[#0348B7] text-white" />
      </div>
    </div>
  );
}
