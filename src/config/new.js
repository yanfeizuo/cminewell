const r1 = '/images/new/banners/';

const banner = [
  {
    img: r1 + 'new.png'
  }
];

const news = [
  {
    title: '标题一标题一',
    publishDate: '2020/07/31',
    newFlag: true,
    keyWords: '一句话描述',
    details: [
      {
        isLetter: true,
        cont: `
                段落一
              `
      },
      {
        isLetter: true,
        cont: `
                段落二
              `
      },
      {
        isLetter: false,
        cont: '/images/new/images/b01.jpg'
      }
    ]
  },
  {
    title: '标题2',
    newFlag: true,
    keyWords: '一句话描述',
    details: [
      {
        isLetter: true,
        cont: `
                段落一
              `
      },
      {
        isLetter: true,
        cont: `
                段落二
              `
      }
    ]
  },
  {
    title: '标题3',
    keyWords: '一句话描述',
    details: [
      {
        isLetter: true,
        cont: `
                段落一
              `
      },
      {
        isLetter: true,
        cont: `
                段落二
              `
      }
    ]
  }
];

module.exports = {
  news: {
    banner,
    news
  }
};
