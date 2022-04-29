import HdcButton from './hdcButton'

export {
  HdcButton
}

// 全部注册
export default Vue => {
  const routerModules = import.meta.globEager('./**/index.js')

  for (const path in routerModules) {
    Vue.use(routerModules[path].default)
  }
}
