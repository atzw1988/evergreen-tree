<template>
	<view class="minePage">
		<view style="height: 1rpx;"></view>
		<view class="header">
			<view class="portrait">
				<image src="../../static/mine/portrait.png" mode=""></image>
			</view>
			<view class="person">
				<view class="name">{{nickName}}</view>
				<view class="binding" @click="handleBind">绑定经纪人</view>
			</view>
		</view>
		<view class="income">
			<view class="title">累计收入(元)</view>
			<view class="detail">
				<view class="money">{{filter.moneyFormat(money)}}</view>
				<view class="settled">已结算<text>{{settled}}</text></view>
				<view class="settle">待结算<text>{{settle}}</text></view>
			</view>
		</view>
		<view class="menu">
			<view class="menuTitle">常用功能</view>
			<uni-grid :column="3" :show-border="false" :square="false" @change="handleMenu">
				<block v-for="(item, index) in menu" :key="index">
					<uni-grid-item :index="index">
						<view class="itemMenu">
							<image :src="item.icon" mode=""></image>
							<view class="name">{{item.value}}</view>
						</view>
					</uni-grid-item>
				</block>
			</uni-grid>
		</view>
	</view>
</template>
<wxs src="@/util/wxs/filter.wxs" module="filter"></wxs>

<script>
export default {
	data () {
		return {
			nickName: '游客',
			money: 10000,
			settled: 1634,
			settle: 5412,
			menu: [
				{
					id: 0,
					value: '保单管理',
					icon: '../../static/mine/policyMana.png',
					name: 'policyMana'
				},
				{
					id: 1,
					value: '客户管理',
					icon: '../../static/mine/customer.png',
					name: 'customer'
				},
				{
					id: 2,
					value: '我的订单',
					icon: '../../static/mine/order.png',
					name: 'order'
				},
				{
					id: 3,
					value: '帮助中心',
					icon: '../../static/mine/services.png',
					name: 'service'
				},
				{
					id: 4,
					value: '邀请',
					icon: '../../static/mine/invite.png',
					name: 'invite'
				}
			]
		}
	},
	methods: {
		// 菜单跳转
		handleMenu ({detail: {index}}) {
			console.log(index)
			this.$_router.push({
				name: this.menu[index].name
			})
		},
		// 跳转绑定经纪人
		handleBind () {
			this.$_router.push({
				name: 'bind'
			})
		}
	}
}
</script>

<style lang="less" scoped>
.minePage {
	width: 690rpx;
	// width: 100%;
	padding: 0 30rpx;
	height: 100vh;
	margin: 0 auto;
	color: #333333;
	font-size: 24rpx;
	background-color: #FAFAFA;
	.header {
		width: 100%;
		margin-top: 30rpx;
		display: flex;
		.portrait {
			width: 90rpx;
			height: 90rpx;
			border-radius: 50%;
			overflow: hidden;
			margin-right: 20rpx;
			image {
				width: 90rpx;
				height: 90rpx;
			}
		}
		.person {
			width: 580rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.name {
				font-size: 36rpx;
				font-weight: bold;
			}
			.binding {
				width: 220rpx;
				height: 60rpx;
				background-color: #F8CC8D;
				border-radius: 30rpx;
				text-align: center;
				line-height: 60rpx;
				font-size: 28rpx;
				color: #FFFFFF;
				font-weight: bold;
			}
		}
	}
	.income {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
		height: 186rpx;
		margin-top: 30rpx;
		background-color: #00D6C0;
		border-radius: 8rpx;
		box-shadow: 0 6rpx 12rpx 0 rgba(0, 0, 0, 0.05);
		.title {
			width: 630rpx;
			margin-top: 30rpx;
			color: #FEFEFF;
		}
		.detail {
			width: 630rpx;
			height: 80rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.money {
				font-size: 56rpx;
				color: #FFFFFF;
				font-weight: bold;
			}
			.settled, .settle {
				color: #FFFFFF;
				text {
					margin-left: 20rpx;
				}
			}
		}
	}
	.menu {
		width: 100%;
		height: 520rpx;
		background-color: #FFFFFF;
		border-radius: 8rpx;
		margin-top: 60rpx;
		.menuTitle {
			width: 100%;
			height: 100rpx;
			border-bottom: 2rpx solid #EDEDED;
			font-size: 32rpx;
			font-weight: bold;
			text-indent: 30rpx;
			line-height: 100rpx;
		}
		.itemMenu {
			width: 100%;
			height: 100%;
			image {
				display: block;
				width: 88rpx;
				height: 88rpx;
				margin: 48rpx auto 0;
			}
			.name {
				width: 100%;
				text-align: center;
				margin-top: 8rpx;
			}
		}
	}
}
</style>
