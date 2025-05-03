import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2,
			TTR_FALSE_VALUE: false // Add this line to disable the compat behavior
          }
        }
      }
    })
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': '@vue/compat'  // Add this line to use the compat build
    },
  },
});


