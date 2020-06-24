<template>
	<view class="item" @click="handleClick">
		<image class="itemImg" src="http://iph.href.lu/45x45?fg=666666&bg=cccccc" mode=""></image>
		<view class="detail">
			<view class="name">{{items.name}}</view>
			<view class="info">
				<view class="order">
					<image class="icon" src="http://iph.href.lu/12x12?fg=666666&bg=cccccc" mode=""></image>
					{{items.order}}
				</view>
				<view class="now">
					<image class="icon" src="http://iph.href.lu/12x12?fg=666666&bg=cccccc" mode=""></image>
					{{items.now}}
				</view>
				<view class="money">
					<image class="icon" src="http://iph.href.lu/12x12?fg=666666&bg=cccccc" mode=""></image>
					{{items.money}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'CustomerItem',
	props: {
		items: {
			type: Object,
			default: () => { return {} }
		}
	},
	methods: {
		handleClick () {
			this.$emit('click', this.items)
		}
	}
}
</script>

<style lang="less" scoped>
.item {
	width: 100%;
	height: 170rpx;
	background-color: #FFFFFF;
	border-radius: 12rpx;
	margin: 20rpx 0;
	font-size: 24rpx;
	color: #333333;
	display: flex;
	align-items: center;
	.itemImg {
		width: 90rpx;
		height: 90rpx;
		margin: 0 30rpx;
	}
	.detail {
		align-items: center;
		.name {
			font-size: 32rpx;
			font-weight: bold;
		}
		.info {
			width: 440rpx;
			display: flex;
			justify-content: space-between;
			.order, .now, .money {
				.icon {
					width: 24rpx;
					height: 24rpx;
					margin: 0 20rpx 0 0 !important;
				}
			}
		}
	}
}
</style>
