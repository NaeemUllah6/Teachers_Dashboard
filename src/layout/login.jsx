import React, { useState } from 'react';
import Loginimg from '../images/icons/loginimg.svg';
import { useNavigate} from 'react-router-dom'

export default function Login({ loginheading, inputtext, inputtext1, username }) {
  const [input, setInput] = useState("password");
  const navigate = useNavigate();

  const showpassword = () => {
    setInput(input === "password" ? "text" : "password");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard')
  };

  return (
   <div className="container  overflow-hidden">
     <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full gap-10'>
       <div className='bg-blue-800 md:h-screen flex items-center justify-center rounded-2xl mt-4 md:m-0 w-full'>
         <img className='py-10 md:px-44 h-[50%] w-[50%] md:w-full md:h-full' src={Loginimg} alt="Login page illustration" />
       </div>
       <div className='w-[80%] m-auto'>
         <form onSubmit={handleLogin} className='flex flex-col gap-5'>
           <h2 className='text-center text-[30px] font-medium'>{loginheading}</h2>
           <div className='flex flex-col'>
             <label htmlFor="username">{username}</label>
             <input 
               id="username"
               name="username"
               className='h-[44px] border pl-3 mt-2 rounded-lg'
               type="text"
               placeholder={inputtext}
               required
             />
           </div>
           <div className='flex flex-col'>
             <label htmlFor="password">Password</label>
             <div className='relative'>
               <input 
                 id="password"
                 name="password"
                 className='h-[44px] border w-full pl-3 mt-2 rounded-lg'
                 type={input}
                 placeholder={inputtext1}
                 required
               />
               <div className='absolute top-4 right-2'>
                 <button
                   onClick={showpassword}
                   type="button"
                   aria-label="Toggle password visibility"
                 >
                   <i className={`fa ${input === "password" ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                 </button>
               </div>
             </div>
             <div className='flex gap-2 mt-3'>
               <input id="keepLoggedIn" name="keepLoggedIn" type="checkbox"  />
               <label htmlFor="keepLoggedIn">Keep me Logged in</label>
             </div>
           </div>
           <button type="submit" className='bg-[#0348B7] text-white py-3 px-5 rounded-lg'>
             Login
           </button>
           
         </form>
       </div>
     </div>
   </div>
  );
}
