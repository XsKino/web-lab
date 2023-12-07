/* eslint-disable @typescript-eslint/consistent-type-definitions */
import React from 'react'
import Atropos from 'atropos/react'
import { type Project } from '@data/projects'
import styles from '@styles/components/ProjectCard.module.css'

export default function ProjectCard({
  test,
  title,
  image,
  href,
  technologies,
  forceInfo
}: Project & { forceInfo: boolean }): JSX.Element {
  return (
    <Atropos rotateTouch={false}>
      <a className={`${styles.showInfo} ${forceInfo && styles.forceInfo}`} href={href}>
        <img className={styles.cardImage} src={image} alt={title} />
        <div className={styles.cardOverlay}>
          <div className='relative w-full h-full grid place-items-center group'>
            <h1 className={styles.testNumber}>test {test}</h1>
            <h1 className={styles.testName}>{title}</h1>
            <section className={`${styles.testTechnologies} brightness-0 blur-md`}>
              {technologies?.map(tech => (
                <img
                  src={`/img/technologies/${tech}.png`}
                  className='h-5 md:h-8 lg:h-10 w-auto'
                  key={tech}
                  title={tech}
                  alt={tech}
                />
              ))}
            </section>
            <section className={styles.testTechnologies}>
              {technologies?.map(tech => (
                <img
                  src={`/img/technologies/${tech}.png`}
                  className='h-5 md:h-8 lg:h-10 w-auto'
                  key={tech}
                  title={tech}
                  alt={tech}
                />
              ))}
            </section>
          </div>
        </div>
      </a>
    </Atropos>
  )
}
