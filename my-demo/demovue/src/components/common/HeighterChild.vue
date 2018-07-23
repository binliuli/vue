<template>
  <div class="hello">
    <h4>儿子组件</h4>
    <HeighterChildChild></HeighterChildChild>
  </div>
</template>

<script>
import HeighterChildChild from "components/common/HeighterChildChild";

export default {
  name: "HeighterChild",
  components: { HeighterChildChild },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
