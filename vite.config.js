import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        display: resolve(__dirname, "display.html"),
      }
    }
  },
  define: {
    __APP_VERSION__: JSON.stringify(require('./package.json').version),
  }
})
