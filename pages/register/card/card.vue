<template>
	<!-- 银行信息 -->
	<scroll-view scroll-y="true" class="certificate">
		<view class="steps">
			<TreeSteps :step="step"></TreeSteps>
		</view>
		<view class="content">
			<view class="bankCard" @click="upLoadImg" data-code="bankCard">
				<image v-if="img.bankCard" :src="img.bankCard"></image>
				<view v-else class="icon">
					<image class="iconImg" src="http://iph.href.lu/58x58?fg=666666&bg=cccccc" mode=""></image>
					<view class="text">银行卡拍照上传</view>
				</view>
			</view>
			<view class="tips">*请核对银行卡资料，以免影响您的权益</view>
			<FormItem
				:width="200"
				text="下一步"
				:formList="formList"
				:loading="loading"
				:img="img"
				@areaChange="areaChange"
				@submit="submit"></FormItem>
		</view>
	</scroll-view>
</template>

<script>
import TreeSteps from '@/components/common/TreeSteps/TreeSteps'
import FormItem from '@/components/common/FormItem/FormItem'
export default {
	components: {
		TreeSteps,
		FormItem
	},
	data () {
		return {
			step: 3,
			loading: false,
			img: {
				bankCard: null
			},
			formList: [
				{
					kind: 'img',
					name: 'bankCard',
					required: true,
					msg: '请上传银行卡照片',
				},
				{
					kind: 'picker',
					lable: '省市',
					name: 'area',
					placeholder: '请选择省市',
					required: true,
					msg: '省市不能为空',
					mode: 'region'
				},
				{
					kind: 'picker',
					lable: '银行支行',
					name: 'cardkind',
					placeholder: '请选择银行支行',
					required: true,
					msg: '银行支行不能为空',
					mode: 'selector',
					array: [
						{
							value: 0,
							name: '北京市'
						},
						{
							value: 1,
							name: '河北省'
						}
					]
				},
				{
					kind: 'input',
					lable: '持卡人姓名',
					name: 'cardName',
					placeholder: '请输入持卡人姓名',
					required: true,
					msg: '持卡人姓名不能为空',
				},
				{
					kind: 'input',
					lable: '银行卡号',
					name: 'cardNumber',
					placeholder: '请输入银行卡号',
					required: true,
					msg: '银行卡号不能为空',
				}
			]
		}
	},
	methods: {
		// 图片上传
		upLoadImg ({currentTarget: {dataset: {code}}}) {
			console.log(code)
			uni.chooseImage({
				count: 1,
				sizeType: ['compressed'],
				success: (res) => {
					console.log(res)
					this.img[code] = res.tempFilePaths[0]
				},
				fail: (error) => {
					console.log(error)
				}
			})
		},
		// 地市选择变化
		areaChange (value, id) {
			this.formList[2].array = [
				{
					value: 0,
					name: '测试分行一'
				},
				{
					value: 1,
					name: '测试分行二'
				}
			]
		},
		// 提交
		submit (value) {
			console.log(value)
			this.loading = true
		}
	}
}
</script>

<style lang="less" scoped>
.certificate {
	width: 100%;
	height: 100vh;
	.steps {
		width: 650rpx;
		margin: 0 auto;
	}
	.content {
		width: 690rpx;
		margin: 0 auto;
		.tips {
			font-size: 24rpx;
			color: #F3AB42;
			margin-bottom: 32rpx;
		}
		.bankCard {
			width: 690rpx;
			height: 408rpx;
			margin: 52rpx 0 60rpx;
			border-radius: 16rpx;
			background-color: #F3FAF9;
			display: flex;
			justify-content: center;
			align-items: center;
			image {
				height: 100%;
			}
			.icon {
				width: 200rpx;
				.iconImg {
					display: block;
					width: 116rpx;
					height: 116rpx;
					margin: 0 auto;
				}
				.text {
					font-weight: bold;
					text-align: center;
					margin: 30rpx auto 0;
				}
			}
		}
	}
}
</style>
