<template>
	<view class="orderPage">
		<TabList :tabList="tabList" @changeTab="changeTab"></TabList>
		<scroll-view scroll-y="true" class="itemList">
			<block v-for="(item, index) in lists" :key="index">
				<OrderItem :item="item"></OrderItem>
			</block>
		</scroll-view>
	</view>
</template>

<script>
import TabList from '@/components/common/TabList/TabList'
import OrderItem from '@/components/common/OrderItem/OrderItem'
export default {
	components: {
		TabList,
		OrderItem
	},
	data () {
		return {
			tabList: [
				{
					title: '全部',
					value: 0
				},
				{
					title: '我的',
					value: 1
				},
				{
					title: '客户',
					value: 2
				}
			],
			lists: [
				{
					title: '尊享e生2019版',
					payStatus: 0,
					name: '朱飞燕',
					phone: '17754464614',
					orderNo: 'DD95234112',
					policyNo: 'BD1349176154'
				},
				{
					title: '尊享e生2019版',
					payStatus: 1,
					name: '朱飞燕',
					phone: '17754464614',
					orderNo: 'DD95234112',
					policyNo: 'BD1349176154'
				},
				{
					title: '尊享e生2019版',
					payStatus: 2,
					name: '朱飞燕',
					phone: '17754464614',
					orderNo: 'DD95234112',
					policyNo: 'BD1349176154'
				}
			]
		}
	},
	methods: {
		changeTab (id) {
			console.log(id)
		}
	}
}
</script>

<style lang="less" scoped>
.orderPage {
	width: 100%;
	height: 100vh;
	.itemList {
		width: 690rpx;
		height: calc(100vh - 80rpx);
		margin: 0 auto;
	}
}
</style>
