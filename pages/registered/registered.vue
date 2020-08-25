<template>
	<view class="registered">
		<view style="height: 1rpx;"></view>
		<view class="content">
			<view style="height: 1rpx;"></view>
			<image class="image" src="../../static/mine/invitation.png" mode=""></image>
			<view class="inviter">
				<view class="value">
					<view class="name">校长</view>
					<view class="phone">{{filter.shelter('18611111561', 3, 4)}}</view>
				</view>
				<view class="title">
					<view class="list name">邀请人</view>
					<view class="list phone">邀请人手机号</view>
				</view>
			</view>
			<view class="left"></view>
			<view class="right"></view>
			<view class="myPhone">{{filter.shelter('17011111342', 3, 4)}}</view>
			<view class="mytitle">我的手机号</view>
			<view class="tips">*请仔细核对团队名称及邀请人信息*</view>
		</view>
		<tree-button text="立即加入"></tree-button>
	</view>
</template>
<wxs src="@/util/wxs/filter.wxs" module="filter"></wxs>

<script>
</script>

<style lang="less" scoped>
.registered {
	width: 100%;
	height: 100vh;
	background-color: #F8F8F8;
	.content {
		width: 690rpx;
		height: 848rpx;
		border-radius: 30rpx;
		margin: 30rpx auto 52rpx;
		background-color: #FFFFFF;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			width: 100%;
			border-bottom: 4rpx dashed #F6F6F6;
			top: 530rpx;
			left: 0;
		}
		.image {
			width: 316rpx;
			height: 234rpx;
			display: block;
			margin: 56rpx auto 0;
		}
		.inviter {
			width: 100%;
			margin-top: 66rpx;
			.value {
				font-size: 36rpx;
				font-weight: bold;
				display: flex;
				justify-content: center;
			}
			.title {
				width: 100%;
				margin-top: 20rpx;
				display: flex;
				justify-content: center;
				.list {
					color: #BCC2CC;
				}
			}
			.name {
				width: 140rpx;
			}
			.phone {
				width: 200rpx;
			}
		}
		.left, .right {
			position: absolute;
			width: 36rpx;
			height: 36rpx;
			background-color: #F8F8F8;
			border-radius: 50%;
			top: 514rpx;
		}
		.left {
			left: -18rpx;
		}
		.right {
			right: -18rpx;
		}
		.myPhone {
			width: 100%;
			font-size: 48rpx;
			text-align: center;
			margin-top: 116rpx;
			font-weight: bold;
		}
		.mytitle {
			width: 100%;
			font-size: 24rpx;
			color: #BCC2CC;
			text-align: center;
			margin-top: 16rpx;
		}
		.tips {
			width: 100%;
			font-size: 24rpx;
			color: #F3AB42;
			text-align: center;
			margin-top: 60rpx;
		}
	}
}
</style>
