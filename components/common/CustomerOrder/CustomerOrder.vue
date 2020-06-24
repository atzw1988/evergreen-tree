<template>
	<view class="item">
		<view class="content">
			<view class="header">
				<view class="title">{{item.title}}</view>
				<view class="status" :class="[filter.status(item.status)]">{{filter.orderStatus(item.status)}}</view>
			</view>
			<view class="middle">
				<view class="info">
					<view class="label">投保人</view>
					<view class="value">{{item.selfInfo}}</view>
				</view>
				<view class="info">
					<view class="label">被保人</view>
					<view class="value">{{item.insurant}}</view>
				</view>
				<view class="info">
					<view class="label">保障时间</view>
					<view class="value">{{item.securityTime}}</view>
				</view>
				<view class="info">
					<view class="label">保费</view>
					<view class="value">{{item.money}}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<wxs src="@/util/wxs/filter.wxs" module="filter"></wxs>

<script>
export default {
	name: 'CustomerOrder',
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
	width: 100%;
	height: 352rpx;
	background-color: #FFFFFF;
	border-radius: 24rpx;
	margin: 30rpx 0 0;
	font-size: 24rpx;
	color: #333333;
	.content {
		width: 630rpx;
		height: 100%;
		margin: 0 auto;
		.header {
			width: 100%;
			height: 90rpx;
			display: flex;
			border-bottom: 2rpx solid #EDEDED;
			justify-content: space-between;
			align-items: center;
			line-height: 90rpx;
			.title {
				font-size: 32rpx;
				font-weight: bold;
			}
			.status {
				border: 2rpx solid #F3F3F3;
				border-radius: 4rpx;
				padding: 0 20rpx;
			}
			.success {
				color: #00D6C0;
			}
			.waiting {
				color: #F0AD4E;
			}
			.fail {
				color: #EE0A24;
			}
		}
		.middle {
			width: 100%;
			height: 126rpx;
			font-size: 28rpx;
			align-items: center;
			.info {
				width: 630rpx;
				display: flex;
				justify-content: space-between;
				margin-top: 10rpx;
				.label {
					color: #BCC2CC;
				}
			}
		}
	}
}
</style>
