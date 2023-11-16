import React from 'react'
import Atropos from 'atropos/react'

interface Project {
  day: number
  title: string
  image: string
  href: string
}

export default function ProjectCard({day, title, image, href} : Project): JSX.Element {

  return <Atropos rotateTouch={false}>
    <a className='w-full h-full grid place-items-center overflow-hidden'
    href={href}>
      <img className='w-full h-full object' src={image} alt={title}/>
      <div className={`absolute cover grid place-items-center overflow-hidden h-full w-full
      bg-[radial-gradient(_circle,_rgba(0,_0,_0,_0.6783088235294117)_2%,_rgba(0,_0,_0,_0.01724439775910369)_100%)]
      hover:bg-[linear-gradient(_0deg,_rgba(0,_0,_0,_0.6334908963585435)_0%,_rgba(0,_0,_0,_0)_44%,_rgba(0,_0,_0,_0)_100%)]
      `}>
        <div className='relative w-full h-full grid place-items-center group'>
          <h1 className='text-3xl absolute transition-all group-hover:opacity-0 group-hover:-translate-y-12'>Day {day}</h1>
          <h1 className='text-lg md:text-2xl lg:text-3xl absolute bottom-4 transition-all translate-y-32 group-hover:translate-y-0'>{title}</h1>
        </div>
      </div>
    </a>
  </Atropos>
}