import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'
import vue from '@astrojs/vue'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), vue(), svelte(), tailwind()]
})
