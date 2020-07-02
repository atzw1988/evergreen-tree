<template>
	<view class="policyManaPage">
		<TabList :tabList="tabList" @changeTab="changeTab"></TabList>
		<scroll-view scroll-y="true" class="itemList">
			<block v-for="(item, index) in list" :key="index">
				<PolicyItem
				 :item="item"></PolicyItem>
			</block>
		</scroll-view>
	</view>
</template>

<script>
import TabList from '@/components/common/TabList/TabList'
import PolicyItem from '@/components/common/PolicyItem/PolicyItem'
export default {
	components: {
		TabList,
		PolicyItem
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
			list: [
				{
					name: '笑笑',
					kind: 1,
					startTime: '2020-03-25 00:00:00',
					endTime: '2023-03-25 23:59:59',
					price: '98.00',
					phone: '18318039639',
					orderNo: 'DZ09235134164'
				},
				{
					name: '闹闹',
					kind: 1,
					startTime: '2020-03-25 00:00:00',
					endTime: '2023-03-25 23:59:59',
					price: '98.00',
					phone: '18318039639',
					orderNo: 'DZ09235134164'
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
.policyManaPage {
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
