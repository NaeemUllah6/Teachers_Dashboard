import React, { useState } from 'react';
import Mybutton from '../Reuse components/mybutton';
import Accordion from '../Reuse components/accordion';
import { CustomTable } from '../Reuse components/table';
import Drawer from '../Module/drawer';
import image1 from '../../images/icons/copy.svg'
import image2 from '../../images/icons/edit.svg'
import image3 from '../../images/icons/editicon.svg'


export default function Module() {
   
        const columns = [
            { name: 'fullName', title: '' },
            { name: 'fullName2', title: '' },
            { name: 'fullName3', title: '' },
            { name: 'fullName4', title: '' },
            { name: 'fullName5', title: '' },
        ];
    
     
        const rows = [
            {
                fullName: 'VR Simulation Assignment Title',
                fullName2: 'Published',
                fullName3: image1,
                fullName4: image2,
                fullName5: image3,
            },
            {
                fullName: 'Video Title',
                fullName2: 'Published',
                fullName3: image1,
                fullName4: image2,
                fullName5: image3,
            },
            {
                fullName: 'Announcement Title',
                fullName2: 'Published',
                fullName3: image1,
                fullName4: image2,
                fullName5: image3,
            },
        ];
    
        const [alertVisible, setAlertVisible] = useState(false);
    
        const toggleAlert = () => {
            setAlertVisible(!alertVisible);
        };
    
        const handleClose = () => {
            setAlertVisible(false);
        };
    
        return (
            <div>
                <div className="flex justify-between gap-3 gap-y-3 flex-wrap">
                    <div>
                        <h2 className="text-[24px] font-medium text-[#344054]">Course Module</h2>
                    </div>
                    <div className="flex gap-3 relative flex-wrap">
                        <Mybutton text=" Collapse All " />
                        <Mybutton text=" Published " />
                        <Mybutton
                            onClick={toggleAlert}
                            text="Add New Module"
                            className="bg-[#0348B7] text-white"
                        />
                        <div
                            className={`absolute top-0 bottom-4 right-3 z-50 ${alertVisible ? 'block' : 'hidden'}`}
                        >
                            <Drawer onClose={handleClose} />
                        </div>
                    </div>
                </div>
    
                <div className="py-8">
                    <div className="pb-4">
                        <Accordion
                            className="text-[16px] md:text-[24px] md:text-medium flex flex-wrap border"
                            title="Module Name"
                            link1="button"
                            link2="button"
                            link3="img"
                        />
                    </div>
                    <Accordion
                        className="border"
                        title="Published Courses"
                        link1="Published"
                        link3="img"
                        link2="Add New"
                        link5="edit"
                        link6="copy"
                    >
                        <div>
                            
                            <CustomTable
                                className="rounded border-t-0"
                                columns={columns}
                                rows={rows}
                                showImages={true} 
                            />
                        </div>
                    </Accordion>
                </div>
            </div>
        );
    }
    