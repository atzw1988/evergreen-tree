<template>
	<view class="teamPage">
		<view class="header">
			<view style="height: 1rpx;"></view>
			<view class="pageTitle">团队</view>
			<view class="userInfo">
				<view class="team">
					<view class="portrait" @click="handleClick">
						<image src="http://iph.href.lu/45x45?fg=666666&bg=cccccc" mode=""></image>
					</view>
					<view class="teamName">
						<view class="name">爆破团队</view>
						<view class="personNo">总人数<text>500人</text></view>
					</view>
				</view>
				<view class="agent">
					<view class="secondary">
						二级代理：<text>{{secondary}}人</text>
					</view>
					<view class="threeary">
						三级代理：<text>{{threeary}}人</text>
					</view>
				</view>
				<view class="results">
					<view v-for="(item,index) in results" :key="index">
						<view class="number">{{list[item.value]}}</view>
						<view class="name">{{item.name}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="monthRes">
			<view class="content">
				<view class="monthTitle">当月业绩</view>
				<scroll-view scroll-y="true" class="listItem">
					<view v-for="(item,index) in monthList" :key="index" class="resItem" :class="[{big: index == 2}]">
						<image :src="item.icon" mode=""></image>
						<view class="detail">
							<view class="name">{{item.name}}</view>
							<view class="number">{{item.value}}元</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<Notify id="notify" :insetTop="true" background="#00D6C0"></Notify>
	</view>
</template>

<script>
export default {
	data () {
		return {
			loading: false,
			secondary: 300,
			threeary: 200,
			results: [
				{
					name: '累计奖励(元)',
					value: 'addUp'
				},
				{
					name: '增员奖励(元)',
					value: 'increase'
				},
				{
					name: '育成奖励(元)',
					value: 'bred'
				}
			],
			list: {
				addUp: '3000.00',
				increase: '2000.00',
				bred: '3000.00'
			},
			monthList: [
				{
					id: 0,
					name: '增员人数',
					value: 100,
					icon: 'http://iph.href.lu/34x34?fg=666666&bg=cccccc'
				},
				{
					id: 1,
					name: '增员保费',
					value: 2000,
					icon: 'http://iph.href.lu/34x34?fg=666666&bg=cccccc'
				},
				{
					id: 2,
					name: '增员奖励',
					value: 1000,
					icon: 'http://iph.href.lu/34x34?fg=666666&bg=cccccc'
				},
				{
					id: 3,
					name: '育成人数',
					value: 100,
					icon: 'http://iph.href.lu/34x34?fg=666666&bg=cccccc'
				},
				{
					id: 4,
					name: '育成保费',
					value: 2000,
					icon: 'http://iph.href.lu/34x34?fg=666666&bg=cccccc'
				},
				{
					id: 5,
					name: '育成奖励',
					value: 1000,
					icon: 'http://iph.href.lu/34x34?fg=666666&bg=cccccc'
				}
			]
		}
	},
	methods: {
		handleClick () {
			console.log(1)
			this.$base.sM('测试通知')
		}
	}
}
</script>

<style lang="less" scoped>
.teamPage {
	width: 100%;
	height: 100vh;
	background-color: #FFFFFF;
	position: relative;
	.header {
		width: 100%;
		height: 580rpx;
		background-color: #00D6C0;
		color: #FFFFFF;
		z-index: 100;
		.pageTitle {
			width: 100%;
			height: 86rpx;
			text-align: center;
			font-size: 32rpx;
			font-weight: bold;
			line-height: 86rpx;
			margin-top: 40rpx;
		}
		.userInfo {
			width: 690rpx;
			height: 90rpx;
			margin: 0 auto;
			.team {
				display: flex;
				margin-top: 20rpx;
				.portrait {
					width: 90rpx;
					height: 90rpx;
					border-radius: 50%;
					margin-right: 30rpx;
					overflow: hidden;
					image {
						width: 90rpx;
						height: 90rpx;
					}
				}
				.teamName {
					height: 90rpx;
					.name {
						font-weight: bold;
						font-size: 32rpx;
						margin-top: -10rpx;
					}
					.personNo {
						font-size: 20rpx;
						color: #A6F8EF;
						text {
							font-size: 24rpx;
							color: #FFFFFF;
							margin-left: 20rpx;
						}
					}
				}
			}
			.agent {
				width: 100%;
				height: 66rpx;
				background-color: #2BE1CE;
				border-radius: 8rpx;
				font-size: 24rpx;
				display: flex;
				margin-top: 40rpx;
				.secondary, .threeary {
					width: 262rpx;
					line-height: 66rpx;
					position: relative;
					text {
						color: #A6F8EF;
					}
				}
				.secondary {
					margin-left: 10rpx;
					&::after {
						content: '';
						width: 2rpx;
						height: 24rpx;
						background-color: #A6F8EF;
						position: absolute;
						right: 0;
						top: 21rpx;
					}
				}
				.threeary {
					margin-left: 40rpx;
				}
			}
			.results {
				width: 100%;
				height: 100rpx;
				display: flex;
				text-align: center;
				justify-content: space-around;
				margin-top: 40rpx;
				.number {
					font-size: 36rpx;
					font-weight: bold;
				}
				.name {
					font-size: 24rpx;
					color: #A6F8EF;
				}
			}
		}
	}
	.monthRes {
		position: absolute;
		left: 0;
		top: 530rpx;
		border-radius: 40rpx 40rpx 0 0;
		z-index: 101;
		width: 100%;
		height: calc(100vh - 530rpx);
		background-color: #FFFFFF;
		.content {
			width: 690rpx;
			margin: 0 auto;
			height: 100%;
			.monthTitle {
				width: 100%;
				font-size: 32rpx;
				color: #333333;
				font-weight: bold;
				height: 90rpx;
				line-height: 90rpx;
			}
			.listItem {
				width: 100%;
				height: calc(100% - 90rpx);
				.resItem {
					width: 100%;
					height: 100rpx;
					background-color: #EEF2F3;
					border-radius: 16rpx;
					display: flex;
					align-items: center;
					margin-bottom: 30rpx;
					image {
						width: 68rpx;
						height: 68rpx;
						margin: 0 30rpx 0 16rpx;
					}
					.detail {
						width: 540rpx;
						display: flex;
						.name, .number {
							flex-shrink: 1;
							width: 50%;
						}
						.name {
							font-size: 28rpx;
							font-weight: bold;
							color: #333333;
						}
						.number {
							text-align: right;
							color: #78808B;
							font-size: 32rpx;
						}
					}
				}
				.big {
					margin-bottom: 62rpx !important;
				}
			}
			/* #ifdef H5 */
			.listItem {
				height: calc(100% - 190rpx) !important;
			}	
			/* #endif */
		}
	}
}
</style>
