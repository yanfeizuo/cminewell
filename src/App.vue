<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  watch: {
    '$route.name'(val) {
      this.redirectHeadNav(val);
    }
  },
  methods: {
    redirectHeadNav(val) {
      this.$store.commit('setCurrentNavByRoute', val);
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: 'microsoft yahei', simsun Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
