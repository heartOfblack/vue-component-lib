<template>
  <el-container class="container">
    <el-header height="80px">
    <span class="title">储能云UI库</span>
    </el-header>
    <el-container>
      <el-aside width="270px">
      <MenuList></MenuList>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import MenuList from './MenuList.vue'
export default {
  name: 'LayoutIndex',
  components: {
    MenuList
  },
  data () {
    return {}
  }
}
</script>
<style lang='scss' scoped>
.container{
  padding: 0 80px;
  .el-header{
    border-bottom: 1px solid black;
    .title{
      font-size: 24px;
      line-height: 80px;
    }
  }
}
</style>
