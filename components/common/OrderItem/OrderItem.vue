<template>
	<view class="item">
		<view class="content">
			<view class="header">
				<view class="title">{{item.title}}</view>
				<view :class="[filter.status(item.payStatus)]">{{filter.statusText(item.payStatus)}}</view>
			</view>
			<view class="middle">
				<view class="person">
					<view class="label">投保人</view>
					<view class="value">{{item.name}}</view>
				</view>
				<view class="contact">
					<view class="label">联系方式</view>
					<view class="value">{{filter.shelter(item.phone, 3, 4)}}</view>
				</view>
			</view>
			<view class="down">
				<view class="orderNo">订单号<text>{{item.orderNo}}</text></view>
				<view class="policyNo">保单号<text>{{item.policyNo}}</text></view>
			</view>
		</view>
	</view>
</template>
<wxs src="@/util/wxs/filter.wxs" module="filter"></wxs>

<script>
export default {
	name: 'OrderItem',
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
	height: 304rpx;
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
			border-bottom: 2rpx solid #EDEDED;
			align-items: center;
			.person, .contact {
				width: 630rpx;
				display: flex;
				justify-content: space-between;
				margin-top: 12rpx;
				.label {
					color: #BCC2CC;
				}
			}
		}
		.down {
			width: 100%;
			height: 70rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.orderNo, .policyNo {
				font-size: 24rpx;
				color: #BCC2CC;
				text {
					margin-left: 16rpx;
				}
			}
			.policyNo {
				color: #78808B;
				text {
					color: #78808B;
				}
			}
		}
	}
}
</style>
