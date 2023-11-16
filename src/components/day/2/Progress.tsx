import React, { useState } from 'react'
import { TbPlayerTrackNextFilled } from 'react-icons/tb'
import {
  AiFillExperiment,
  AiFillEnvironment,
  AiFillStar,
  AiFillFire,
  AiFillEye,
  AiFillHeart,
  AiFillRocket
} from 'react-icons/ai'
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
