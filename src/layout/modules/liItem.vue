<template>
	<li :class="computedClass" @click="jumpClick">{{nav.name}}</li>
</template>

<script>
	export default {
		name: "LiItem",
		props: {
			nav: Object,
			currentNav: String
		},
		computed: {
			computedClass() {
				if(this.currentNav === this.nav.name) {
					return ['current']
				}else {
					return []
				}
			}
		},
		methods: {
			jumpClick() {
				this.$router.push(this.nav.route)
			}
		}
	}
</script>

<style>
</style>