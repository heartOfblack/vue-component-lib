import {
  defineConfig
} from 'vite'
import {
  resolve
} from 'path'
import {
  createVuePlugin
} from 'vite-plugin-vue2' // vue2版本
import Markdown from 'vite-plugin-md' // 解析markdown文件
import hljs from 'highlight.js'

export default defineConfig({
  plugins: [
    createVuePlugin({ include: [/\.vue$/, /\.md$/] }),
    Markdown({
      exposeFrontmatter: false, // 兼容vue2，definedExpose警告问题
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true
      },
      markdownItSetup (md) { // 使用markdown-it的插件
        md.use(require('markdown-it-highlightjs'), { inline: true, hljs }) // 直接使用插件，不再自定义highlight风格
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve('examples'),
      '@pck': resolve('packages')
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html'
    },
    chunkSizeWarningLimit: 1000

  },
  css: {
    postcss: {
      plugins: [{
        postcssPlugin: 'internal:charset-removal',
        AtRule: {
          charset: (atRule) => {
            if (atRule.name === 'charset') {
              atRule.remove()
            }
          }
        }
      }]
    }
  }
})
