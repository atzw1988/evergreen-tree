<template>
	<scroll-view scroll-x="true" class="tabBar">
		<view class="tabBarContent">
			<view
				:id="index"
				@click="changeTab"
				class="tabBarItem"
				:class="[{active: active == item.value}]"
				v-for="(item, index) in tabList" :key="index">
				{{item.title}}
			</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	name: 'TabList',
	props: {
		tabList: {
			type: Array,
			default: () => { return [] }
		}
	},
	data () {
		return {
			active: 0
		}
	},
	methods: {
		changeTab ({currentTarget: {id}}) {
			this.active = id
			this.$emit('changeTab', id)
		}
	}
}
</script>

<style lang="less" scoped>
.tabBar {
	width: 100%;
	height: 80rpx;
	background-color: #FFFFFF;
	.tabBarContent {
		width: 100%;
		height: 80rpx;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
		.tabBarItem {
			padding: 10rpx 0;
			font-size: 28rpx;
			color: #999999;
			flex-shrink: 1;
			position: relative;
		}
		.active {
			color: #333333 !important;
			font-weight: bold;
			&::after {
				content: '';
				width: 100%;
				height: 8rpx;
				background-color: #00D6C0;
				position: absolute;
				bottom: 0;
				left: 0;
				border-radius: 2rpx;
			}
		}
	}
}
</style>
