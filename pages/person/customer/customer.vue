<template>
	<view class="customerPage">
		<TabList :tabList="tabList" @changeTab="changeTab"></TabList>
		<scroll-view scroll-y="true" class="itemList">
			<block v-for="(item, index) in lists" :key="index">
				<CustomerItem :items="item" @click="toDetail"></CustomerItem>
			</block>
		</scroll-view>
	</view>
</template>

<script>
import router from '@/router/index.js'
import TabList from '@/components/common/TabList/TabList'
import CustomerItem from '@/components/common/CustomerItem/CustomerItem'

export default {
	components: {
		TabList,
		CustomerItem
	},
	data () {
		return {
			tabList: [
				{
					title: '全部',
					value: 0
				},
				{
					title: '在保',
					value: 1
				},
				{
					title: '不在保',
					value: 2
				}
			],
			lists: [
				{
					name: '朱飞燕',
					order: 3,
					now: 1,
					money: '5712.00',
					status: 0,
					phone: '18318039639'
				},
				{
					name: '朱飞燕',
					order: 3,
					now: 1,
					money: '5712.00',
					status: 0,
					phone: '18318039639'
				},
				{
					name: '朱飞燕',
					order: 3,
					now: 1,
					money: '5712.00',
					status: 1,
					phone: '18318039639'
				},
				{
					name: '朱飞燕',
					order: 3,
					now: 1,
					money: '5712.00',
					status: 1,
					phone: '18318039639'
				}
			]
		}
	},
	methods: {
		// 切换标签
		changeTab (id) {
			console.log(id)
		},
		// 跳转客户详情
		toDetail (data) {
			console.log(data)
			router.push({
				name: 'customerInfo',
				data: data
			})
		}
	}
}
</script>

<style lang="less" scoped>
.customerPage {
	width: 100%;
	height: 100vh;
	background-color: #FAFAFA;
	.itemList {
		width: 690rpx;
		height: calc(100vh - 80rpx);
		margin: 0 auto;
	}
	/* #ifdef H5 */
	.itemList {
		height: calc(100vh - 168rpx) !important;
	}	
	/* #endif */
}
</style>
