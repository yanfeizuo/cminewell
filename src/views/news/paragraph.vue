<template>
  <div class="paragraph">
    <news-detail
      :show="show"
      :detail="data.details"
      :title="data.title"
      :publish-date="data.publishDate"
      @detailToggle="detailToggle"
    ></news-detail>
    <div class="title">
      {{ data.title }}
      <i class="newFlag" v-if="data.newFlag">NEW</i>
    </div>
    <div class="keyWords">{{ data.keyWords }}</div>
    <div class="detailBtn">
      <el-button type="text" @click="detailToggle(true)">详情</el-button>
    </div>
  </div>
</template>

<script>
import NewsDetail from './details';
export default {
  name: 'Paragraph',
  components: {
    NewsDetail
  },
  props: ['data'],
  data() {
    return {
      show: false
    };
  },
  methods: {
    detailToggle(val) {
      this.show = val;
    }
  }
};
</script>

<style lang="scss" scoped>
.paragraph {
  position: relative;
  margin-top: 10px;
  .title {
    font-size: 16px;
    font-weight: 700;
    .newFlag {
      position: absolute;
      top: -3px;
      margin-left: 5px;
      font-size: 8px;
      font-weight: normal;
      color: #fff;
      background-color: red;
      padding: 0 5px 0 0;
      border-radius: 4px;
    }
  }
  .keyWords {
    text-indent: 2em;
    padding: 20px 30px 20px 10px;
    border-bottom: 1px solid #f5f5f5;
  }
  .detailBtn {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
