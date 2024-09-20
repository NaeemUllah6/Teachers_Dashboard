import React from 'react'

function Selector() {
    return (
        <div>
            <div>
                <p className="pt-5">Select Item Type</p>
                <select className="overflow-auto py-2 px-2 mt-3 w-full bg-transparent border border-[#D0D5DD] rounded-[12px]">
                    <option className="bg-[#4545f8] text-white py-4" value="">Subject Title</option>
                    <option value="">Computer Sciences</option>
                    <option value="">English</option>
                    <option value="">Mathematics</option>
                    <option value="">Data Structure</option>
                    <option value="">Computer Architecture</option>
                    <option value="">Visual Design</option>
                    <option value="">Human Computer Interaction</option>
                    <option value="">Software Requirement Engineering</option>
                    <option value="">Formal Methods</option>
                </select>
            </div>
        </div>
    )
}

export default Selector







