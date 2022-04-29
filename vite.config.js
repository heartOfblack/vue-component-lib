import { defineConfig } from 'vite'
// import {resolve} from 'path'
import { createVuePlugin } from 'vite-plugin-vue2' // vue2版本

export default defineConfig({
  plugins: [createVuePlugin()],
  publicDir: false,
  /* resolve: {
      alias: {
        '@': resolve('examples')
      }
    }, */
  build: {
    outDir: 'lib',
    lib: {
      entry: 'packages/index.js',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // external: ['vue','element-ui']
    }

  }
})
