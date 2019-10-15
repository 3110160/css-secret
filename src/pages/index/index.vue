<template>
  <div class="home">
    <h1 class="title">CSS SECRET</h1>
    <div>{{list}}</div>
    <ul class="box">
      <li v-for="i of listConfig" :key="i">
        <router-link :to="i.path">{{i.title}}</router-link>
      </li>
      <!-- <li v-for="i of (49-listConfig.length)" :key="i">
        <a>半透明边框</a>
      </li> -->
    </ul>
  </div>
</template>

<script>
import listConfig from "./list.config.js";
export default {
  data() {
    return {
      listConfig: [],
    };
  },
  props:{
    list:''
  }
};
</script>

<style scoped lang='less'>
.home {
  overflow: hidden;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  background-color: black;
  .title {
    text-align: center;
    color: #ff10d5;
    font-size: 45px;
  }
  .box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    li {
      list-style: none;
      width: 115px;
      height: 56px;
      background-color: #ff5ae3f0;
      margin: 10px;
      box-shadow: 0px 1px 16px 2px #ffd1f7c4;
      border-radius: 8px;
      box-sizing: border-box;
      padding: 10px;
      a {
        display: block;
        text-align: center;
        color: white;
        line-height: 24px;
        height: 100%;
        text-decoration: none;
      }
    }
  }
}
</style>
