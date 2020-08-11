<template>
	<div class="products_container">
		<div class="prod_banner">
			<a href="javascript:;" :style="backImg"></a>
		</div>
		<div class="inner_c prod_show">
			<div class="prod_nav">
				<ul>
					<nav-li-item v-for="item in navList" :key="item.id" :data="item" @change-prod-list="changeProdList"></nav-li-item>
				</ul>
			</div>
			<div class="prod_container">
				<product v-for="(item, index) in products" :key="index" :prod-info="item"></product>
			</div>
		</div>
	</div>
</template>

<script>
	import NavLiItem from "./navLiItem"
	import Product from "./product"
	import {getProductsRelative} from "../../config/products"
	export default {
		name: "Products",
		components: {
			Product,
			NavLiItem
		},
		data() {
			return {
				banner: getProductsRelative.banner,
				products: [],
			}
		},
		computed: {
			navList() {
				return getProductsRelative.navList
			},
			productList() {
				return getProductsRelative.productList
			},
			backImg() {
				return {
					backgroundImage: "url("+this.banner.img+")"
				}
			}
		},
		created() {
			this.$store.commit('setProductCurrNav', this.navList[0].id)
			this.products = this.productList[this.navList[0]["id"]];
		},
		methods: {
			prodDetail() {
				this.show = true;
			},
			changeProdList(id) {
				this.products = this.productList[id];
			}
		}
	}
</script>

<style lang="scss" scoped>
.products_container {
	.prod_banner {
		height: 400px;
		a {
			display: block;
			height: 100%;
			background-color: #03222f;
			background-repeat: no-repeat;
			background-position: center top;
			background-size: cover;
		}
	}
	.prod_show {
		box-sizing: border-box;
		margin-top: 20px;
		padding: 20px;
		box-shadow: 0 0 10px 3px #e6e6f64f;
		.prod_nav {
			width: 196px;
			font-size: 17px;
			float:left;
		}
		.prod_container {
			width: 744px;
			float: left;
			position: relative;
			box-sizing: border-box;
		}
	}
}
</style>