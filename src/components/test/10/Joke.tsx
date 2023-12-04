/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from '@nextui-org/button'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const colors = [
  '#d85555',
  '#d87c55',
  '#d8a455',
  '#d8cb55',
  '#bed855',
  '#a4d855',
  '#8ad855',
  '#70d855',
  '#55d855',
  '#55d870',
  '#55d88a',
  '#55d8a4',
  '#55d8be',
  '#55bed8',
  '#55a4d8',
  '#558ad8',
  '#5570d8',
  '#5555d8',
  '#7055d8',
  '#8a55d8',
  '#a455d8',
  '#be55d8',
  '#d855be',
  '#d855a4',
  '#d8558a',
  '#d85570'
]

export default function Joke(): JSX.Element {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)

  const getJoke = async (): Promise<void> => {
    const $root = document.documentElement
    const color = colors[Math.floor(Math.random() * colors.length)]
    $root.style.setProperty('--color', color)

    setLoading(true)

    const { data } = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    })
    setJoke(data.joke)

    setLoading(false)
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getJoke()
  }, [])

  return (
    <>
      <p className='text-xl md:text-4xl text-[#333]'>{joke}</p>
      <Button
        size='lg'
        radius='full'
        isIconOnly
        onClick={getJoke}
        className='text-2xl bg-[--color] transition-colors duration-1000 text-white p-10'>
        {loading ? <span className='animate-spinner-linear-spin'>⏳</span> : '🤣'}
      </Button>
    </>
  )
}
