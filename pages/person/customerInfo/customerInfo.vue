<template>
	<view class="customerInfoPage">
		<view class="header">
			<image @click="backPage" class="back" src="@/static/common/back.png" mode=""></image>
			<image src="http://iph.href.lu/375x162?fg=666666&bg=cccccc" mode=""></image>
			<view class="userInfo">
				<view class="portrait">
					<image src="http://iph.href.lu/45x45?fg=666666&bg=cccccc" mode=""></image>
				</view>
				<view class="customer">
					<view class="name">{{userInfo.name}}</view>
					<view class="contact" @click="callPhone">
						<image src="http://iph.href.lu/10x10?fg=666666&bg=cccccc" mode=""></image>
						<text>联系客户</text>
					</view>
				</view>
				<view class="info">
					<view class="total"><text>{{userInfo.order}}</text>累计保单</view>
					<view class="effect"><text>{{userInfo.now}}</text>在保保单</view>
					<view class="money"><text>{{userInfo.money}}</text>保费</view>
				</view>
			</view>
		</view>
		<scroll-view scroll-y="true" class="listItem">
			<block v-for="(item, index) in list" :key="index">
				<CustomerOrder :item="item"></CustomerOrder>
			</block>
		</scroll-view>
	</view>
</template>

<script>
import CustomerOrder from '@/components/common/CustomerOrder/CustomerOrder'
export default {
	components: {
		CustomerOrder
	},
	data () {
		return {
			loading: false,
			userInfo: {},
			list: [
				{
					title: '尊享e生2019版',
					status: 0,
					selfInfo: '朱飞燕',
					insurant: '朱飞燕',
					securityTime: '2019/09/02',
					money: '1361.00'
				},
				{
					title: '尊享e生2019版',
					status: 1,
					selfInfo: '朱飞燕',
					insurant: '朱飞燕',
					securityTime: '2019/09/02',
					money: '1361.00'
				}
			]
		}
	},
	methods: {
		// 联系客户
		callPhone () {
			uni.makePhoneCall({
				phoneNumber: this.userInfo.phone
			})
		},
		// 返回上一页
		backPage () {
			this.$router.pop()
		}
	},
	onLoad (options) {
		console.log(this.$router.extract(options))
		this.userInfo = this.$router.extract(options)
	}
}
</script>

<style lang="less" scoped>
.customerInfoPage {
	width: 100%;
	height: 100vh;
	position: relative;
	.header {
		width: 100%;
		height: 600rpx;
		background-color: #FFFFFF;
		color: #333333;
		font-size: 24rpx;
		position: relative;
		.back {
			width: 36rpx !important;
			height: 36rpx !important;
			position: absolute;
			left: 12rpx;
			top: 68rpx;
		}
		image {
			width: 750rpx;
			height: 324rpx;
			z-index: 1000;
		}
		.userInfo {
			width: 670rpx;
			height: 320rpx;
			z-index: 1001;
			position: absolute;
			top: 280rpx;
			left: 40rpx;
			.portrait {
				width: 90rpx;
				height: 90rpx;
				border-radius: 50%;
				margin-left: 30rpx;
				overflow: hidden;
				image {
					width: 90rpx;
					height: 90rpx;
				}
			}
			.customer {
				width: 100%;
				margin-top: 20rpx;
				display: flex;
				align-items: center;
				.name {
					font-size: 36rpx;
					font-weight: bold;
					margin-right: 30rpx;
				}
				.contact {
					border: 2rpx solid #F3F3F3;
					padding: 0 10rpx;
					border-radius: 4rpx;
					image {
						width: 20rpx;
						height: 20rpx;
						margin-right: 6rpx;
					}
				}
			}
			.info {
				width: 100%;
				display: flex;
				margin-top: 30rpx;
				.total, .effect, .money {
					margin-right: 40rpx;
					color: #BCC2CC;
					text {
						font-size: 40rpx;
						margin-right: 10rpx;
						color: #333333;
					}
				}
			}
		}
	}
	.listItem {
		width: 690rpx;
		height: calc(100vh - 620rpx);
		margin: 0 auto;
		padding-bottom: 20rpx;
	}
}
</style>
