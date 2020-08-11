<template>
	<div class="h-main">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "AppMain",
		data() {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
.h-main {
	padding-top: 60px;
}
</style>