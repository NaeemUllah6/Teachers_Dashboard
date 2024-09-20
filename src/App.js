import './App.css';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Library from './components/library';
import Courses from './components/courses';
import Viewcourse from './components/coursetabs';
import Grades from './components/course components/grades'
import Users from './components/course components/people'
import Login from './layout/login'
import Help from './components/help'
import Setting from './components/settings'
import gradeimg from './images/icons/grades.svg'


function App() {
  const location = useLocation();
  console.log(location.pathname)

  return (
    <>
      {location.pathname !== '/login' ? (
        <div className='fixed z-50 bg-white w-full'><Header /></div>
      ) : ''}
      <div className="flex">
        {location.pathname !== '/login' ? (
          <div className='w-[250px] fixed mt-20 hidden  lg:block'>
            <Sidebar />
          </div>
        ) : ''}


        <div className={`${location.pathname !== '/login' ? 'mt-20 lg:ml-[240px] w-full px-4' : ''}`} >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/library" element={<Library />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/coursetabs" element={<Viewcourse />} />
            <Route path="/grades" element={< Grades gradesheading='Grades' gradesimg={gradeimg} />} />
            <Route path="/people" element={< Users user_heading='Users' />} />
            <Route path="/login" element={< Login inputtext="User Name" inputtext1='Password' username='User Name' loginheading='Welcome Back!' />} /> 
            <Route path="/help" element={<Help />} /> 
            <Route path="/setting" element={<Setting />} /> 
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
