<template>
	<div class="not-found">
		<div class="tip">敬请期待</div>
		<el-button class="btn" plain @click="back">返 回</el-button>
	</div>
</template>

<script>
export default {
  name: 'Not-Found',
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.not-found {
	padding: 100px;
	text-align: center;
	.tip {
		font-size: 40px;
	}
	.btn {
		margin-top: 20px;
	}
}
</style>
