<template>
  <el-menu :router="true" :default-active="defaultMenu" class="menu-list">
  <el-menu-item v-for="item in menuRoutes" :index="item.path" :key="item.path" :route="{path:item.path}">
  {{item.meta.name}}
  <!-- <router-link :to="{path: item.path}">{{item.meta.name}}</router-link> -->
  </el-menu-item>
  </el-menu>
</template>

<script>
import menuRoutes from '@/router/loadRoutes'
export default {
  data () {
    return {
      defaultMenu: menuRoutes[0].path || '', // 默认的菜单
      menuRoutes // 加载的路由信息
    }
  }
}
</script>
<style lang='scss' scoped>
.menu-list{
  height: 100%;
}
</style>
