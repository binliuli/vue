<template>
  <div class="hello">
    <h4>高级组件</h4>
    <input type="text" v-model="value">
    <input type="text" v-model="value2">
    <HeighterChild></HeighterChild>
  </div>
</template>

<script>
import HeighterChild from "components/common/HeighterChild";

export default {
  name: "Heighter",
  components: { HeighterChild },
  provide() {
    const data = {};
    Object.defineProperty(data, "value", {
      get: () => this.value,
      enumerable: true
    });
     Object.defineProperty(data, "value2", {
      get: () => this.value2,
      enumerable: true
    });
    return { yeye: this, data };
  },
  data() {
    return {
      value: "1234",
      value2:'33'
    };
  },
  computed: {},
  mounted() {
    
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
