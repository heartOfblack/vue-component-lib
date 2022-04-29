// 全局注册所有的DEMO示例组件

export default Vue => {
  const allDemoComps = import.meta.globEager('./views/**/*.vue')
  for (const path in allDemoComps) {
    if (/hdc.+\/hdc.+/.test(path)) { // 注册包含hdc字符串的文件夹下面的所有hdc开头的vue文件
      Vue.component(allDemoComps[path].default.name, allDemoComps[path].default)
    }
  }
}
