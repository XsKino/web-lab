import { nextui } from '@nextui-org/react'
import { darkThemeColors, lightThemeColors } from './src/styles/colorThemes'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        dark: {
          colors: darkThemeColors
        },
        light: {
          colors: lightThemeColors
        }
      }
    })
  ]
}
