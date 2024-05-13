import React from 'react'
import {AiFillLinkedin, AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai'
import pic from '../src/profile.jpg'
import logo from './mylogo.drawio.png' 
import { useDarkMode } from './DarkModeContext'
import Switch from 'react-switch'

export default function Home({ detailsRef, contactRef}) {
    
  const { darkMode, toggleDarkMode } = useDarkMode();
  console.log(darkMode);
  // const [darkMode,setDarkMode]=useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
        <main className=' bg-light px-24 dark:bg-dark'>
        <section className='min-h-screen '>
          <nav className='py-5 mb-5 flex justify-between'>
            {/* <h1 className='text-2xl'>developedbyme</h1> */}
            <img className='h-12 w-12 cursor-pointer' src={logo} alt="" />
            <ul className='flex items-center'>
            <Switch onChange={toggleDarkMode} checked = {darkMode} uncheckedIcon={null} checkedIcon={false} onColor='#276880' ></Switch>
              
              {/* <li onClick={toggleDarkMode} className='cursor-pointer text-2xl dark:text-white'><BsFillMoonStarsFill/></li> */}
              <li><a className='bg-transparent border-2 border-primary hover:bg-primary 0 text-md dark:text-white drop-shadow-lg font-bold ml-8 p-3 rounded-2xl' target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/14WA9J2Rf-X30-oem0I63WCd_YP5fkAr2/view?usp=sharing'>Resume</a></li>
            </ul>
          </nav>
          {/* <div className='relative flex justify-center overflow-hidden'>
            <img className=" w-64 h-64"
           style={{ borderRadius: '50%' }} src={pic} ></img>
          </div> */}
<div className="text-gray-600 body-font py-10 border-4 rounded-3xl border-primary ">
  <div className="container mx-auto flex px-40 py-2 items-center justify-center ">
    {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={pic}/> */}
    <img className=" w-72 h-72" style={{ borderRadius: '50%' }} 
            src={pic} ></img>
    <div className="text-center lg:w-2/3 w-full flex flex-col">
            <h3 className='text-2xl py-2 font-semibold text-primary dark:text-gray-400  '>Hii, I'm</h3>
            <h2 className=' text-4xl font-bold bg-primary text-transparent bg-clip-text py-2'>Bhargav<br/> Mungekar</h2>
            <h3 className='text-xl text-primary dark:text-gray-400 font-semibold py-2'>React Frontend Developer</h3>
            <div className='text-4xl flex justify-center gap-20 py-2 mb-5 text-gray-600 hover:cursor-pointer'>
            <a href="https://www.linkedin.com/in/bhargav-mungekar/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/> </a>
            <a href="https://www.linkedin.com/in/bhargav-mungekar/" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle/> </a>
            <a href="https://twitter.com/BhargavM_08" target="_blank" rel="noopener noreferrer"><AiFillGithub/> </a>
            
            
          </div>
    </div>
  </div>
  
</div>
        
        </section> 
      </main>
    </div>

  )
}
