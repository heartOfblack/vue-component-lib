<template>
  <div class=''>
  <hdc-button :clickFun="clickFun">我是HdcButtonPrimary</hdc-button>
  </div>
</template>

<script>
import hdcButton from '@pck/hdcButton/components/index.vue' // 直接引入示例所需要的组件

export default {
  name: 'HdcButtonPrimary', // 名称以 Hdc组件名+Demo 用以区分是工具组件还是demo示例组件
  components: {
    hdcButton
  },
  data () {
    return {}
  },
  methods: {
    clickFun () {
      alert('我是HdcButtonPrimary')
    }
  }

}
</script>
<style lang='scss' scoped>

</style>
