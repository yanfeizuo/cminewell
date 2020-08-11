<template>
	<div class="homeContainer">
		<div class="banner-box">
			<div class="slider-list">
				<slider-item v-for="(item,index) in sliderImgList" :key="index" :no="index+1" :imgurl="item.img"></slider-item>
			</div>
			<rectangles></rectangles>
		</div>
		
		<div class="inner_c knowme">
			<div class="knowme-title">
				<h3><i class="el-icon-question"></i>铭伟医疗</h3>
				<button class="text-button">了解更多<i class="el-icon-caret-right"></i></button>
			</div>
			<div class="knowme-bd">
				<p v-for="item in introduction"><i class="el-icon-star-on"></i>{{item}}</p>
			</div>
		</div>
		
		<div class="inner_c latest_prod">
			<div class="latest_prod_title">
				<h3><i class="el-icon-s-opportunity"></i>最新产品</h3>
				<button class="text-button" @click="moreProd">了解更多<i class="el-icon-caret-right"></i></button>
			</div>
			<div class="latest_prod_bd">
				<div v-for="item in lastestProds">
					<img :src="item.img" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SliderItem from './sliderItem'
	import Rectangles from './rectangles'
	import introduction from '../../../public/documents/home/brief_introduction'
//	import {banners} from '../../../public/config1/home'
	export default {
		name: 'Home',
		components: {
			SliderItem,
			Rectangles
		},
		data() {
			return {
				timer: null,
				introduction: introduction,
				sliderImgList: this.$root.$options.home.homeBanners,
				lastestProds: this.$root.$options.home.productsList
			}
		},
		beforeCreate() {
//			let bannersLength = banners.length;
//			this.$store.commit('setTotalSliderImgs', bannersLength)
		},
		created() {
			this.$store.commit('setTotalSliderImgs', this.sliderImgList.length)
			this.timer = setInterval(this.changeCurrentSliderImgNo, 5000)
		},
		mounted() {
			console.log(this.introduction)
		},
		methods: {
			changeCurrentSliderImgNo() {
				this.$store.commit("setCurrentSliderImgNo")
			},
			moreProd() {
				this.$router.push('products')
			}
		},
		beforeDestroy() {
			clearInterval(this.timer)
		}
	}
</script>

<style lang="scss" scoped>
.homeContainer {
	.banner-box {
		position: relative;
		height: 560px;
		.slider-list {
			position: relative;
			height: 100%;
			overflow: hidden;
		}
	}
	.knowme {
		margin-top: 10px;
		background-color: #FFF;
		box-shadow: 0 0 10px 3px #e6e6f64f;
		.knowme-title {
			height: 60px;
			overflow: hidden;
			border-bottom: 1px solid #dbe1e7;
			h3 {
				float: left;
				font-size: 20px;
				height: 100%;
				line-height: 70px;
				i {
					padding-right: 6px;
					color: #4396faf0;
				}
			}
			button {
				line-height: 70px;
				float: right;
				&:hover {
					color: #4396faf0;
				}
			}
		}
		.knowme-bd {
			padding: 20px;
			p {
				text-align: center;
				font-size: 16px;
				line-height: 30px;
				letter-spacing: 3px;
				i {
					color: #f6e6e6;
				}
			}
		}
	}
	.latest_prod {
		margin-top: 10px;
		background-color: #FFF;
		box-shadow: 0 0 10px 3px #e6e6f64f;
		.latest_prod_title {
			height: 60px;
			overflow: hidden;
			border-bottom: 1px solid #dbe1e7;
			h3 {
				float: left;
				font-size: 20px;
				height: 100%;
				line-height: 70px;
				i {
					padding-right: 6px;
					color: #4396faf0;
				}
			}
			button {
				line-height: 70px;
				float: right;
				&:hover {
					color: #4396faf0;
				}
			}
		}
		.latest_prod_bd {
			padding: 20px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			&>div {
				width: 250px;
				height: 250px;
				border-radius: 50%;
				overflow: hidden;
				box-shadow: 0px 8px 20px 5px #dbe1e7;
				cursor: pointer;
				&:hover {
					box-shadow: none;
				}
				img {
					width: 250px;
					height: 250px;
				}
			}
		}
	}
}
</style>