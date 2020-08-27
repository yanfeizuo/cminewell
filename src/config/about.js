const r1 = '/images/about/banners/';
const banner = [
  {
    img: r1 + 'about.png'
  }
];
const introduction = {
  title: '公司简介',
  content: [`公司简介`, `第二段`, `第三段`]
};
const events = {
  title: '发展历程',
  content: [`公司成立`, `stage1`, `stage2`, `stage3`]
};

module.exports = {
  about: {
    banner,
    introduction,
    events
  }
};
