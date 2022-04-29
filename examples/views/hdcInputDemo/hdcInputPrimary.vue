<template>
<div class=''>
我是input组件
<el-input v-model="text" placeholder="输入"></el-input>
</div>
</template>

<script>
export default {
  name: 'HdcInputPrimary',
  data () {
    return {
      text: ''
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
