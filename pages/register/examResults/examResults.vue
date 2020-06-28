<template>
	<view class="examResults">
		<view style="height: 1rpx;"></view>
		<image class="examImg" src="@/static/register/examPass.png" mode=""></image>
		<view class="score">{{score}}分</view>
		<view class="resText">恭喜您通过经纪人考试</view>
		<tree-button text="智能签约"></tree-button>
		<view class="tips">请进行智能签约，成为常青树经纪人</view>
	</view>
</template>

<script>
export default {
	data () {
		return {
			score: 100
		}
	},
	onLoad (options) {
		console.log(this.$router.extract(options))
		this.score = this.$router.extract(options)
	}
}
</script>

<style lang="less" scoped>
.examResults {
	width: 100%;
	height: 100vh;
	background-color: #FFFFFF;
	view {
		width: 100%;
		text-align: center;
	}
	.examImg {
		display: block;
		width: 360rpx;
		height: 480rpx;
		margin: 84rpx auto 0;
	}
	.score {
		font-size: 52rpx;
		font-weight: bold;
		color: #F3AB42;
		margin-top: 20rpx;
	}
	.resText {
		font-size: 40rpx;
		font-weight: bold;
		color: #00D6C0;
		margin: 20rpx 0 120rpx;
	}
	.tips {
		font-size: 28rpx;
		color: #BCC2CC;
		margin-top: 30rpx;
	}
}
</style>
