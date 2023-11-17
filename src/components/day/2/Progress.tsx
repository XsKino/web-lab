import React, { useState } from 'react'

const TbPlayerTrackNextFilled = ({ className }: { className?: string }): JSX.Element => (
  <svg
    stroke='currentColor'
    fill='none'
    strokeWidth='2'
    viewBox='0 0 24 24'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={`h-[1em] ${className}`}
    xmlns='http://www.w3.org/2000/svg'>
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path
      d='M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z'
      strokeWidth='0'
      fill='currentColor'></path>
    <path
      d='M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z'
      strokeWidth='0'
      fill='currentColor'></path>
  </svg>
)

const AiFillExperiment = ({ className }: { className?: string }): JSX.Element => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 1024 1024'
    className={`h-[1em] ${className}`}
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M218.9 636.3l42.6 26.6c.1.1.3.2.4.3l12.7 8 .3.3a186.9 186.9 0 0 0 94.1 25.1c44.9 0 87.2-15.7 121-43.8a256.27 256.27 0 0 1 164.9-59.9c52.3 0 102.2 15.7 144.6 44.5l7.9 5-111.6-289V179.8h63.5c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8H264.7c-4.4 0-8 3.6-8 8v51.9c0 4.4 3.6 8 8 8h63.5v173.6L218.9 636.3zm333-203.1c22 0 39.9 17.9 39.9 39.9S573.9 513 551.9 513 512 495.1 512 473.1s17.9-39.9 39.9-39.9zM878 825.1l-29.9-77.4-85.7-53.5-.1.1c-.7-.5-1.5-1-2.2-1.5l-8.1-5-.3-.3c-29-17.5-62.3-26.8-97-26.8-44.9 0-87.2 15.7-121 43.8a256.27 256.27 0 0 1-164.9 59.9c-53 0-103.5-16.1-146.2-45.6l-28.9-18.1L146 825.1c-2.8 7.4-4.3 15.2-4.3 23 0 35.2 28.6 63.8 63.8 63.8h612.9c7.9 0 15.7-1.5 23-4.3a63.6 63.6 0 0 0 36.6-82.5z'></path>
  </svg>
)
const AiFillEnvironment = ({ className }: { className?: string }): JSX.Element => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 1024 1024'
    className={`h-[1em] ${className}`}
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M512 327c-29.9 0-58 11.6-79.2 32.8A111.6 111.6 0 0 0 400 439c0 29.9 11.7 58 32.8 79.2A111.6 111.6 0 0 0 512 551c29.9 0 58-11.7 79.2-32.8C612.4 497 624 468.9 624 439c0-29.9-11.6-58-32.8-79.2S541.9 327 512 327zm342.6-37.9a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z'></path>
  </svg>
)
const AiFillStar = ({ className }: { className?: string }): JSX.Element => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 1024 1024'
    className={`h-[1em] ${className}`}
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
  </svg>
)
const AiFillFire = ({ className }: { className?: string }): JSX.Element => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 1024 1024'
    className={`h-[1em] ${className}`}
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z'></path>
  </svg>
)
const AiFillEye = ({ className }: { className?: string }): JSX.Element => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 1024 1024'
    className={`h-[1em] ${className}`}
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z'></path>
  </svg>
)
const AiFillHeart = ({ className }: { className?: string }): JSX.Element => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 1024 1024'
    className={`h-[1em] ${className}`}
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z'></path>
  </svg>
)
const AiFillRocket = ({ className }: { className?: string }): JSX.Element => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 1024 1024'
    className={`h-[1em] ${className}`}
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8L864 736zM512 352a48.01 48.01 0 0 1 0 96 48.01 48.01 0 0 1 0-96zm116.1 432.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5s-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5z'></path>
  </svg>
)

const steps = [
  {
    icon: <AiFillExperiment />
  },
  {
    icon: <AiFillEnvironment />
  },
  {
    icon: <AiFillStar />
  },
  {
    icon: <AiFillFire />
  },
  {
    icon: <AiFillEye />
  },
  {
    icon: <AiFillHeart />
  },
  {
    icon: <AiFillRocket />
  }
]

const ProgressBar = ({
  className,
  percentage
}: {
  className: string
  percentage: number | null
}): JSX.Element => (
  <svg
    fill='none'
    className={`aspect-square transition-all ${className}`}
    viewBox='-10 -10 130 130'
    style={{
      strokeDasharray:
        percentage != null
          ? `calc(${percentage} * 251.327412 / 100) 9999`
          : '0 20.9415 0 41.883 0 41.883 0 41.883 0 41.883 0 41.883 0 41.883'
    }}>
    <path
      d='m 25.3892626 95.4508497 C 25.3892626 95.4508497 5 82.6142375 5 55 C 5 27.3857625 27.3857625 5 55 5 C 82.6142375 5 105 27.3857625 105 55 C 105 82.6142375 84.3892626 95.4508497 84.3892626 95.4508497'
      strokeWidth={percentage != null ? '6' : '3'}
      strokeLinecap='round'></path>
  </svg>
)

export default function Progress(): JSX.Element {
  const n = steps.length
  const [progress, setProgress] = useState(0)
  const percentage = (progress / (n - 1)) * 100
  const circumference = 360 * 0.8

  const addOne = (): void => {
    setProgress(() => (progress + 1) % n)
  }

  const onStepPress = (index: number) => () => {
    setProgress(index)
  }
  return (
    <div className='h-screen grid place-items-center relative'>
      <ProgressBar className='absolute stroke-white/5 -z-10 h-[80vmin]' percentage={null} />
      <ProgressBar className={`absolute stroke-zinc-700 h-[80vmin]`} percentage={percentage} />

      {steps.map((step, index) => {
        const angle = circumference / 2 - ((n - 1 - index) * circumference) / (n - 1)
        const done = index <= progress
        return (
          <button
            onClick={onStepPress(index)}
            onDragEnter={e => {
              e.preventDefault()
              e.stopPropagation()
              onStepPress(index)()
            }}
            onDragStart={e => {
              e.preventDefault()
              e.stopPropagation()
              onStepPress(index)()
            }}
            key={`step-${index}`}
            id={`step-${index}`}
            className='absolute step aspect-square h-[25vmin] rounded-full grid place-items-center transition-all'
            style={{
              transform: `rotate(${angle}deg) translateY(-30.7692vmin) rotate(calc(0deg - ${angle}deg))`
            }}>
            <span
              className={`text-lg grid place-items-center transition-all p-2 border-zinc-700 rounded-full aspect-square h-14 w-14
              ${done ? 'bg-zinc-700 opacity-100 border-8 md:scale-150' : 'opacity-40 border-0'}
            `}
              style={
                !done
                  ? {}
                  : {
                      boxShadow: 'inset -0.2rem 0.2rem 5px #00000022, inset 0.2rem -0.2rem 5px #ffffff22'
                    }
              }>
              {step.icon}
            </span>
          </button>
        )
      })}

      <button
        onClick={addOne}
        className='z-10 aspect-square h-20 rounded-full flex items-center justify-center text-black/30 text-4xl'
        style={{
          boxShadow:
            'inset -0.2rem 0.2rem 5px #00000022, inset 0.2rem -0.2rem 5px #ffffff12, -0.2rem 0.2rem 15px #00000062, 0.2rem -0.2rem 15px #ffffff12'
        }}>
        <TbPlayerTrackNextFilled />
      </button>
    </div>
  )
}
