<template>
  <div class="product">
    <prod-detail v-model="show" @closeDetail="closeDetail"></prod-detail>
    <ul>
      <li>
        <a href="javascript:;"><img :src="prodInfo.img" alt="" /></a>
        <div class="desc">
          <div class="name"><span>产品名称: </span>{{ prodInfo.desc.name }}</div>
          <div class="effects">
            <span>功效: </span>
            <p>
              {{ prodInfo.desc.effects }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ProdDetail from './detail';
export default {
  name: 'Product',
  components: {
    ProdDetail
  },
  props: {
    prodInfo: Object
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeDetail() {
      this.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  ul {
    font-size: 14px;
    li {
      overflow: hidden;
      margin-left: 20px;
      margin-bottom: 20px;
      a {
        float: left;
        overflow: hidden;
        width: 228px;
        height: 228px;
        display: block;
        img {
          width: 228px;
          height: 228px;
          transition: transform 1s ease;
          &:hover {
            transform: scale(1.1, 1.1);
          }
        }
      }
      .desc {
        box-sizing: border-box;
        font-size: 16px;
        float: left;
        width: 490px;
        height: 228px;
        padding: 20px;
        span {
          font-weight: 700;
        }
        .effects {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
