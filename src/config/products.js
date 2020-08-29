const banner = {
  img: require('../assets/images/product/banner/banner.png')
};

const navList = [
  {
    id: 'cleanser',
    prefixIcon: '',
    suffixIcon: 'el-icon-caret-right',
    label: '洁面仪'
  },
  {
    id: 'blackHead',
    prefixIcon: '',
    suffixIcon: 'el-icon-caret-right',
    label: '黑头仪'
  },
  {
    id: 'skin',
    prefixIcon: '',
    suffixIcon: 'el-icon-caret-right',
    label: '嫩肤仪'
  },
  {
    id: 'eye',
    prefixIcon: '',
    suffixIcon: 'el-icon-caret-right',
    label: '美眼仪'
  },
  {
    id: 'ultrasonic',
    prefixIcon: '',
    suffixIcon: 'el-icon-caret-right',
    label: '超声波'
  }
];

const productList = {
  cleanser: [
    {
      img: require('../assets/images/product/cleanser/c01.jpg'),
      desc: {
        name: '清洁仪',
        effects: '清洁脸部'
      }
    }
  ],
  blackHead: [
    {
      img: require('../assets/images/product/blackHead/b01.jpg'),
      desc: {
        name: '黑头仪',
        effects: '吸黑头'
      }
    }
  ],
  skin: [
    {
      img: require('../assets/images/product/skin/a03.jpg'),
      desc: {}
    }
  ],
  eye: [
    {
      img: require('../assets/images/product/eye/d03.jpg'),
      desc: {}
    }
  ],
  ultrasonic: [
    {
      img: require('../assets/images/product/ultrasonic/e03.jpg'),
      desc: {}
    }
  ]
};

module.exports = {
  productsRelative: {
    productList,
    navList,
    banner
  }
};
