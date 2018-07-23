<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这是子组件接受父组件的值：{{message}}</h2>

    <!-- 子组件往父组件传值 通过方法 $emit 发送 -->
    <button v-on:click="isClick">子组件给父组件传值</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["message"], //接受父组件的方法 可通过this改变值
  /* props: {
    message: string，
    required: true //true 必须传值  message
  }, */
  data() {
    return {
      msg: "我是子组件"
    };
  },
  mounted() {
    console.log(this.message);
    console.log(this.$parent.text,"获取父组件的值")
    // 判断父组件传过来的值存不存在
    if (this.message) {
      this.msg = "子组件已传过数据来了";
    }
  },
  methods: {
    isClick() {
      let data = {
        a: "子组件传过来的值"
      };
      // 子组件往父组件传值(方法) ievent是事件 后边的是数据
      this.$emit("ievent", data, "lalal");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
