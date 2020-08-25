<template>
	<view class="productPage" :style="[pageTop]">
		<TabList :tabList="tabList" @changeTab="changeTab"></TabList>
		<scroll-view scroll-y="true" class="itemList">
			<block v-for="(item, index) in list" :key="index">
				<ProductDetail
					:item="item"
					:color="'#F3AB42'"
					:isStaff="true"
					@handleClick="handleClick"></ProductDetail>
			</block>
		</scroll-view>
	</view>
</template>

<script>
import TabList from '@/components/common/TabList/TabList'
import ProductDetail from '@/components/common/ProductDetail/ProductDetail.vue'
export default {
	components: {
		TabList,
		ProductDetail
	},
	data () {
		return {
			pageTop: {
				top: '100vh'
			},
			tabList: [
				{
					title: '推荐',
					value: 0
				},
				{
					title: '意外险',
					value: 1
				},
				{
					title: '健康险',
					value: 2
				},
				{
					title: '财险',
					value: 3
				},
				{
					title: '人寿险',
					value: 4
				}
			],
			list: [],
			listData: [
				{
					id: 0,
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					commi: 10,
					time: '月',
					icon: '../../static/product/product.png'
				},
				{
					id: 1,
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					commi: 10,
					time: '月',
					icon: '../../static/product/product.png'
				},
				{
					id: 2,
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					commi: 10,
					time: '月',
					icon: '../../static/product/product.png'
				},
				{
					id: 3,
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					commi: 10,
					time: '月',
					icon: '../../static/product/product.png'
				},
				{
					id: 4,
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					commi: 10,
					time: '月',
					icon: '../../static/product/product.png'
				},
				{
					id: 0,
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					commi: 10,
					time: '月',
					icon: '../../static/product/product.png'
				},
				{
					id: 1,
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					commi: 10,
					time: '月',
					icon: '../../static/product/product.png'
				},
				{
					id: 1,
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					commi: 10,
					time: '月',
					icon: '../../static/product/product.png'
				},
				{
					id: 1,
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					commi: 10,
					time: '月',
					icon: '../../static/product/product.png'
				}
			]
		}
	},
	methods: {
		// 切换标签
		changeTab (id) {
			this.list = this.listData.filter(item => {
				return item.id == id
			})
		},
		// 点击产品
		handleClick (item) {
			console.log(item)
		}
	},
	onShow () {
		this.list = this.listData
		this.pageTop = {
			top: '0rpx'
		}
	}
}

</script>

<style lang="less" scoped>
.productPage {
	width: 100%;
	height: 100vh;
	position: absolute;
	transition: all 1s ease-in-out;
	.itemList {
		width: 690rpx;
		margin: 0 auto;
		height: calc(100vh - 80rpx);
	}
	/* #ifdef H5 */
	.itemList {
		height: calc(100vh - 268rpx) !important;
	}	
	/* #endif */
}
</style>
