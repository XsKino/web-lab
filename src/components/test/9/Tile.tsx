import React from 'react'
import { Button } from '@nextui-org/react'

export default function Tile({
  children,
  sound,
  volume = 0.2
}: {
  children: React.ReactNode
  sound: string
  volume?: number
}): JSX.Element {
  try {
    const audio = new Audio(sound)
    audio.volume = volume

    const handleClick = (): void => {
      audio.currentTime = 0
      audio
        .play()
        .then(() => {
          console.log('played', sound)
          audio.currentTime = 0
        })
        .catch(err => {
          console.log(err)
        })
    }
    return (
      <Button
        color='primary'
        variant='ghost'
        onClick={handleClick}
        isIconOnly
        className='w-full h-full text-[6vmin]'>
        {children}
      </Button>
    )
  } catch (err) {
    console.log(err)

    return (
      <div className='border border-red-500 rounded-md text-red-500 text-[7vmin] grid place-items-center rotate-90'>
        <div className='border border-red-500 border-b-transparent rounded-full p-[3vmin] animate-spinner-ease-spin' />
      </div>
    )
  }
}
