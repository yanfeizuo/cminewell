<template>
  <div class="container">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './modules/appHeader';
import AppMain from './modules/appMain';
import AppFooter from './modules/appFooter';

export default {
  name: 'Layout',
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  position: relative;
}
</style>
