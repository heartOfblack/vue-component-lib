import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import Demo from './demoCompsInstall'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'highlight.js/styles/stackoverflow-dark.css' // 高亮stackoverflow风格，其他样式参考 https://highlightjs.org/static/demo/，样式文件均在highlight.js目录下
import '@/assets/style/index.scss'

Vue.use(Element)
Vue.use(Demo)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
