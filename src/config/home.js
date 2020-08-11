const prefix = "/images/home/";
let homeBanners = [];
let productsList = [];
let banners =  require.context('../../public/images/home/banners', true);
let products = require.context('../../public/images/home/lastestProds', true);

banners.keys().map(item => {
	item = item.replace(/\./, '');
	homeBanners.push({
		img: prefix + 'banners' + item
	})
})

products.keys().map(item => {
	item = item.replace(/\./, '');
	productsList.push({
		img: prefix + 'lastestProds' + item
	})
})

module.exports = {
	home: {
		homeBanners,
		productsList
	}
}
