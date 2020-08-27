const r1 = '/images/join/banners/';
const r2 = '/images/join/location/';
const banner = [
  {
    img: r1 + 'join.png'
  }
];

const contact = {
  address: '地址：湖北省孝感市',
  postCode: '邮编：000000',
  tele: '电话：0712-888888'
};

const business = {
  manager: '联系人：王经理',
  cellphone: '手机：18856856688',
  email: '邮箱：cminewell@193.com'
};

const location = {
  img: r2 + 'location.png'
};

module.exports = {
  join: {
    banner,
    contact,
    business,
    location
  }
};
