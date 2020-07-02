<template>
	<!-- 客服中心 -->
	<view class="servicePage">
		<view style="height: 1rpx;"></view>
		<image class="serviceImg" src="@/static/mine/service.png" mode=""></image>
		<tree-button text="联系客服" @click="handleContact"></tree-button>
		<view class="phone">488-8820-8820</view>
	</view>
</template>

<script>
export default {
	data () {
		return {
			phone: '48888208820'
		}
	},
	methods: {
		handleContact () {
			console.log(1)
			uni.makePhoneCall({
				phoneNumber: this.phone
			})
		}
	}
}
</script>

<style lang="less" scoped>
.servicePage {
	width: 100%;
	height: 100vh;
	.serviceImg {
		width: 290rpx;
		height: 314rpx;
		display: block;
		margin: 136rpx auto 180rpx;
	}
	.phone {
		width: 100%;
		color: #BCC2CC;
		text-align: center;
		margin-top: 30rpx;
	}
}
</style>
