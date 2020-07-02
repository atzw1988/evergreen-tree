<template>
	<view class="beginPage">
		<image class="bgImg" :src="src" mode=""></image>
		<view class="begin" @click="begin"></view>
	</view>
</template>

<script>
export default {
	data () {
		return {
			src: ''
		}
	},
	onShow () {
		const random = Math.random()
		random > 0.5? this.src = '../../../static/register/begin1.png' : this.src = '../../../static/register/begin2.png'
	},
	methods: {
		// 开始考试
		begin () {
			console.log(1)
			this.$_router.push({
				name: 'examing'
			})
		}
	}
}
</script>

<style lang="less" scoped>
.beginPage {
	width: 100%;
	height: 100vh;
	position: relative;
	.bgImg {
		width: 100%;
		height: 100%;
		z-index: 100;	}
	.begin {
		width: 100%;
		height: 100rpx;
		left: 0;
		bottom: 100rpx;
		z-index: 101;
		position: absolute;
		// border: 1rpx solid #00CE47;
	}
}
</style>
