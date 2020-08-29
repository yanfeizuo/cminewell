<template>
  <div class="main-container">
    <div class="brands_banner">
      <a href="javascript:;" :style="backImg"></a>
    </div>
    <div class="inner_c about-body">
      <div class="container">
        <div class="introduction">
          <div class="title">{{ introduction.title }}</div>
          <span class="content">
            <p class="para" v-for="(item, index) in introduction.content" :key="index">{{ item }}</p>
          </span>
        </div>
        <div class="line1"></div>
        <div class="develop">
          <div class="title">{{ events.title }}</div>
          <div class="tree">
            <div class="stage" v-for="(item, index) in events.content" :key="index">
              <div class="indx">{{ index + 1 }}</div>
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { about } from '../../config/about';
export default {
  name: 'About',
  data() {
    return {
      banner: about.banner,
      introduction: about.introduction,
      events: about.events
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
.about-body {
  background-color: #fff;
  color: #444866;
  letter-spacing: 2px;
  margin: 20px auto;
  box-shadow: 0 0 20px 10px rgba(220, 220, 220, 0.3);
  .container {
    padding: 20px;
    .introduction {
      .title {
        font-size: 16px;
        font-weight: 700;
      }
      .content {
        .para {
          padding: 10px 30px;
          text-indent: 2em;
        }
      }
    }
    .develop {
      .title {
        font-size: 16px;
        font-weight: 700;
      }
      .tree {
        position: relative;
        margin: 30px 30px;
        padding-left: 30px;
        .title {
          font-size: 16px;
          font-weight: 700;
        }
        &::before {
          content: '';
          position: absolute;
          top: -20px;
          bottom: -20px;
          left: -3px;
          width: 10px;
          border-radius: 10px;
          background-image: linear-gradient(to bottom, #23b7cb, #000781);
        }
        &::after {
          content: '';
          position: absolute;
          left: -10px;
          bottom: -25px;
          width: 15px;
          height: 15px;
          border: 10px solid #000781;
          border-top: 0;
          border-left: 0;
          transform: rotate(45deg);
        }
        .stage {
          position: relative;
          padding: 30px 0;
          .indx {
            position: absolute;
            top: 20px;
            left: -50px;
            width: 40px;
            height: 40px;
            border: 1px solid black;
            border-radius: 50%;
            background-color: #fff;
            text-align: center;
            font-size: 20px;
            line-height: 40px;
          }
        }
      }
    }
  }
}
</style>
