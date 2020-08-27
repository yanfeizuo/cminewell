const prefix = '/images/home/';
const homeBanners = [];
const productsList = [];
const banners = require.context('../../public/images/home/banners', true);
const products = require.context('../../public/images/home/lastestProds', true);

banners.keys().map((item) => {
  item = item.replace(/\./, '');
  homeBanners.push({
    img: prefix + 'banners' + item
  });
});

const introduction = {
  desc1: '成立于2020年7月28日',
  desc2: '......',
  desc3: '..'
};

products.keys().map((item) => {
  item = item.replace(/\./, '');
  productsList.push({
    img: prefix + 'lastestProds' + item
  });
});

module.exports = {
  home: {
    homeBanners,
    introduction,
    productsList
  }
};
