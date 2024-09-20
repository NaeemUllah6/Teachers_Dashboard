import React from 'react'
import Avatar from '..//../images/icons/dashboardavtar.svg'
import Progressbar from '../progress';
import { Link } from 'react-router-dom'


function submissions() {
  const card = [
    {
      id: Avatar,
      name: "Aliah Lane",
      course: "Neurological Assessment",

    },
    {
      id: Avatar,
      name: "Aliah Lane",
      course: "Neurological Assessment",

    },
    {
      id: Avatar,
      name: "Aliah Lane",
      course: "Neurological Assessment",

    },
    {
      id: Avatar,
      name: "Aliah Lane",
      course: "Neurological Assessment",

    },
    {
      id: Avatar,
      name: "Aliah Lane",
      course: "Neurological Assessment",

    },
    {
      id: Avatar,
      name: "Aliah Lane",
      course: "Neurological Assessment",

    },
    {
      id: Avatar,
      name: "Aliah Lane",
      course: "Neurological Assessment",

    },
    {
      id: Avatar,
      name: "Aliah Lane",
      course: "Neurological Assessment",

    },
    {
      id: Avatar,
      name: "Aliah Lane",
      course: "Neurological Assessment",

    },



  ]
  return (

    <div>
      <div className=''>
        <div className='flex w-full items-center'>
          <div className='border rounded-lg p-4'>
            <div className='flex justify-between text-center md:text-left flex-wrap items-center'>
              <div>
                <h2 className='text-[20px] font-medium'>Latest Submission</h2>
              </div>
              <div>
                <Link to=""><h4 className='text[16px font-medium text-[#475467]'>See Courses <i className='fa fa-arrow-right'></i></h4></Link>
              </div>
            </div>
            <div className='p-4'>
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
                        <div className="hidden md:block">
                          <Progressbar />
                        </div>
                      </div>
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




  )
}

export default submissions
