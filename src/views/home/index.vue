<template>
  <div class="main-container">
    <div class="banner-box">
      <div class="slider-list">
        <slider-item v-for="(item, index) in sliderImgList" :key="index" :no="index + 1" :imgurl="item.img"></slider-item>
      </div>
      <rectangles></rectangles>
    </div>

    <div class="inner_c knowme">
      <div class="knowme-title">
        <h3>铭伟医疗</h3>
        <button class="text-button" @click="moreAbout">了解更多<i class="el-icon-caret-right"></i></button>
      </div>
      <div class="knowme-bd">
        <p v-for="(item, index) in introduction" :key="index"><i class="el-icon-star-on"></i>{{ item }}</p>
      </div>
    </div>

    <div class="inner_c latest_prod">
      <div class="latest_prod_title">
        <h3>最新产品</h3>
        <button class="text-button" @click="moreProd">了解更多<i class="el-icon-caret-right"></i></button>
      </div>
      <div class="latest_prod_bd">
        <div v-for="(item, index) in lastestProds" :key="index">
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderItem from './sliderItem';
import Rectangles from './rectangles';
import { home } from '../../config/home';
export default {
  name: 'Home',
  components: {
    SliderItem,
    Rectangles
  },
  data() {
    return {
      timer: null,
      introduction: home.introduction,
      sliderImgList: home.homeBanners,
      lastestProds: home.productsList
    };
  },
  created() {
    this.$store.commit('setTotalSliderImgs', this.sliderImgList.length);
    this.timer = setInterval(this.changeCurrentSliderImgNo, 5000);
  },
  mounted() {
    console.log(this.introduction);
  },
  methods: {
    changeCurrentSliderImgNo() {
      this.$store.commit('setCurrentSliderImgNo');
    },
    moreAbout() {
      this.$router.push('about');
    },
    moreProd() {
      this.$router.push('products');
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.banner-box {
  position: relative;
  height: 560px;
  .slider-list {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
}
.knowme {
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 0 20px 10px rgba(220, 220, 220, 0.3);
  .knowme-title {
    padding: 0 20px;
    height: 60px;
    overflow: hidden;
    border-bottom: 1px solid #dbe1e7;
    h3 {
      float: left;
      font-size: 16px;
      height: 100%;
      line-height: 70px;
      i {
        padding-right: 6px;
        color: #4396faf0;
      }
    }
    button {
      line-height: 70px;
      float: right;
      &:hover {
        color: #4396faf0;
      }
    }
  }
  .knowme-bd {
    padding: 20px;
    p {
      text-align: center;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 3px;
      i {
        color: #f6e6e6;
      }
    }
  }
}
.latest_prod {
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 0 20px 10px rgba(220, 220, 220, 0.3);
  .latest_prod_title {
    padding: 0 20px;
    height: 60px;
    overflow: hidden;
    border-bottom: 1px solid #dbe1e7;
    h3 {
      float: left;
      font-size: 16px;
      height: 100%;
      line-height: 70px;
      i {
        padding-right: 6px;
        color: #4396faf0;
      }
    }
    button {
      line-height: 70px;
      float: right;
      &:hover {
        color: #4396faf0;
      }
    }
  }
  .latest_prod_bd {
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    & > div {
      -webkit-transition: all 0.2s linear;
      transition: all 0.2s linear;
      width: 250px;
      height: 250px;
      // border-radius: 50%;
      overflow: hidden;
      // box-shadow: 0px 8px 20px 5px #dbe1e7;
      cursor: pointer;
      &:hover {
        -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        -webkit-transform: translate3d(0, -2px, 0);
        transform: translate3d(0, -2px, 0);
      }
      img {
        width: 250px;
        height: 250px;
      }
    }
  }
}
</style>
