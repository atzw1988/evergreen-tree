<template>
	<!-- 签订协议 -->
	<view class="agreementPage">
		<view class="steps">
			<TreeSteps :step="step"></TreeSteps>
		</view>
		<view class="content">
			<view class="title">申请须知</view>
			<view>1、请仔细阅读本须知及《代理人协议》，并提交真实、有效的申请资料;</view>
			<view>2、本申请代表您授权常青树为您申请代理人执业资格证;</view>
			<view>3、资料审核通过且完成执业资格的成功申请后，系统将自动生成您的代理人协议，您将成为常青树签约代理人(需在最后一步申请页面签名授权) ;</view>
			<view class="list">4、常青树将于10个工作日通知签约结果;</view>
			<block v-for="(item, index) in termsList" :key="index">
				<view class="terms">
					<image class="agreement" src="@/static/register/agreement.png" mode=""></image>
					<view class="text">{{item.title}}</view>
				</view>
			</block>
			<label class="radio">
				<radio class="radioItem" color="#00D6C0" :checked="checked" /><text>我已仔细阅读申请须知，并同意所有条款</text>
			</label>
			<tree-button text="下一步"></tree-button>
		</view>
	</view>
</template>

<script>
import TreeSteps from '@/components/common/TreeSteps/TreeSteps'

export default {
	components: {
		TreeSteps
	},
	data () {
		return {
			step: 1,
			termsList: [
				{
					title: '《太平经纪用户协议》'
				},
				{
					title: '《保险经纪从业人员委托协议(深圳分公司)》'
				},
				{
					title: '《太平保险经纪隐私政策》'
				}
			],
			checked: false
		}
	}
}
</script>

<style lang="less" scoped>
.agreementPage {
	width: 100%;
	height: 100vh;
	background-color: #FFFFFF;
	.steps {
		width: 650rpx;
		margin: 0 auto;
	}
	.content {
		width: 690rpx;
		margin: 30rpx auto;
		text-align: justify;
		.title {
			font-size: 32rpx;
			font-weight: bold;
			margin-bottom: 30rpx;
		}
		.list {
			margin-bottom: 60rpx;
		}
		.terms {
			margin-bottom: 18rpx;
			display: flex;
			align-items: center;
			.agreement {
				width: 22rpx;
				height: 28rpx;
				display: block;
				margin-right: 10rpx;
			}
			.text {
				color: #F3AB42;
			}
		}
		.radio {
			margin: 128rpx 0 54rpx;
			display: block;
			.radioItem {
				transform: scale(0.7);
			}
		}
	}
}
</style>
