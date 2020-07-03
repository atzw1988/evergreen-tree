<template>
	<view class="tree-sticky" :style="{top: offsetTop + 'rpx', zIndex: zIndex}">
		<view><slot></slot></view>
	</view>
</template>

<script>
export default {
	name: 'TreeSticky',
	props: {
		zIndex: {
			type: Number,
			default: 99
		},
		offsetTop: {
			type: Number,
			default: 0
		}
	}
}
</script>

<style lang="less" scoped>
.tree-sticky {
	position: sticky;
	width: 100%;
}
</style>
