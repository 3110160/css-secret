<template>
  <demoLayout>
    <div class="box"></div>
    <codetemplate/>
  </demoLayout>
</template>
<script>
import codetemplate from './demo1.md'
export default {
  components:{
    codetemplate,
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 100px;
  height: 100px;
  background-clip: border-box;
  border: 20px dashed #58a;
  background: #fff;
}
</style>
