<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这是弟弟组件默认值：{{message}}</h2>
    <p>sass的样式</p>
    <p class="p1">sass样式二</p>
  </div>
</template>

<script>
// 兄弟组件之间传递数据  借助 eventBus   注意：引入
import bus from "../../assets/eventBus";

export default {
  name: "BrotherTwo",
  data() {
    return {
      msg: "弟弟组件",
      message: "默认值"
    };
  },
  mounted() {
    // 兄弟组件接收传来的数据或方法 $on
    bus.$on("userDefinedEvent", msg => {
      this.message = msg;
    });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import  "../../common/scss/base";
.hello{
  p{
    color: pink;
  }
}
</style>
