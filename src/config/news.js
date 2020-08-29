// const r1 = '/images/news/banner';

const banner = {
  img: require('../assets/images/news/banner/b.png')
};

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
        cont: require('../assets/images/news/newsImages/image.jpg')
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
