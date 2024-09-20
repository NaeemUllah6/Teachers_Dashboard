import React from 'react'
import Accordion from '../Reuse components/accordion'
import { CustomTable } from '../Reuse components/table'
export default function Assignments() {
    const columns = [
        { name: 'fullName', title: 'Assignment Name' },
        { name: 'fullName2', title: 'Assigned to' },
        { name: 'fullName3', title: 'Submitted' },
        { name: 'fullName4', title: 'Status' },
        { name: 'fullName5', title: 'Average' },
        { name: 'fullName6', title: 'Action' },
    ]
    const rows = [
        {
            fullName: 'File Title',
            fullName2: '50%',
            fullName3: '50%',
            fullName4: '70%',
            fullName5: '90%',
            fullName6: 'Completed'
        },
        {
            fullName: 'VR Simulation Assignment Title',
            fullName2: '50%',
            fullName3: '50%',
            fullName4: '70%',
            fullName5: '90%',
            fullName6: 'Due'
        },
        {
            fullName: 'Video Title',
            fullName2: '50%',
            fullName3: '50%',
            fullName4: '70%',
            fullName5: '90%',
            fullName6: 'Completed'
        },
        {
            fullName: 'Announcement Title',
            fullName2: '50%',
            fullName3: '50%',
            fullName4: '70%',
            fullName5: '90%',
            fullName6: 'Due'
        },
    ];
    return (
        <div>
            <Accordion title="Assignment Name" className="border-2 mb-3" />
            <Accordion title='Assignment Name' className='border-2 ' >
                <div>

                    <CustomTable
                        className="rounded border-2"
                        columns={columns}
                        rows={rows}
                    // showImages={true} 
                    />
                </div>
            </Accordion>
            <Accordion title="Assignment Name" className="border-2 mt-3" />
        </div>
    )
}
