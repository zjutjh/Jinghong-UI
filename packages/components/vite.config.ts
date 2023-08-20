import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue';
import libCss from 'vite-plugin-libcss';
export default defineConfig({
  build: {
    // cssCodeSplit: true,
    rollupOptions: {
      external: ['vue'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: 'dist',
        }
      ]
    },
    lib: {
      entry: 'src/index.ts',
      name: 'jinghong-ui',
    },
  },
  plugins: [vue(),
  dts({
    entryRoot: './src',
    tsconfigPath: 'tsconfig.json',
    outDir: 'dist',
  }),
  libCss(),
  ],
})
