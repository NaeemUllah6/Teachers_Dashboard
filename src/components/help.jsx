import React from 'react'
import Question from '../images/icons/question_mark.svg'
import helpimg from '../images/icons/help_profile.svg'
import image1 from '../images/icons/email.svg'
import image2 from '../images/icons/text.svg'
import image3 from '../images/icons/chat.svg'
export default function Help() {
  const carddata = [
    {
      id: 1,
      image1: image1,
      heading: 'Email Us',
      paragraph: 'Live chat us now to get answers fast. We have 24/7 support on this platform',
      btn: 'Send Email'
    },
    {
      id: 1,
      image1: image2,
      heading: 'Text Us',
      paragraph: 'Live chat us now to get answers fast. We have 24/7 support on this platform',
      btn: '940-218-4062'
    },
    {
      id: 1,
      image1: image3,
      heading: 'Live Chat',
      paragraph: 'Live chat us now to get answers fast. We have 24/7 support on this platform',
      btn: 'Live Chat'
    },
  ]
  return (
    <div className='md:p-4'>
      <div className='  border rounded-xl'>
        <div className='p-4'>
          <div className='flex items-center justify-center flex-wrap md:justify-between'>
            <div className='flex items-center gap-2'>
              <img src={Question} alt="pic" />
              <p className='text-[28px]'>Help</p>
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
            <p className='font-medium text-center md:text-left'>Your Account Executive</p>
          </div>
          <div className='flex flex-wrap justify-center md:justify-start items-center gap-3'>
            <div>
              <img src={helpimg} alt="" />
            </div>
            <div className='text-center md:text-left'>
              <p className='text-[20px] font-medium'>Will Patrick</p>
              <p className='font-medium py-1'>MSN | APRN | FNP-C | CCRN | CSCS</p>
              <p>kirkpatrickw@tactilevr.com</p>
            </div>
          </div>
          <p className='text-center md:text-left font-medium text-[22px] pt-5'>General Support</p>

          <div className="container">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
              {
                carddata.map((card) => (
                  <div className='bg-[#F9FAFB] border-2 border-[#EAECF0] py-6 rounded-xl text-center my-5'>
                    <div className='space-y-3 container'>
                      <img className='mx-auto' src={card.image1} alt="" />
                      <h2 className='text-[20px] text-[#0348B7]'>{card.heading}</h2>
                      <p className='text-[14px] text-[#344054]'>{card.paragraph}</p>
                      <button className=' mt-2 py-[10px] px-[18px] rounded-lg text-[#0348B7] border border-[#0348B7]'>{card.btn}</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <p className='text-[18px] font-bold text-center md:text-left'>Contact Detail</p>
          </div>
          <div className='container'>
            <div className='flex flex-wrap  gap-10'>
              <div className='space-y-2 md:text-left'>
                <h2 className='text-[#344054] font-medium text-[20px] py-4'>Courseta Nursing</h2>
                <p><span className='font-medium'>Operated by: </span>Tactile VR</p>
                <p><span className='font-medium '>Phone: </span>940-218-4062 (text only)</p>
                <p><span className='font-medium'>Email: </span>info@tacliver.com</p>
              </div>
              <div className='space-y-2'>
                <h2 className='text-[#344054] font-medium text-[20px] py-4'>Hours of Operation</h2>
                <p>Monday-Friday</p>
                <p>9:00 am - 6:00 pm Central Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
