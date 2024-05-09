import React from 'react'
import Data from './projectData.json'

export default function Projects() {
  return (
    <div>

<section className="text-gray-600 body-font">
  <div className="container px-16 py-16 mx-auto">
    <div className="flex flex-wrap -m-4">
      {Data.map(project =>( 
      <div key={project.id} className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.image} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{project.category}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-}3">{project.id}</h1>
            <p className="leading-relaxed mb-3">{project.description}</p>
            <div className="flex items-center flex-wrap ">
              <a href={project.link} className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
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
