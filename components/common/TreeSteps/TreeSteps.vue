<template>
	<view class="steps">
		<view class="list">
			<image class="Active" src="@/static/register/qianActive.png" mode=""></image>
		</view>
		<view class="list">
			<image v-if="step > 1" class="Active" src="@/static/register/zhengActive.png" mode=""></image>
			<image v-else class="default" src="@/static/register/zheng.png" mode=""></image>
		</view>
		<view class="list">
			<image v-if="step > 2" class="Active" src="@/static/register/kaActive.png" mode=""></image>
			<image v-else class="default" src="@/static/register/ka.png" mode=""></image>
		</view>
		<view class="list">
			<image v-if="step > 3" class="Active" src="@/static/register/shenActive.png" mode=""></image>
			<image v-else class="default" src="@/static/register/shen.png" mode=""></image>
		</view>
		<progress
			:percent="(step - 1) * 33.33 + 16.66"
			class="progress"
			activeColor="#00D6C0"
			stroke-width="2"/>
	</view>
</template>

<script>
	export default {
		name: 'TreeSteps',
		props: {
			step: {
				type: Number,
				default: 1
			}
		}
	}
</script>

<style lang="less" scoped>
.steps {
	width: 100%;
	height: 96rpx;
	display: flex;
	justify-content: space-between;
	position: relative;
	.list {
		width: 96rpx;
		height: 96rpx;
		z-index: 1001;
		.Active {
			width: 96rpx;
			height: 96rpx;
		}
		.default {
			width: 76rpx;
			height: 76rpx;
			margin: 10rpx;
		}
	}
	.progress {
		position: absolute;
		width: 554rpx;
		margin-left: 48rpx;
		margin-top: 47rpx;
		z-index: 1000;
	}
}
</style>
