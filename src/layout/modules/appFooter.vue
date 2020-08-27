<template>
  <div class="h-footer">
    <div class="inner_c">
      <p class="claim">
        <span>Copyright ©2020-{{ institute }}</span>
        <a href="http://www.beian.miit.gov.cn/" target="_blank"
          ><span>{{ recordInCop }}</span></a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      institute: '湖北铭伟医疗科技有限公司',
      recordInCop: '鄂ICP备20014256号'
    };
  }
};
</script>

<style lang="scss" scoped>
.h-footer {
  background-color: #000;
  color: #818496;
  .claim {
    height: 50px;
    line-height: 50px;
    text-align: center;
    a {
      color: #818496;
    }
    span {
      padding: 0 9px;
      border-right: 1px solid #818496;
      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
