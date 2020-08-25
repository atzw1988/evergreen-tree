<template>
	<view class="product" @click="toDetail">
		<view class="left">
			<image class="productIcon" :src="item.icon" mode=""></image>
		</view>
		<view class="right">
			<view class="list">
				<view class="title">{{item.name}}</view>
				<view class="detail">{{item.value}}</view>
				<view class="price" :style="{color: color}">
					￥{{item.price}}
					<text class="unit">/{{item.time}}起</text>
					<text v-if="isStaff" class="commi">佣金{{item.commi}}元/年起</text>
				</view>
			</view>
			<view class="icon">
				<uni-icons type="forward"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'ProductDetail',
	props: {
		item: {
			type: Object,
			default: () => { return {} }
		},
		isStaff: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: '#00D6C0'
		}
	},
	methods: {
		toDetail (e) {
			console.log(this.item)
			this.$emit('handleClick', this.item)
		}
	}
}
</script>

<style lang="less" scoped>
	.product {
		width: 100%;
		height: 220rpx;
		border-bottom: 2rpx solid #f7f7f7;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left {
			width: 160rpx;
			height: 160rpx;
			.productIcon {
				width: 100%;
				height: 100%;
			}
		}
		.right {
			height: 180rpx;
			width: 516rpx;
			display: flex;
			.list {
				width: 480rpx;
				.title {
					font-size: 36rpx;
					font-weight: bold;
				}
				.detail {
					font-size: 30rpx;
				}
				.price {
					font-size: 42rpx;
					font-weight: bold;
					line-height: 54rpx;
					.unit {
						font-size: 24rpx;
						font-weight: 500;
						color: #78808B;
					}
				}
			}
			.icon {
				width: 20rpx;
				line-height: 160rpx;
				height: 160rpx;
			}
			.commi {
				color: #F3AB42;
				font-size: 24rpx;
				font-weight: 500;
				display: inline-block;
				margin-left: 50rpx;
				position: relative;
				&::before {
					content: '';
					width: 2rpx;
					height: 28rpx;
					position: absolute;
					background-color: #E6E6E6;
					left: -25rpx;
					top: 14rpx;
				}
			}
		}
	}
</style>
