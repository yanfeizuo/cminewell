function get() {
	const r1 = "/images/product";
	const r2 = "/images/product/banner";
	
	const productList = {};
	
	const navList = [
		{
			id: "cleanser",
			prefixIcon: "el-icon-s-platform",
			suffixIcon: "el-icon-caret-right",
			label: "洁面仪"
		},
		{
			id: "blackHead",
			prefixIcon: "el-icon-printer",
			suffixIcon: "el-icon-caret-right",
			label: "黑头仪"
		},
		{
			id: "skin",
			prefixIcon: "el-icon-s-help",
			suffixIcon: "el-icon-caret-right",
			label: "嫩肤仪"
		},
		{
			id: "eye",
			prefixIcon: "el-icon-s-help",
			suffixIcon: "el-icon-caret-right",
			label: "美眼仪"
		},
		{
			id: "ultrasonic",
			prefixIcon: "el-icon-s-help",
			suffixIcon: "el-icon-caret-right",
			label: "超声波"
		}
	];
	
	let productInfo = require('../../public/documents/product/product-info.js').productInfo
	console.log(productInfo)
	
	const banner = {};
	
	const products =  require.context('../../public/images/product', true);
	const banners = require.context('../../public/images/product/banner', true)
	
	products.keys().map(item => {
		item = item.replace(/\./, '');
		let items = item.split('/');
		let keyName = items[1];
		let picName = items[items.length - 1].split(".")[0];
		let productListKeys = Object.keys(productList);
		console.log("keyName",keyName, "picName", picName)
		let alreadExist = productListKeys.includes(keyName);
		if(alreadExist) {
			productList[keyName].push({
				img: r1 + item,
				desc: productInfo[keyName]?productInfo[keyName][picName]?productInfo[keyName][picName]:{}: {}
			})
		}else {
			productList[keyName] = [
				{
					img: r1 + item,
					desc: productInfo[keyName]?productInfo[keyName][picName]?productInfo[keyName][picName]:{}: {}
				}
			]
		}
	})
	banners.keys().map(item => {
		item = item.replace(/\./, '');
		banner['img'] = r2 + item;
	})
	
	return {
		productList,
		navList,
		banner
	}
}

module.exports = {
	getProductsRelative: get()
}
