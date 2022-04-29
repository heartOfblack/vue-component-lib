<template>
  <div class=''>
    <el-button type="primary" size="default" @click="buttonClick">
      <slot>确认</slot>
    </el-button>

  </div>
</template>
<script>
export default {
  name: 'HdcButton',
  props: {
    clickFun: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  methods: {
    buttonClick () {
      this.clickFun()
      // console.log(1)
    }
  }
}
</script>
<style scoped>

</style>
