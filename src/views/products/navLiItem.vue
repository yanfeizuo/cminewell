<template>
  <li :class="computedClass" @click="clickThis">
    <i :class="['front', data.prefixIcon]"></i> {{ data.label }}<i :class="['after', data.suffixIcon]"></i>
  </li>
</template>

<script>
export default {
  name: 'NavLiItem',
  props: {
    data: Object
  },
  data() {
    return {};
  },
  computed: {
    computedClass() {
      const curr = this.$store.getters.getProductCurrNav;
      return {
        prod_curr: this.data.id == curr
      };
    }
  },
  methods: {
    clickThis() {
      this.$store.commit('setProductCurrNav', this.data.id);

      this.$emit('change-prod-list', this.data.id);
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  li {
    position: relative;
    line-height: 50px;
    border-bottom: 1px solid #dbe1e7;
    padding-left: 20px;
    cursor: pointer;
    &:hover {
      color: #4396faf0;
    }
    &.prod_curr {
      color: #4396faf0;
    }
    .front {
      color: #4396faf0;
    }
    .after {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
    }
  }
}
</style>
