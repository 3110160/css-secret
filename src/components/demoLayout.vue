<template>
  <div class="demo" v-highlight>
    <div class="demo-title">{{title || otitle}}</div>
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
      otitle: ""
    };
  },
  props: {
    title: String
  },
  created() {
    if (!this.title) {
      this.otitle = this.$route.name;
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


