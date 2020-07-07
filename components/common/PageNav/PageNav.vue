<template>
	<view class="pageNav" :style="{ backgroundColor: bgColor }">
		<view style="height: 1rpx;"></view>
		<view
			class="navbar"
			:style="{
				marginTop: globalData.safeAreaInsets.top + 'px'
			}">
			<image
				v-if="white"
				class="back"
				@click="handleClick"
				src="@/static/common/backDark.png" mode=""></image>
			<image
				v-else
				class="back"
				@click="handleClick"
				src="@/static/common/back.png" mode=""></image>
			{{title}}
		</view>
	</view>
</template>

<script>
export default {
	name: 'PageNav',
	props: {
		title: {
			type: String,
			default: '产品模型'
		},
		white: {
			type: Boolean,
			default: true
		},
		isPage: {
			type: Boolean,
			default: true
		},
		bgColor: {
			type: String,
			default: '#FFFFFF'
		}
	},
	data () {
		return {
			globalData: null
		}
	},
	mounted () {
		this.globalData = getApp().globalData
	},
	methods: {
		// 点击后退或者关闭当前页面
		handleClick () {
			this.isPage? this.$_router.pop() : this.$emit('click')
		}
	}
}
</script>

<style lang="less" scoped>
.pageNav {
	width: 100%;
	.navbar {
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
		position: relative;
		.back {
			width: 36rpx;
			height: 36rpx;
			display: block;
			position: absolute;
			top: 26rpx;
			left: 26rpx;
		}
	}
}
</style>
