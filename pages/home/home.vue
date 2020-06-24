<template>
	<scroll-view scroll-y="true" class="homePage">
		<view class="banner">
			<image src="@/static/home/banner.png" mode=""></image>
		</view>
		<view class="menuList">
			<view v-for="(item,index) in menuList" :key="index" class="menuBox">
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
		</view>
	</scroll-view>
</template>

<script>
import ProductDetail from '../../components/common/ProductDetail/ProductDetail.vue'
export default {
	components: {
		ProductDetail
	},
	data () {
		return {
			menuList: [
				{
					name: '产品',
					icon: '../../static/home/productList.png'
				},
				{
					name: '订单',
					icon: '../../static/home/orderList.png'
				},
				{
					name: '团队',
					icon: '../../static/home/teams.png'
				},
				{
					name: '客户',
					icon: '../../static/home/customer.png'
				}
			],
			list: [
				{
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					time: '月',
					icon: '../../../static/home/thumb.png'
				},
				{
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					time: '月',
					icon: '../../../static/home/thumb.png'
				},
				{
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					time: '月',
					icon: '../../../static/home/thumb.png'
				},
				{
					name: '长期返还型意外险',
					value: '确诊即赔,最高50万',
					price: 6,
					time: '月',
					icon: '../../../static/home/thumb.png'
				}
			]
		}
	}
}
</script>

<style lang="less" scoped>
	.homePage {
		width: 100%;
		height: 100vh;
		background-color: #FFFFFF;
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
