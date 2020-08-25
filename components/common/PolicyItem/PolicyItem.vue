<template>
	<view class="item">
		<view class="header">
			<view class="person">
				<image class="personImg" src="../../../static/mine/name.png" mode=""></image>
				<view class="name">{{item.name}}</view>
			</view>
			<view class="tag">{{filter.kindName(item.kind)}}</view>
		</view>
		<view class="middle">
			<view class="startTime">
				<view class="year">{{filter.year(item.startTime)}}</view>
				<view class="date">{{filter.date(item.startTime)}}</view>
				<view class="title">起保</view>
			</view>
			<view class="endTime">
				<view class="year">{{filter.year(item.endTime)}}</view>
				<view class="date">{{filter.date(item.endTime)}}</view>
				<view class="title">到期</view>
			</view>
			<view class="price">￥<text>{{item.price}}</text></view>
		</view>
		<view class="down">
			<view class="phone">
				<image class="icon" src="../../../static/mine/phone.png" mode=""></image>
				<view class="phoneNo">{{item.phone}}</view>
			</view>
			<view class="order">
				<image class="icon" src="../../../static/mine/orderNo.png" mode=""></image>
				<view class="orderNo">{{item.orderNo}}</view>
			</view>
		</view>
	</view>
</template>
<wxs src="@/util/wxs/filter.wxs" module="filter"></wxs>

<script>
export default {
	name: 'PolicyItem',
	props: {
		item: {
			type: Object,
			default: () => { return {} }
		}
	},
	data () {
		return {
			
		}
	},
	methods: {
		changeTab ({currentTarget: {id}}) {
			this.active = id
			this.$emit('changeTab', id)
		}
	}
}
</script>

<style lang="less" scoped>
.item {
	width: 100%;
	height: 354rpx;
	background-color: #FFFFFF;
	border-radius: 24rpx;
	margin: 30rpx 0;
	font-size: 24rpx;
	color: #BCC2CC;
	.header {
		width: 100%;
		height: 100rpx;
		display: flex;
		border-bottom: 2rpx solid #EDEDED;
		justify-content: space-between;
		align-items: center;
		.person {
			display: flex;
			align-items: center;
			.personImg {
				width: 34rpx;
				height: 34rpx;
				margin-right: 20rpx;
			}
			.name {
				font-size: 32rpx;
				font-weight: bold;
				color: #333333;
			}
		}
		.tag {
			width: 134rpx;
			height: 52rpx;
			font-size: 28rpx;
			line-height: 52rpx;
			text-align: center;
			background-color: #00D6C0;
			color: #FFFFFF;
			border-radius: 4rpx;
		}
	}
	.middle {
		width: 100%;
		height: 170rpx;
		border-bottom: 2rpx solid #EDEDED;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.startTime, .endTime {
			width: 30%;
			height: 100%;
			flex-direction: row-reverse;
			.year {
				width: 100%;
			}
			.date {
				width: 100%;
				font-size: 32rpx;
				color: #333333;
			}
			.title {
				width: 100%;
			}
		}
		.price {
			color: #333333;
			font-weight: bold;
			font-size: 24rpx;
			text {
				font-size: 42rpx;
			}
		}
	}
	.down {
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.phone, .order {
			display: flex;
			align-items: center;
			.icon {
				width: 24rpx;
				height: 24rpx;
				margin-right: 10rpx;
			}
		}
	}
	.person, .startTime, .phone {
		margin-left: 30rpx;
	}
	.tag, .price, .order {
		margin-right: 30rpx;
	}
}
</style>
