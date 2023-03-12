import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/github-pages-demo1/dist/',
  plugins: [vue()]
})
