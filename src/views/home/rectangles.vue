<template>
	<div class="rectangles">
		<ul>
			<li v-for="i in totalAmount" :key="i" :class="{curr:i==currLi}"></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Rectangels",
		data() {
			return{}
		},
		computed: {
			totalAmount() {
				return this.$store.getters.getTotalSliderImgs
			},
			currLi() {
				return this.$store.getters.getCurrentSliderImgNo
			}
		}
	}
</script>

<style lang="scss" scoped>
.rectangles {
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	overflow: hidden;
	ul {
		li {
			width: 50px;
			height: 4px;
			float: left;
			margin-right: 30px;
			background-color: white;
			opacity: 0.48;
			&.curr {
				opacity: 1;
			}
		}
	}
}
</style>