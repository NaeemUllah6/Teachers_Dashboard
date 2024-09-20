import { useState } from 'react';
import { Link } from 'react-router-dom';
import Mybutton from './mybutton';
import Oscar from '..//../images/icons/move.svg';
import Edit from '..//../images/icons/copy.svg';
import Copy from '..//../images/icons/edit.svg';
import Del from '..//../images/icons/del.svg';

export default function Accordion({ title, link1, link2, link3, link4, link5, link6, children, className }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="accordion-item mb-4">
            <h2>
                <button
                    type="button"
                    className={`flex flex-wrap items-center justify-between w-full p-3 text-[16px] text-gray-500 gap-2 md:gap-3 ${className && className} 
                    ${isOpen ? 'border-b-0 rounded-bl-none rounded-br-none' : 'border-b'} transition-all duration-300 ease-in-out`}
                    onClick={toggleAccordion}
                    aria-expanded={isOpen}
                >
                    <span className="flex items-center justify-between gap-3">
                        <svg
                            data-accordion-icon
                            className={`w-3 h-3 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                        <h2 className="font-medium text-[18px] md:text-[24px] text-[#344054]">{title}</h2>
                    </span>
                    <div className="flex flex-wrap items-center gap-4">
                        {link1 && <Link to={link2}><p className="text-[#0348B7]"><Mybutton className="text-black" text="Published" /></p></Link>}
                        {link2 && <Link to={link1}><p className="text-[#0348B7]"><Mybutton className="text-black" text="+ Add New" /></p></Link>}
                        {link3 && <Link to={link3}><p className="text-[#0348B7]"><img src={Oscar} alt="" /></p></Link>}
                        {link4 && <Link to={link2}><p className="text-[#0348B7]"></p></Link>}
                        {link5 && <Link to={link1}><p className="text-[#0348B7]"><img src={Edit} alt="nothing" /></p></Link>}
                        {link6 && <Link to={link3}><p className="text-[#0348B7]"><img src={Copy} alt="" /></p></Link>}
                        {link6 && <Link to={link3}><p className="text-[#0348B7]"><img src={Del} alt="" /></p></Link>}
                    </div>
                </button>
            </h2>
            <div
                className={`overflow-auto transition-all duration-500 ease-in-out transform ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    );
}
