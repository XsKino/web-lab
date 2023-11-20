/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function BlurryLoading(): JSX.Element {
  const [load, setLoad] = useState(0)

  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      if (count >= 100) {
        clearInterval(interval)
        setLoad(100)
      }
      setLoad(count++)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (load === 100) {
      toast.custom(t => (
        <h2
          onClick={() => toast.dismiss(t.id)}
          className={`transition-all text-xl md:text-3xl lg:text-6xl cursor-pointer
      ${t.visible ? 'animate-appearance-in' : 'animate-appearance-out'}
      `}>
          Hey, you. You{`'`}re finally awake.
        </h2>
      ))
    }
  }, [load])

  return (
    <div className='h-screen w-screen text-4xl font-[Cinzel] bg-cover bg-[url("/img/day/5/awake_mobile.png")] md:bg-[url("/img/day/5/awake_desktop.png")]'>
      <main
        className='h-full w-full grid place-items-center text-6xl md:text-8xl'
        style={{
          backdropFilter: `blur(${100 - load}px)`,
          backgroundColor: `rgba(0,0,0,${(100 - load) / 100})`
        }}>
        <div
          className='h-1 bg-white fixed top-0'
          style={{
            width: `${load}%`,
            transition: `${load < 100 || 'all 0.2s ease-in-out'}`,
            translate: `0 ${load < 100 || '-100%'}`
          }}
        />
        <h1 className={`transition-opacity select-none ${load < 100 || 'opacity-0'}`}>
          <span className='w-[1.5em] inline-block text-end'>{load}</span>%
        </h1>
      </main>
      <Toaster position='bottom-center' />
    </div>
  )
}
