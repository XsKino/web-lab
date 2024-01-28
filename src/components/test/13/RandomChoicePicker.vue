<script setup>
import './randomChoicePicker.css'
import { ref } from 'vue'
import confetti from 'canvas-confetti'
import successAudio from '@public/sound/test/13/success.mp3'
import clickAudio from '@public/sound/test/13/metronome.flac'

const tags = ref([])
const tag = ref('')
const activeIndex = ref(null)
const selectedIndex = ref(null)
const isSelecting = ref(false)
const addTags = newTags => {
  newTags.forEach(newTag => {
    if (newTag !== '' && !tags.value.includes(newTag)) {
      tags.value.push(newTag)
    }
  })
}
const removeTag = index => {
  tags.value.splice(index, 1)
  resetStyles()
  isSelecting.value = false
}
const clearTags = () => {
  tags.value = []
  tag.value = ''
  activeIndex.value = null
  selectedIndex.value = null
  isSelecting.value = false
}

const resetStyles = () => {
  const $tags = document.querySelectorAll('.choice-tag')
  $tags.forEach($tag => {
    $tag.classList.remove('tag-active')
    $tag.classList.remove('tag-selected')
  })
}

const selectRandomTag = async () => {
  isSelecting.value = true
  resetStyles()

  activeIndex.value = null
  selectedIndex.value = null
  let randomIndex = null
  for (let step = 20; step > 0; step--) {
    if (isSelecting.value === false) return
    if (randomIndex !== null) {
      const $previousTag = document.getElementById(`tag-${randomIndex}`)
      $previousTag.classList.remove('tag-active')
    }

    const click = new Audio(clickAudio)
    click.play()
    let randomNumber = Math.floor(Math.random() * tags.value.length)
    while (randomNumber === randomIndex) {
      randomNumber = Math.floor(Math.random() * tags.value.length)
    }

    randomIndex = randomNumber
    activeIndex.value = randomIndex
    tag.value = tags.value[randomIndex]
    const $activeTag = document.getElementById(`tag-${randomIndex}`)
    $activeTag.classList.add('tag-active')

    await new Promise(resolve =>
      // simulate a variance in the time it takes to select a tag
      setTimeout(resolve, (1000 + (Math.random() * 500 + Math.random(800) + Math.random(3000)) / 3) / step)
    )
  }

  const $selectedTag = document.getElementById(`tag-${randomIndex}`)
  $selectedTag.classList.remove('tag-active')
  $selectedTag.classList.add('tag-selected')
  selectedIndex.value = randomIndex

  const success = new Audio(successAudio)
  success.play()

  return $selectedTag
}

const randomize = async () => {
  if (tags.value.length < 2) return

  const $selectedTag = await selectRandomTag()
  const centerX = $selectedTag.offsetLeft + $selectedTag.offsetWidth / 2
  const centerY = $selectedTag.offsetTop + $selectedTag.offsetHeight / 2

  confetti({
    particleCount: 100,
    spread: 360,
    startVelocity: 5,
    decay: 0.98,
    shapes: ['circle'],
    gravity: 0,
    ticks: 100,
    colors: ['#ffffff5', '#fff1', '#fffe', '#fff1', '#ffffff5'],
    origin: {
      x: centerX / window.innerWidth,
      y: centerY / window.innerHeight
    }
  })

  isSelecting.value = false
}
const getTagsFromInput = () => {
  const input = document.querySelector('input')
  const newTags = input.value.split(',').map(tag => tag.trim())
  input.value = ''
  return newTags
}

const handleSubmit = event => {
  event.preventDefault()
  const newTags = getTagsFromInput()
  addTags(newTags)
}
</script>

<template>
  <div class="w-full md:w-fit md:min-w-[360px] flex flex-col gap-6">
    <div class="flex gap-6 justify-center items-center">
      <button
        title="Randomize"
        aria-label="Choose a random tag"
        v-bind:disabled="tags.length < 2 || isSelecting"
        @click="randomize"
        class="p-3 px-6 rounded-full bg-transparent hover:bg-white/20 focus:outline-white/20 outline-2 outline-none opacity-50 hover:opacity-100 transition-all [transition-duration:0.1s] disabled:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrows-shuffle"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 4l3 3l-3 3" />
          <path d="M18 20l3 -3l-3 -3" />
          <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
          <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
        </svg>
      </button>
      <button
        v-bind:disabled="tags.length < 1"
        title="Clear all tags"
        aria-label="Clear all tags"
        @click="clearTags"
        class="p-3 px-6 rounded-full bg-transparent hover:bg-white/20 focus:outline-white/20 outline-2 outline-none opacity-50 hover:opacity-100 transition-all [transition-duration:0.1s] disabled:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-eraser"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" />
          <path d="M18 13.3l-6.3 -6.3" />
        </svg>
      </button>
    </div>
    <form class="flex gap-3 justify-center items-center" @submit="handleSubmit">
      <input
        id="input"
        type="text"
        class="flex-1 bg-white/10 outline-none outline-2 outline-transparent hover:bg-white/20 focus:outline-white/20 rounded-full px-4 py-2 text-sm sm:text-medium transition-all placeholder-white/50"
        placeholder="Comma, separated, tags" />
      <button
        type="submit"
        class="aspect-square rounded-full p-2 bg-white/10 outline-none outline-2 outline-transparent hover:bg-white/20 focus:outline-white/20 text-sm sm:text-medium transition-all">
        <i class="size-[1em] grid place-content-center not-italic -translate-x-[0.15em] translate-y-[0.15em]"
          >↵</i
        >
      </button>
    </form>
    <section class="min-h-[25vh]">
      <div class="flex flex-wrap justify-center items-start gap-2">
        <div
          v-for="(tag, index) in tags"
          :id="`tag-${index}`"
          class="bg-white/10 rounded-full p-[2px] text-xs sm:text-sm group select-none text-white/75 choice-tag grid place-content-center relative overflow-hidden">
          <div class="absolute tag-bg aspect-square -inset-20 animate-spin"></div>
          <div class="p-1 pl-2 rounded-full z-20">
            <div
              class="flex gap-[0.5em] items-center transition-all translate-x-[0.6em] group-hover:translate-x-0">
              <span>{{ tag }}</span>
              <button
                @click="removeTag(index)"
                class="aspect-square rounded-full size-[1em] hover:bg-white/10 text-sm sm:text-medium transition-all grid place-content-center opacity-0 group-hover:opacity-100">
                <i class="size-[0.4em] grid place-content-center not-italic text-[0.5em]">✖</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
