import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentNav: '首页',
    navList: [
      { name: '首页', route: 'home' },
      { name: '品牌', route: 'brands' },
      { name: '产品', route: 'products' },
      { name: '公司动态', route: 'news' },
      { name: '关于我们', route: 'about' },
      { name: '加入我们', route: 'join' }
    ],
    totalSliderImgs: 4,
    currentSliderImgNo: 1,

    productCurrNav: 'fakeBody'
  },
  getters: {
    getCurrentNav(state) {
      return state.currentNav;
    },
    getNavList(state) {
      return state.navList;
    },
    getCurrentSliderImgNo(state) {
      return state.currentSliderImgNo;
    },
    getTotalSliderImgs(state) {
      return state.totalSliderImgs;
    },

    getProductCurrNav(state) {
      return state.productCurrNav;
    }
  },
  mutations: {
    setCurrentNavByRoute(state, val) {
      console.log(val);
      for (const item of state.navList) {
        if (item.route === val) {
          state.currentNav = item.name;
        }
      }
    },
    setTotalSliderImgs(state, val) {
      state.totalSliderImgs = val;
    },
    setCurrentSliderImgNo(state) {
      if (state.currentSliderImgNo < state.totalSliderImgs) {
        state.currentSliderImgNo++;
      } else {
        state.currentSliderImgNo = 1;
      }
    },

    setProductCurrNav(state, val) {
      state.productCurrNav = val;
    }
  },
  actions: {},
  modules: {}
});
