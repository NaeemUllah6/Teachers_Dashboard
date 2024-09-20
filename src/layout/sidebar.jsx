import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Home from '../images/icons/home-03.svg';
import Library from '../images/icons/library.svg';
import Courses from '../images/icons/courses.svg';
import Grades from '../images/icons/grades.svg';
import User from '../images/icons/users.svg';
import Logout from '../images/icons/log-out-01.svg';
import Qmark from '../images/icons/question_mark.svg';
import Setting from '../images/icons/users.svg';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Library', path: '/library', icon: Library },
    { name: 'Courses', path: '/courses', icon: Courses },
    { name: 'Grades', path: '/grades', icon: Grades },
    { name: 'Users', path: '/people', icon: User, separator: true },
    { name: 'Help Center', path: '/help', icon: Qmark },
    { name: 'Setting', path: '/setting', icon: Setting },
    { name: 'Logout', path: '/login', icon: Logout },
  ];

  return (
    <div className="pl-5 bg-white">
      <div className='w-[240px] p-6 ps-0 border border-s-0  border-b-0'>
        <ul className='gap-y-4 flex flex-col'>
          {navItems.map((item, index) => (
            <React.Fragment key={item.name}>
              <Link to={item.path}>
                <li
                  className={`px-3 py-2 rounded-lg ${location.pathname === item.path ? 'bg-[#0348B7] text-white' : ''
                    }`}
                >
                  <div className='flex gap-3'>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={`${location.pathname === item.path ? 'text-white' : 'text-[#475467]'
                        }`}
                    />
                    <h2
                      className={`text-base font-medium calibri ${location.pathname === item.path ? 'text-white' : 'text-[#475467]'
                        }`}
                    >
                      {item.name}
                    </h2>
                  </div>
                </li>
              </Link>
              {item.separator && <div className='h-[1px] bg-[#EAECF0] mt-2'></div>}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
