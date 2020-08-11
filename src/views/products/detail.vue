<template>
	<el-dialog title="产品详情" :visible.sync="show">
		<div style="height: 2000px;">
			产品详情
		</div>
	</el-dialog>
</template>

<script>
	export default {
		name: "ProdDetail",
		props: {
			value: Boolean
		},
		computed: {
			show: {
				get() {
					return this.value
				},
				set(val) {
					this.$emit('closeDetail')
				}
			}
		},
		methods: {
		}
	}
</script>

<style>
</style>