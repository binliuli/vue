<template>
  <div class="hello">
    <h4>孙子组件</h4>
    <h5>这是孙子拿爷爷的数据，跨级获取数据：{{msg.value}}</h5>
    <h5>这是孙子拿爷爷的数据，跨级获取数据：{{msg.value2}}</h5>
  </div>
</template>

<script>
export default {
  name: "HeighterChildChild",
  inject: ["yeye","data"],
  data() {
    return {
      msg: this.data
    };
  },
  computed: {},
  mounted() {
    console.log(this.data)
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
