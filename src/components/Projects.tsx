import React, { useState } from 'react'
import ProjectCard from '@components/ProjectCard'
import projects from '@data/projects'
import { Switch } from '@nextui-org/switch'

export default function Projects(): JSX.Element {
  const [forceInfo, setForceInfo] = useState(false)

  return (
    <div className='w-full md:max-w-[90%] m-auto flex flex-col'>
      <div className='py-6 pb-20 text-5xl md:text-7xl text-center relative self-center flex flex-col items-end'>
        <h1 className='select-none p-4 bg-clip-text text-transparent bg-fixed bg-cover [background-image:var(--gradient)] absolute blur w-full animate-pulse'>
          Projects
        </h1>
        <h1 className='p-4 bg-clip-text text-transparent bg-fixed bg-cover [background-image:var(--gradient)]'>
          Projects
        </h1>
        <div style={{ opacity: forceInfo ? 1 : 0.75 }} className={`flex items-center gap-4 transition-all`}>
          <p className='text-base md:text-xl'>Show info</p>
          <Switch color='secondary' isSelected={forceInfo} onValueChange={setForceInfo} />
        </div>
      </div>
      <section
        id='project-grid'
        className='grid relative p-4 md:p-10 lg:p-16 gap-0 [grid-template-columns:_repeat(auto-fit,_minmax(150px,_1fr))] md:[grid-template-columns:_repeat(auto-fit,_minmax(300px,_1fr))]'>
        <div className='absolute opacity-0 md:opacity-100 border-primary/30 top-0 left-0 border-4 border-dotted h-1/2 w-1/2' />
        <div className='absolute opacity-0 md:opacity-100 border-primary/30 bottom-0 right-0 border-4 border-double h-1/2 w-1/2' />
        {projects.map(project => (
          <ProjectCard key={project.test} forceInfo={forceInfo} {...project} />
        ))}
      </section>
    </div>
  )
}
