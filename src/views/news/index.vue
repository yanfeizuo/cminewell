<template>
  <div class="main-container">
    <div class="news-banners">
      <a href="javascript:;" :style="backImg"></a>
    </div>
    <div class="inner_c news-body">
      <paragraph-com v-for="(item, index) in news" :key="index" :data="item"></paragraph-com>
    </div>
  </div>
</template>

<script>
import { news } from '../../config/news';
import ParagraphCom from './paragraph';
export default {
  name: 'New',
  components: {
    ParagraphCom
  },
  data() {
    return {
      banner: news.banner,
      news: news.news
    };
  },
  computed: {
    backImg() {
      return {
        backgroundImage: 'url(' + this.banner.img + ')'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.news-banners {
  height: 400px;
  a {
    display: block;
    height: 100%;
    background-color: #03222f;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
  }
}
.news-body {
  box-sizing: border-box;
  background-color: #fff;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 0 20px 10px rgba(220, 220, 220, 0.3);
  color: #444866;
  letter-spacing: 2px;
}
</style>
