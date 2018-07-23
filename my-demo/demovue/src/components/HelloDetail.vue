<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>hello detail</h2>
  </div>
</template>

<script>
export default {
  name: "HelloDetail",
  data() {
    return {
      msg: "详情页"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
