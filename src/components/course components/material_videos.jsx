import React from 'react'

export default function Mateial_videos({video,title, paragraph, Bar}) {
  return (
    <div>
        
    <div className='p-3 bg-[#F9FAFB] rounded-xl border-2 border-[#EAECF0]'> 
    <video muted autoPlay  controls className='w-[400px] h-[240px]'>
        <source src={video} />
    </video>
        <div className='flex items-center justify-between'>
            <div>
                <h3 className='text-[18px] font-bold'>{title}</h3>
                <p>{paragraph}</p>
            </div>
            <div>
                <img src={Bar} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}
