<template>
  <div class="slider-img" :style="computedStyle">
    <a href="javascript:;" :style="bgImg"></a>
  </div>
</template>

<script>
export default {
  name: 'SliderItem',
  props: {
    no: {
      type: Number,
      default: 1
    },
    imgurl: {
      type: String,
      default: ''
    }
  },
  computed: {
    computedStyle() {
      const currentSliderImgNo = this.$store.getters.getCurrentSliderImgNo;
      if (currentSliderImgNo === this.no) {
        return {
          opacity: 1
        };
      } else {
        return {
          opacity: 0
        };
      }
    },
    bgImg() {
      return {
        backgroundImage: 'url(' + this.imgurl + ')'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.slider-img {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.6s cubic-bezier(0.43, 0.24, 0.45, 0.74) all;
  a {
    display: block;
    height: 100%;
    background-color: #4396faf0;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
  }
}
</style>
