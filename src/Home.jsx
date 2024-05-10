import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai'
import pic from '../src/mypic.jpeg'


export default function Home() {
  return (
    <div>
        <main className=' bg-violet-50 px-12'>
        <section className='min-h-screen '>
          <nav className='pt-5 pb-5 mb-5 flex justify-between'>
            <h1 className='text-2xl'>developedbyme</h1>
            <ul className='flex items-center'>
              <li className='cursor-pointer text-2xl'><BsFillMoonStarsFill/></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-violet-600 hover:bg-emerald-800 text-white ml-8 p-3 rounded ' href='#'>Resume</a></li>
            </ul>
          </nav>
          <div className='relative rounded-full flex justify-center overflow-hidden'>
            <img className="object-cover w-60 h-60"
           style={{ borderRadius: '50%' }} src={pic} ></img>
          </div>
          <div className=' text-center px-10 pt-2 pb-2'>
            <h2 className=' text-5xl font-bold bg-gradient-to-r from-cyan-500 to-violet-600 text-transparent bg-clip-text py-2'>Empowering Change through Code</h2>
            <h3 className='text-2xl py-2'>Bhargav Mungekar</h3>
            <h3 className='text-xl py-2'>Full Stack Developer & Web3 enthusiast</h3>
            {/* <p className='text-md leading-7'> I have deep interest in development and I like to create stuff which can be applied to real world problems. I have built a a bunch of projects in reactjs and tailwindcss and a couple of projects in android development and web3.</p> */}
          </div>
          <div className='text-4xl flex justify-center gap-20 py-2 text-gray-500'>
            <AiFillLinkedin/>
            <AiFillTwitterCircle/> 
            <AiFillGithub/>
          </div>

        </section>
        <div className="border-b-2 bg-gradient-to-r from-cyan-500 to-violet-600 "></div>

        <section className='text-center px-14 py-8'>
            <h2 className='text-4xl font-bold bg-gradient-to-r from-cyan-500 to-violet-600 text-transparent bg-clip-text py-2 mb-2'>About</h2>
            <p className='text-md leading-7'>
                My deep interest in development is driven by a passion for leveraging technology to solve real-world problems and create meaningful solutions. Through my journey, I've honed my skills in various areas, including React.js, Tailwind CSS, Android development, and even delved into the exciting realm of Web3. With React.js and Tailwind CSS, I've crafted a diverse range of projects, each tailored to address specific challenges or fulfill particular needs. Also familiar with android development using FLutter.my exploration into Web3 technologies has opened up new avenues for innovation, as I've delved into the world of decentralized applications (DApps), smart contracts, and blockchain integration. </p>
        </section>

        <div className="border-b-2 bg-gradient-to-r from-cyan-500 to-violet-600 "></div>


        
      </main>
    </div>
  )
}
