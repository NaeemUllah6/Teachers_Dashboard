import React from 'react';
import Mybutton from './mybutton';

export default function CourseFooter({ activeTab, ariaControls, ariaSelected, clickHandler, id }) {
    return (
        <div>
            <div className='h-[1px] bg-[#EAECF0] mt-4'></div>
            <div className='pt-5'>
                <div className='flex justify-center md:justify-between gap-3 items-center flex-wrap'>
                    <div>
                        <Mybutton text="Cancel" />
                    </div>
                    <div className='flex gap-3'>
                        <Mybutton text="Save As Draft" className="text-[#0348B7] border border-[#0348B7]" />
                        <button
                            className="text-white bg-[#0348B7] px-5 rounded-lg md:font-medium text-[12px] md:text-[16px]"
                            id={id}
                            type="button"
                            role="tab"
                            aria-controls={ariaControls}
                            aria-selected={ariaSelected}
                            onClick={() => clickHandler(ariaControls)}
                        >
                            Save And Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
