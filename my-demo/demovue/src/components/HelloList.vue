<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这是页面对应id:{{id}}</h2>
    <!-- v-bind 父组件往子组件传数据    v-on:ievent="ievent" 当前父组件获取子组件的方法（子组件往父组件传）-->
    <Child v-bind:message="message" v-on:ievent="ievent"></Child>
    <h3 v-if="childData">这是子组件传过来的值：{{childData[1]}}</h3>
    <h3>redux更新的数据：{{count ? count[0] : '无' }}</h3>
  </div>
</template>

<script>
// 引入子组件 切记  components:{}
import Child from "./common/Child";

export default {
  props:['id'],
  name: "HelloList",
  components: { Child }, //子组件
  data() {
    return {
      msg: "Welcome to hello list",
      // id: null,
      message: "jjjj",
      childData: "",
      text: {
        name: "父组件的值"
      }
    };
  },
  computed: {
    count() {
      return this.$store.state.newData;
    }
  },
  mounted() {
    console.log(this.id)
    /* setTimeout(() => {
      this.text.name = "父组件传给子组件的值";
    },2000);
    console.log(this.$route.params.id);
    this.id = this.$route.params.id; */
    this.message = "我是父组件传过来的值";
  },
  methods: {
    // 父组件拿子组件的方法 数据
    ievent(...data) {
      console.log("allData", data);
      this.childData = data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
