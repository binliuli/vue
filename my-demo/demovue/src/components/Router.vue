<template>
  <div class="hello">
    <h1>路由守卫</h1>
    <router-link to="/router?typ=s">跳转子路由1</router-link>
    <router-link to="/router/7">跳转子路由1</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Router",
  data() {
    return {
      msg: "Welcome to hello list"
    };
  },
  computed: {
    count() {}
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
