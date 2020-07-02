<template>
	<view class="examingPage">
		<view class="header">
			<view class="kind">单选题</view>
			<view class="time">{{filter.countDown(time)}}</view>
			<view class="number">共10题</view>
		</view>
		<scroll-view scroll-y="true" class="questions">
			<block v-for="(item, index) in questions" :key="index">
				<QuestionItem :item="item" @click="handleClick"></QuestionItem>
			</block>
			<tree-button
				margin="30rpx 0"
				text="下一步"
				@click="submit"></tree-button>
		</scroll-view>
	</view>
</template>
<wxs src="@/util/wxs/filter.wxs" module="filter"></wxs>

<script>
import { questions } from '@/util/data/questions.js'
import { checkExam } from '@/util/jutils.js'
import QuestionItem from '@/components/common/QuestionItem/QuestionItem'

export default {
	components: {
		QuestionItem
	},
	data () {
		return {
			questions: questions,
			result: new Array(questions.length),
			timeTick: null,
			time: 1800
		}
	},
	watch: {
		time (val) {
			console.log(val)
			if (val < 0) {
				clearInterval(this.timeTick)
				this.$base.dT('考试时间结束')
				setTimeout(() => {
					checkExam(this.result, (res, score, boolean) => {
						console.log(score, '跳转考试结果')
						clearInterval(this.timeTick)
						this.toExamResults(score)
					})
				}, 2000)
			}
		}
	},
	mounted () {
		this.timeTick = setInterval(() => {
			this.time --
		}, 1000)
	},
	beforeDestroy () {
		clearInterval(this.timeTick)
	},
	methods: {
		// 题目选择
		handleClick (boolean, qid, score) {
			console.log(boolean,qid)
			boolean? this.result[qid - 1] = score : this.result[qid - 1] = 0
		},
		// 答案提交
		submit () {
			console.log(this.result)
			checkExam(this.result, (res, score, boolean) => {
				if (boolean) {
					this.$base.dT(`第${res.join(',')}题未作答`)
				} else {
					console.log(score, '跳转考试结果')
					clearInterval(this.timeTick)
					this.toExamResults(score)
				}
			})
		},
		// 跳转考试结果
		toExamResults (score) {
			this.$_router.push({
				name: 'examResults',
				data: score
			})
		}
	}
}
</script>

<style lang="less" scoped>
.examingPage {
	width: 100%;
	height: 100vh;
	font-size: 28rpx;
	color: #333333;
	background-color: #FAFAFA;
	.header {
		width: 100%;
		height: 80rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.kind, .number {
			font-size: 24rpx;
			color: #BCC2CC;
			padding: 0 30rpx;
		}
		.time {
			font-size: 36rpx;
			color: #00D6C0;
			font-weight: bold;
		}
	}
	.questions {
		width: 690rpx;
		height: calc(100vh - 80rpx);
		margin: 0 auto;
	}
}	
</style>
