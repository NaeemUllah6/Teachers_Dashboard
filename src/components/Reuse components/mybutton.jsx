import React from 'react'

export default function CustomButton(props) {
  const { onClick, className } = props;
  return (

    <div>
        <button onClick={onClick} className={` border  text-[10px] md:text-[16px] py-2 px-2 font-medium rounded-lg md:px-[18px] md:py-[10px]  ${props.className ? props.className : ''}`}>
            {props.text}
        </button>
    </div>
  )
}
