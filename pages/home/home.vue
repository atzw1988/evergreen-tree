<template>
	<scroll-view scroll-y="true" class="homePage">
		<view class="banner">
			<image src="@/static/home/banner.png" mode=""></image>
		</view>
		<view class="menuList">
			<view v-for="(item,index) in menuList" :key="index" class="menuBox" @click="handleMenu(item.menu)">
				<image :src="item.icon" mode=""></image>
				<view class="titleName">{{item.name}}</view>
			</view>
		</view>
		<view class="hotProduct">
			<view class="hotTitle">爆款产品 <image src="@/static/home/hotTitle.png" mode=""></image></view>
			<view class="hotDetail">
				<image src="@/static/home/family.png" mode=""></image>
			</view>
		</view>
		<view class="productList">
			<view class="listTitle">精品推荐<image src="@/static/home/productTitle.png" mode=""></image></view>
			<block v-for="(item, index) in list" :key="index">
				<ProductDetail :item="item"></ProductDetail>
			</block>
			<Spin fix v-if="isShow"></Spin>
		</view>
		<Notify id="notify"></Notify>
	</scroll-view>
</template>

<script>
import ProductDetail from '@/components/common/ProductDetail/ProductDetail.vue'
import { getStep } from '@/util/api.js'
export default {
	// 测试分支
	components: {
		ProductDetail
	},
	data () {
		return {
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
			menuList: [
				{
					name: '产品',
					menu: 'product',
					icon: '../../static/home/productList.png'
				},
				{
					name: '订单',
					menu: 'order',
					icon: '../../static/home/orderList.png'
				},
				{
					name: '团队',
					menu: 'team',
					icon: '../../static/home/teams.png'
				},
				{
					name: '客户',
					menu: 'customer',
					icon: '../../static/home/customer.png'
				}
			],
			list: [
				{
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					time: '月',
					// icon: '../../../static/home/thumb.png',
					icon: 'http://iph.href.lu/80x80?fg=666666&bg=cccccc'
				},
				{
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					time: '月',
					// icon: '../../../static/home/thumb.png'
					icon: 'http://iph.href.lu/80x80?fg=666666&bg=cccccc'
				},
				{
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					time: '月',
					// icon: '../../../static/home/thumb.png'
					icon: 'http://iph.href.lu/80x80?fg=666666&bg=cccccc'
				},
				{
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					time: '月',
					// icon: '../../../static/home/thumb.png'
					icon: 'http://iph.href.lu/80x80?fg=666666&bg=cccccc'
				}
			],
			isShow: false
		}
	},
	onShow () {
		// this.getStep()
		const res = uni.getSystemInfoSync()
		console.log(res)
		this.isShow = true
		setTimeout(() => {
			this.isShow = false
		}, 3000)
	},
	methods: {
		// 跳转菜单
		handleMenu (menu) {
			console.log(menu)
			// this.$base.sM('测试通知')
			this.$_router.push({
				name: menu
			})
		},
		// 获取步数
		async getStep () {
			this.isShow = true
			const params = {
				month: '2020-06',
				userId: '2725'
			}
			let { code, data } = await getStep(params)
			console.log(data)
			if (code == 200) {
				this.isShow = false
			}
		}
	}
}
</script>

<style lang="less" scoped>
	/* #ifdef H5 */
	.homePage {
		height: calc(100vh - 188rpx) !important;
	}	
	/* #endif */
	.homePage {
		width: 100%;
		height: 100vh;
		color: #333333;
		.banner {
			width: 690rpx;
			height: 272rpx;
			margin: 0 auto;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.menuList {
			display: flex;
			width: 100%;
			height: auto;
			justify-content: space-around;
			margin-top: 50rpx;
			.menuBox {
				width: 110rpx;
				height: auto;
				image {
					width: 110rpx;
					height: 110rpx;
					display: block;
				}
				.titleName {
					font-size: 24rpx;
					text-align: center;
					width: 100%;
				}
			}
		}
		.hotProduct {
			width: 690rpx;
			margin: 50rpx auto 0;
			.hotTitle {
				width: 100%;
				height: 50rpx;
				font-size: 36rpx;
				font-weight: bold;
				image {
					display: inline-block;
					width: 126rpx;
					height: 31rpx;
					margin-left: 20rpx;
				}
			}
			.hotDetail {
				width: 100%;
				height: 230rpx;
				margin-top: 40rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
		.productList {
			width: 690rpx;
			margin: 50rpx auto 0;
			position: relative;
			min-height: 300rpx;
			.listTitle {
				width: 100%;
				height: 50rpx;
				font-size: 36rpx;
				font-weight: bold;
				margin-bottom: 10rpx;
				image {
					display: inline-block;
					width: 126rpx;
					height: 31rpx;
					margin-left: 20rpx;
				}
			}
		}
	}
</style>
