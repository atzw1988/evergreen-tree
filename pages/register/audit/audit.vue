<template>
	<!-- 等待审核 -->
	<scroll-view scroll-y="true" class="auditPage">
		<view class="steps">
			<TreeSteps :step="step"></TreeSteps>
		</view>
		<view class="content">
			<image class="audit" src="@/static/register/audit.png" mode=""></image>
			<view class="tips">审核中，请耐心等待</view>
			<tree-button text="返回首页" @ckick="backHome"></tree-button>
		</view>
	</scroll-view>
</template>

<script>
import TreeSteps from '@/components/common/TreeSteps/TreeSteps'
import FormItem from '@/components/common/FormItem/FormItem'
export default {
	components: {
		TreeSteps,
		FormItem
	},
	data () {
		return {
			step: 4
		}
	},
	methods: {
		// 返回首页
		backHome () {
			console.log('返回首页')
		}
	}
}
</script>

<style lang="less" scoped>
.auditPage {
	width: 100%;
	height: 100vh;
	.steps {
		width: 650rpx;
		margin: 0 auto;
	}
	.content {
		width: 690rpx;
		margin: 0 auto;
		.audit {
			width: 290rpx;
			height: 296rpx;
			display: block;
			margin: 200rpx auto 20rpx;
		}
		.tips {
			width: 100%;
			text-align: center;
			margin-bottom: 50rpx;
		}
	}
}
</style>
