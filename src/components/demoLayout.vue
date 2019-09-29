<template>
  <div class="demo" v-highlight>
    <div class="demo-title">{{title || tit}}</div>
    <div class="demo-content">
      <slot/>
    </div>
    <pre><slot name="code"></slot></pre>
  </div>
</template>
<script>
export default {
  name: "demoLayout",
  data() {
    return {
      tit: ""
    };
  },
  props: {
    title: String
  },
  created() {
    if (!this.title) {
      this.tit = this.$route.name;
    }
  }
};
</script>
<style lang="less" scoped>
.demo {
  .demo-title{
    line-height: 60px;
    font-size: 24px;
  }
  width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
}
</style>


