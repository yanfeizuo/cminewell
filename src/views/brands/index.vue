<template>
  <div class="main-container">
    <div class="brands_banner">
      <a href="javascript:;" :style="backImg"></a>
    </div>
    <div class="inner_c brands-body">
      <div class="container">
        <!-- <div class="img-container c1">
                    <img class="image" :src="bds[0].img" alt="">
                </div>
                <div class="img-container c2">
                    <img class="image" :src="bds[0].img" alt="">
                </div>
                <div class="img-container c3">
                    <img class="image" :src="bds[0].img" alt="">
                </div>
                <div class="img-container c4">
                    <img class="image" :src="bds[0].img" alt="">
                </div>
                <div class="img-container c5">
                    <img class="image" :src="bds[0].img" alt="">
                </div>
                <div class="img-container c6">
                    <img class="image" :src="bds[0].img" alt="">
                </div> -->
        <div v-for="n in 6" :key="n" :class="['img-container', 'c' + n]">
          <img class="image" :src="bds[n - 1].img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { brands } from '../../config/brands';
export default {
  name: 'Brands',
  data() {
    console.log(brands);
    return {
      banners: brands.banner,
      bds: brands.bds,
      expect: brands.expect
    };
  },
  computed: {
    backImg() {
      return {
        backgroundImage: 'url(' + this.banners[0].img + ')'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.brands_banner {
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
.brands-body {
  background-color: #fff;
  margin: 20px auto;
  box-shadow: 0 0 10px 3px #e6e6f64f;
  .container {
    position: relative;
    height: 1000px;
    .img-container {
      position: absolute;
      top: 320px;
      left: 50%;
      cursor: pointer;
      transform: translateX(-50%);
      .image {
        height: 300px;
        width: 346.4px;
        display: block;
      }
    }
    .c1 {
      transform: translateX(-125%) translateY(-150px);
    }
    .c2 {
      transform: translateX(-50%) translateY(-300px);
    }
    .c3 {
      transform: translateX(-125%) translateY(150px);
    }
    .c4 {
      transform: translateX(25%) translateY(-150px);
    }
    .c5 {
      transform: translateX(-50%) translateY(300px);
    }
    .c6 {
      transform: translateX(25%) translateY(150px);
    }
  }
}
</style>
