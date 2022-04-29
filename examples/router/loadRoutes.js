const routerModules = import.meta.globEager('./modules/*.js')
const menuRoutes = []
// console.log('所有路由模块',routerModules)
for (const path in routerModules) {
  menuRoutes.push(routerModules[path].default)
}

export default menuRoutes
