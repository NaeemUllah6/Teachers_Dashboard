import React from 'react';

export function CustomTable(props) {
    const { columns, rows, showImages, className } = props;

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className='min-w-full text-center text-sm font-light'>
                            <thead className={`border-b font-medium dark:border-neutral-500 ${className && className} `}>
                                <tr className='border rounded'>
                                    {columns?.map((item) => (
                                        <th
                                            key={item.name}
                                            scope="col"
                                            className="px-6 py-2 font-normal text-[#667085] text-[16px] leading-[24px]"
                                        >
                                            {item.title}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows?.map((item, rowIndex) => (
                                    <tr key={rowIndex} className="border rounded">
                                        {columns?.map((column, colIndex) => (
                                            <td
                                                key={colIndex}
                                                className="whitespace-nowrap px-6 py-3 font-medium text-[#344054] text-[16px]"

                                            >
                                                {showImages && colIndex >= columns.length - 3 ? (

                                                    <span>
                                                        <img
                                                            src={item[column.name]}
                                                            alt={`icon ${colIndex}`}
                                                            className="w-6 h-6"
                                                        />
                                                    </span>
                                                ) : (
                                                    // <span
                                                    //     className={`px-2 py-1 rounded ${item[column.name] === 'Published'
                                                    //             ? rowIndex === 0
                                                    //                 ? 'bg-[#ECFDF3] text-[#027A48] rounded-full px-3'
                                                    //                 : rowIndex === 1
                                                    //                     ? 'bg-[#ECFDF3] text-[#027A48] rounded-full px-3'
                                                    //                     : rowIndex === 2
                                                    //                         ? 'bg-[#ECFDF3] text-[#027A48] rounded-full px-3'
                                                    //                         : ''
                                                    //             : ''
                                                    //         }`}
                                                    // >
                                                    //     {item[column.name]}
                                                    // </span>
                                                    <span
                                                        className={`px-2 py-1 rounded`} style={{ background: column.name === 'fullName2' ? item.bgColor : '' }}
                                                    >
                                                        {item[column.name]}
                                                    </span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
