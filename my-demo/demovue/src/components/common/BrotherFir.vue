<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 兄弟组件之间传递数据或方法 -->
    <button v-on:click="sendMsg">点击哥哥组件</button>
    <div class="div1">
      <p>less的样式</p>
      <p class="p1"> less的样式</p>
    </div>
  </div>
</template>

<script>
// 兄弟组件间传递数据，借助eventBus 实现
import bus from "../../assets/eventBus";

export default {
  name: "BrotherFir",
  data() {
    return {
      msg: "哥哥组件"
    };
  },
  methods: {
    // 兄弟组件之间传递数据 =》 方法
    sendMsg() {
      // 发送
      bus.$emit("userDefinedEvent", "这是来自哥哥组件的数据");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~less/base.less';
.div1 {
  p {
    color: @orange;
  }
}
</style>
