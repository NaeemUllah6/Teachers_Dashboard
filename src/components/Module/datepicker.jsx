import React, { useRef, useEffect, useState } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

export default function Datepicker() {
    const datePickerRef = useRef(null);

    useEffect(() => {
        flatpickr(datePickerRef.current, {
            dateFormat: 'm-d-Y',
        });
    }, []);
    const [change, setChange] = useState (false)
    const Color = () => {
        setChange(!change)
    }
    return (
        <div>
            <div className="border border-[#dcdcdc] rounded-[12px] bg-[] p-4 my-3">
                <div className="flex items-center gap-4 py-3">


                    <div class="flex items-center">
                        <input onClick={Color} type="checkbox" id="custom-checkbox" class="hidden peer" />
                        <label for="custom-checkbox" class="w-6 h-6 rounded border bg-[#E6EDFA] border-blue-500 flex items-center justify-center cursor-pointer peer-checked:bg-blue-500 peer-checked:border-blue-500">
                            <i className={`fa fa-check text-[#034FC9] ${change ? "text-white" : "blue"}`}></i>
                            <svg class="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </label>
                    </div>

                    <p>Enable Locked Duration</p>
                </div>
                <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 end-3 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input
                        id="datepicker-format"
                        ref={datePickerRef}
                        type="text"
                        className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5"
                        placeholder="Unlock Date"
                    />
                </div>

            </div>
        </div>
    )
}


