<template>
	<view class="item">
		<view class="content">
			<view class="header">
				<view class="number">第{{item.qid}}题</view>
				<view class="score">本题{{item.score}}分</view>
			</view>
			<view class="question">{{item.question}}</view>
			<block v-for="(ele, index) in item.options" :key="index">
				<view class="options" @click="handleClick" :id="index" :class="[filter.checked(index, id)]">{{ele}}</view>
			</block>
		</view>
	</view>
</template>
<wxs src="@/util/wxs/filter.wxs" module="filter"></wxs>

<script>
export default {
	name: 'QuestionItem',
	props: {
		item: {
			type: Object,
			default: () => { return {} }
		}
	},
	data () {
		return {
			id: null
		}
	},
	methods: {
		// 答案选择
		handleClick ({currentTarget: {id}}) {
			this.id = id
			this.$emit('click', id == this.item.right, this.item.qid, this.item.score)
		}
	}
}
</script>

<style lang="less" scoped>
.item {
	width: 100%;
	height: 760rpx;
	background-color: #FFFFFF;
	border-radius: 24rpx;
	margin-top: 30rpx;
	color: #333333;
	.content {
		width: 630rpx;
		margin: 28rpx auto 0;
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 80rpx;
		}
		.number {
			font-weight: bold;
		}
		.score {
			color: #BCC2CC;
		}
	}
	.question {
		text-align: justify;
		margin-bottom: 56rpx;
	}
	.options {
		width: 100%;
		height: 88rpx;
		border-radius: 44rpx;
		background-color: #F6F5FA;
		font-weight: bold;
		text-align: center;
		line-height: 88rpx;
		margin-bottom: 30rpx;
	}
	.checked {
		background-color: #00D6C0 !important;
		color: #FFFFFF;
	}
}
</style>
