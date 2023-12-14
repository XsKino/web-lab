import React, { useState } from 'react'
import ProjectCard from '@components/ProjectCard'
import projects from '@data/projects'
import { Switch } from '@nextui-org/switch'

const InfoIcon = ({ active }: { active: boolean }): JSX.Element => (
  <svg
    className={`h-[1em] transition-colors ${active ? 'fill-secondary' : 'fill-background'}`}
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 16 16'
    height='200px'
    width='200px'
    xmlns='http://www.w3.org/2000/svg'>
    <path d='m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z'></path>
  </svg>
)

export default function Projects(): JSX.Element {
  const [forceInfo, setForceInfo] = useState(false)

  return (
    <div className='w-full md:max-w-[90%] m-auto flex flex-col'>
      <div className='py-[24px] pb-[80px] font-bold text-[30px] md:text-[48px] text-center relative self-center flex flex-col items-end'>
        <h1 className='select-none p-[16px] bg-clip-text text-transparent bg-fixed bg-cover [background-image:var(--gradient)] absolute blur w-full animate-pulse'>
          Projects
        </h1>
        <h1 className='p-[16px] bg-clip-text text-transparent bg-fixed bg-cover [background-image:var(--gradient)]'>
          Projects
        </h1>
        <div
          style={{ opacity: forceInfo ? 1 : 0.75 }}
          className={`flex items-center gap-[16px] transition-all`}>
          <Switch
            color='secondary'
            thumbIcon={<InfoIcon active={forceInfo} />}
            isSelected={forceInfo}
            onValueChange={setForceInfo}
          />
        </div>
      </div>
      <section
        id='project-grid'
        className='grid relative p-[16px] md:p-[40px] lg:p-[64px] gap-0 [grid-template-columns:_repeat(auto-fit,_minmax(150px,_1fr))] md:[grid-template-columns:_repeat(auto-fit,_minmax(300px,_1fr))]'>
        <div className='absolute opacity-0 md:opacity-100 border-primary/30 top-0 left-0 border-[16px] border-dotted h-1/2 w-1/2' />
        <div className='absolute opacity-0 md:opacity-100 border-primary/30 bottom-0 right-0 border-[16px] border-double h-1/2 w-1/2' />
        {projects.map(project => (
          <ProjectCard key={project.test} forceInfo={forceInfo} {...project} />
        ))}
      </section>
    </div>
  )
}
