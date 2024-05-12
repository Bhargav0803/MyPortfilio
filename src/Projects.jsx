import React from 'react'
import {projectData} from './projectData'

export default function Projects() {
  return (
    <div>
<section className="text-black body-font bg-light ">
  <div className="container px-20 pb-16 pt-2 mx-auto drop-shadow-lg">
    <h1 className="sm:text-3xl text-left text-4xl font-bold title-font mb-10 bg-primary text-transparent bg-clip-text">Projects</h1>
    <div className="flex flex-wrap -m-4">
      {projectData.map(project =>( 
      <div key={project.id} className="hover:shadow-2xl  p-4 md:w-1/3">
        <div className="h-full border-2 p-2 border-primary drop-shadow-xl rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-center" src={project.image} alt="blog"/>
          <div className="p-4 text-left">
            <h2 className="tracking-widest text-xs title-font font-medium text-secondary mb-1">{project.category}</h2>
            <h1 className="title-font text-lg font-medium text-primary mb-}3">{project.title}</h1>
            <p className="leading-relaxed mb-3">{project.description}</p>
            <div className="flex items-center flex-wrap ">
              <a href={project.link} className="text-secondary inline-flex items-center md:mb-2 lg:mb-0">Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      ))}
      </div>
      </div>
      </section>
    </div>
  )
}
