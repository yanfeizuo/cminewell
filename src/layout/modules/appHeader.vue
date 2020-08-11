<template>
	<div class="h-header">
		<div class="inner_c">
			<div class="logo">
				<h1>铭伟科技</h1>
			</div>
			<div class="nav">
				<ul>
					<li-item v-for="(item, index) in navList" :key="index" :nav="item" :currentNav="currentNav"></li-item>
					<!--<li>首页</li>
					<li class="current">产品</li>
					<li>解决方案</li>
					<li>公司动态</li>
					<li>关于我们</li>
					<li>联系我们</li>-->
				</ul>
			</div>
			<div class="tel">
				<div class="phone">
					<i class="el-icon-phone"></i>
					<span>0712-888888</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import LiItem from './liItem'
	export default {
		name: "AppHeader",
		components: {
			LiItem
		},
		data() {
			return {
				
			}
		},
		computed: {
			currentNav() {
				return this.$store.getters.getCurrentNav
			},
			navList() {
				return this.$store.getters.getNavList
			}
		},
		methods: {
			test() {
				alert(123)
			}
		}
	}
</script>

<style lang="scss" scoped>
.h-header {
	position: fixed;
	z-index: 999;
	top: 0;
	width: 100%;
	height: 60px;
	background-color: #020910;
	.logo {
		float: left;
		height: 60px;
		line-height: 60px;
		&>img {
			width: 48px;
		}
		&>h1 {
			font-size: 24px;
			display: inline-block;
			width: 150px;
			height: 60px;
			/*overflow: hidden;*/
			background: url(../../assets/logo.png) no-repeat 0 9px;
			text-indent: -999em;
		}
	}
	.nav {
		float: left;
		margin-left: 100px;
		ul {
			li {
				float: left;
				width: 80px;
				height: 60px;
				line-height: 60px;
				color: #818496;
				cursor: pointer;
				text-align: center;
				border-left: 1px solid #252947;
				&:hover {
					color: #FFF;
				}
				&:last-child {
					border-right: 1px solid #252947;
				}
				&.current {
					background-color: #30313b;
					color: #FFF;
				}
			}
		}
	}
	.tel {
		float: left;
		height: 50px;
		margin-left: 116px;
		padding-top: 10px;
		.phone {
			text-align: center;
			width: 120px;
			height: 40px;
			line-height: 40px;
			background-color: #3aca7a;
			border-radius: 9px;
		}
	}
}
</style>