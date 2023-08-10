import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: {
        index: './src/index.ts',
      },
      formats: ['es'],
      name: 'jh-ui',
    },
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        chunkFileNames: 'common/[name].js',
        entryFileNames: (file) => {
          if (file.name === 'index') {
            return 'index.js'
          } else {
            return '[name]/index.js'
          }
        },
        globals: {
          vue: 'Vue',
        },
      }
    }
  },
  plugins: [vue(), dts()],
})
