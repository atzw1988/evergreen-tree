<template>
	<!-- 邀请好友 -->
	<view class="invitePage">
		<image class="header" src="@/static/mine/inviteHeader.png" mode=""></image>
		<view class="detail" @click="toDetail">
			<view class="list">
				<view class="name">已邀请(人)</view>
				<view class="number">{{invite}}</view>
			</view>
			<view class="list">
				<view class="name">出单好友(人)</view>
				<view class="number">{{deal}}</view>
			</view>
			<view class="list">
				<view class="name">已获得(元)</view>
				<view class="number">{{money}}</view>
			</view>
		</view>
		<view class="shadow"></view>
		<view class="content">
			<view class="title">你可获得</view>
			<view class="text">邀请新人加入，新人出单</view>
			<view class="text">额外获得新人出单保费10%的收入。</view>
			<image class="detailImg" src="http://iph.href.lu/162x92?fg=666666&bg=cccccc" mode=""></image>
			<tree-button text="去邀请" @click="handleInvite"></tree-button>
		</view>
	</view>
</template>

<script>
export default {
	data () {
		return {
			invite: 5,
			deal: 2,
			money: 680.51
		}
	},
	methods: {
		handleInvite () {
			console.log('去邀请')
		},
		// 查看邀请明细
		toDetail () {
			this.$_router.push({
				name: 'inviteDetail'
			})
		}
	}
}
</script>

<style lang="less" scoped>
.invitePage {
	width: 100%;
	position: relative;
	.header {
		width: 100%;
		height: 408rpx;
		z-index: 100;	}
	.detail {
		width: 690rpx;
		height: 160rpx;
		position: absolute;
		top: 340rpx;
		left: 30rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #FFFFFF;
		z-index: 101;
		border-radius: 8rpx;
		.list {
			text-align: center;
			.name {
				font-size: 24rpx;
			}
			.number {
				font-size: 48rpx;
				font-weight: bold;
			}
		}
	}
	.shadow {
		width: 668rpx;
		height: 36rpx;
		background: linear-gradient(#e0f2f1, rgba(255,255,255,0));
		filter: blur(3pt);
		position: absolute;
		top: 500rpx;
		left: 40rpx;
	}
	.content {
		width: 100%;
		.title, .text {
			width: 100%;
			text-align: center;
		}
		.title {
			font-size: 36rpx;
			font-weight: bold;
			margin-top: 192rpx;
		}
		.text {
			color: #B0CBCC;
			margin-top: 16rpx;
		}
		.detailImg {
			width: 324rpx;
			height: 184rpx;
			margin: 44rpx auto 80rpx;
			display: block;
		}
	}
}
</style>
