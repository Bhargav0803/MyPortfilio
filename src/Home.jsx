import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai'
import pic from '../src/final-logo.jpg'
import logo from './mylogo.drawio.png' 
import { useState } from 'react'


export default function Home() {
  const [darkMode,setDarkMode]=useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
        <main className=' bg-light px-20 dark:bg-slate-900'>
        <section className='min-h-screen '>
          <nav className='py-5 mb-5 flex justify-between'>
            {/* <h1 className='text-2xl'>developedbyme</h1> */}
            <img className='h-12 w-12 cursor-pointer' src={logo} alt="" />
            <ul className='flex items-center'>
              <li onClick={()=>{setDarkMode(!darkMode)}} className='cursor-pointer text-2xl dark:text-white'><BsFillMoonStarsFill/></li>
              <li><a className='bg-transparent border-2 border-primary hover:bg-primary 0 text-md dark:text-white drop-shadow-lg font-bold ml-8 p-3 rounded ' href='#'>Resume</a></li>
            </ul>
          </nav>
          {/* <div className='relative flex justify-center overflow-hidden'>
            <img className=" w-64 h-64"
           style={{ borderRadius: '50%' }} src={pic} ></img>
          </div> */}
<div class="text-gray-600 body-font py-10 border-4 rounded-full border-primary ">
  <div class="container mx-auto flex px-40 py-2 items-center justify-center ">
    {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={pic}/> */}
    <img className=" w-72 h-72" style={{ borderRadius: '50%' }} 
            src={pic} ></img>
    <div class="text-center lg:w-2/3 w-full flex flex-col">
            <h3 className='text-2xl py-2 font-semibold   '>Hii, I'm</h3>
            <h2 className=' text-4xl font-bold bg-black text-transparent bg-clip-text dark:bg-white py-2'>Bhargav<br/> <span className='text-4xl font-bold bg-primary text-transparent bg-clip-text py-2'>Mungekar</span></h2>
            <h3 className='text-xl text-secondary font-semibold py-2'>React Frontend Developer</h3>
            <div className='flex justify-center '>
              <button className='p-3 m-2 border-2 font-bold dark:text-white text-black hover:drop-shadow-xl border-primary rounded-3xl'>Projects</button>
              <button className='p-3 m-2 font-bold text-white border- bg-primary  rounded-3xl'>Contact</button>
            </div>
            <div className='text-4xl flex justify-center gap-20 py-2 mb-5 text-gray-600 '>
            <AiFillLinkedin/>
            <AiFillTwitterCircle/> 
            <AiFillGithub/>
          </div>
    </div>
  </div>
  
</div>
        
        </section> 
      </main>
    </div>
  )
}
