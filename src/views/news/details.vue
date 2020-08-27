<template>
  <el-dialog title="详情" :visible.sync="isshow" width="900">
    <div class="newTitle">{{ title }}</div>
    <div class="publishDate">{{ publishDate }}</div>
    <div class="news-detail">
      <p class="para" v-for="(item, index) in detail" :key="index">
        <template v-if="item.isLetter">
          <span class="paraspan">{{ item.cont }}</span>
        </template>
        <template v-else>
          <img class="image" :src="item.cont" alt="" />
        </template>
      </p>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'NewsDetail',
  props: ['detail', 'show', 'title', 'publishDate'],
  computed: {
    isshow: {
      get() {
        return this.show;
      },
      set() {
        this.$emit('detailToggle', false);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.news-detail {
  .para {
    padding: 10px;
    .paraspan {
      font-size: 16px;
      display: block;
      text-indent: 2em;
    }
    .image {
      width: 100%;
    }
  }
}
.newTitle {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #000;
}
.publishDate {
  text-align: center;
  padding: 10px;
}
</style>
