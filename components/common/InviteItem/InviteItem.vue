<template>
	<!-- 邀请明细组件 -->
	<view class="item">
		<view class="title">
			<view class="name">{{item.name}}</view>
			<view class="status" :class="[{error: item.status == 1}]">{{filter.invite(item.status)}}</view>
		</view>
		<view class="content">
			<view class="list">
				<view class="text">注册时间</view>
				<view class="text">{{item.register}}</view>
			</view>
			<view class="list">
				<view class="text">出生日期</view>
				<view class="text">{{item.birth}}</view>
			</view>
			<view class="list">
				<view class="text">联系方式</view>
				<view class="text">{{filter.shelter(item.phone, 3, 4)}}</view>
			</view>
		</view>
	</view>
</template>
<wxs src="@/util/wxs/filter.wxs" module="filter"></wxs>

<script>
export default {
	name: 'InviteItem',
	props: {
		item: {
			type: Object,
			default: () => { return {} }
		}
	},
	data () {
		return {
			
		}
	}
}
</script>

<style lang="less" scoped>
.item {
	width: 690rpx;
	height: 274rpx;
	padding: 0 30rpx;
	border-bottom: 2rpx solid #F7F7F7;
	.title {
		width: 100%;
		margin-bottom: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.name {
			font-size: 32rpx;
			font-weight: bold;
		}
		.status {
			color: #00D6C0;
			font-weight: bold;
		}
		.error {
			color: #333333;
			font-weight: normal;
		}
	}
	.content {
		padding: 12rpx 20rpx;
		width: 650rpx;
		height: 138rpx;
		background-color: #FCFCFC;
		border-radius: 4rpx;
		font-size: 24rpx;
		.list {
			margin-top: 2rpx;
			width: 100%;
			display: flex;
			justify-content: space-between;
			.text {
				color: #BCC2CC;
			}
		}
	}
}
</style>
