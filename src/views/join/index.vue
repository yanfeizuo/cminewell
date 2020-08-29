<template>
  <div class="main-container">
    <div class="join_banner">
      <a href="javascript:;" :style="backImg"></a>
    </div>
    <div class="inner_c join-body">
      <div class="container">
        <div class="sub-content general-enquery bottom-line">
          <div class="title">联系方式</div>
          <div class="content">
            <div class="address"><i class="icon el-icon-location"></i> {{ contact.address }}</div>
            <div class="post-code"><i class="icon el-icon-postcard"></i> {{ contact.postCode }}</div>
            <div class="tele"><i class="icon el-icon-phone-outline"></i> {{ contact.tele }}</div>
          </div>
        </div>
        <div class="sub-content business bottom-line">
          <div class="title">商务合作</div>
          <div class="content">
            <div class="li contact"><i class="icon el-icon-user-solid"></i> {{ business.manager }}</div>
            <div class="li cellphone"><i class="icon el-icon-mobile-phone"></i> {{ business.cellphone }}</div>
            <div class="li email"><i class="icon el-icon-message"></i> {{ business.email }}</div>
          </div>
        </div>
        <div class="sub-content location">
          <div class="title">具体位置</div>
          <div class="content">
            <img class="image" :src="locationImg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { join } from '../../config/join';
export default {
  name: 'Join',
  data() {
    return {
      banner: join.banner,
      contact: join.contact,
      business: join.business,
      location: join.location
    };
  },
  computed: {
    backImg() {
      return {
        backgroundImage: 'url(' + this.banner.img + ')'
      };
    },
    locationImg() {
      return this.location.img;
    }
  }
};
</script>

<style lang="scss" scoped>
.join_banner {
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
.join-body {
  background-color: #fff;
  color: #444866;
  letter-spacing: 2px;
  margin: 20px auto;
  box-shadow: 0 0 20px 10px rgba(220, 220, 220, 0.3);
  .container {
    padding: 0 20px;
    .title {
      font-size: 20px;
      font-weight: bold;
      line-height: 2;
    }
    .content {
      padding-left: 20px;
      line-height: 24px;
    }
    .sub-content {
      padding: 20px 0;
    }
    .business {
      overflow: hidden;
      .li {
        float: left;
        width: 300px;
      }
    }
    .location {
      .image {
        display: block;
      }
    }
  }
}
.bottom-line {
  border-bottom: 1px solid #c7d6e5;
}
.icon {
  color: #38b774;
}
</style>
