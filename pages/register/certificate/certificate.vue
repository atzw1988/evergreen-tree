<template>
	<!-- 身份认证 -->
	<scroll-view scroll-y="true" class="certificate">
		<view class="steps">
			<TreeSteps :step="step"></TreeSteps>
		</view>
		<view class="content">
			<view class="title">证件信息</view>
			<view class="tips">*请拿出本人有效二代身份证件准备拍摄，拍摄时确保身份证边框完整、字体清晰、亮度均匀</view>
			<view class="positive" @click="upLoadImg" data-code="positive">
				<image v-if="img.positive" :src="img.positive"></image>
				<view v-else class="icon">
					<image class="iconImg" src="http://iph.href.lu/58x58?fg=666666&bg=cccccc" mode=""></image>
					<view class="text">国徽面上传</view>
				</view>
			</view>
			<view class="back" @click="upLoadImg" data-code="back">
				<image v-if="img.back" :src="img.back" mode=""></image>
				<view v-else class="icon">
					<image class="iconImg" src="http://iph.href.lu/58x58?fg=666666&bg=cccccc" mode=""></image>
					<view class="text">人像面上传</view>
				</view>
			</view>
			<view class="handheld" @click="upLoadImg" data-code="handheld">
				<image v-if="img.handheld" :src="img.handheld" mode=""></image>
				<view v-else class="icon">
					<image class="iconImg" src="http://iph.href.lu/58x58?fg=666666&bg=cccccc" mode=""></image>
					<view class="text">手持身份证上传</view>
				</view>
			</view>
			<view class="registration" @click="upLoadImg" data-code="registration">
				<image v-if="img.registration" :src="img.registration" mode=""></image>
				<view v-else class="icon">
					<image class="iconImg" src="http://iph.href.lu/58x58?fg=666666&bg=cccccc" mode=""></image>
					<view class="text">登记照</view>
				</view>
			</view>
			<FormItem
				:width="200"
				text="下一步"
				:formList="formList"
				:loading="loading"
				:img="img"
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
			step: 2,
			loading: false,
			img: {
				positive: null,
				back: null,
				handheld: null,
				registration: null
			},
			formList: [
				{
					kind: 'img',
					name: 'positive',
					required: true,
					msg: '请上传身份证国徽面',
				},
				{
					kind: 'img',
					name: 'back',
					required: true,
					msg: '请上传身份证人像面',
				},
				{
					kind: 'img',
					name: 'handheld',
					required: true,
					msg: '请上传手持身份证',
				},
				{
					kind: 'img',
					name: 'registration',
					required: true,
					msg: '请上传登记照',
				},
				{
					kind: 'input',
					lable: '姓名',
					name: 'name',
					placeholder: '请输入姓名',
					required: true,
					msg: '姓名不能为空',
				},
				{
					kind: 'picker',
					lable: '选择证件',
					name: 'cardkind',
					placeholder: '请选择证件类型',
					required: true,
					msg: '证件类型不能为空',
					mode: 'selector',
					array: [
						{
							value: 0,
							name: '身份证'
						},
						{
							value: 1,
							name: '护照'
						}
					]
				},
				{
					kind: 'input',
					lable: '证件号码',
					name: 'cardNumber',
					placeholder: '请输入证件号码',
					required: true,
					msg: '证件号码不能为空',
				},
				{
					kind: 'picker',
					lable: '证件起始时间',
					name: 'start',
					placeholder: '请选择证件起始时间',
					required: true,
					msg: '证件起始时间不能为空',
					mode: 'date'
				},
				{
					kind: 'picker',
					lable: '证件终止时间',
					name: 'end',
					placeholder: '请选择证件终止时间',
					required: true,
					msg: '证件终止时间不能为空',
					mode: 'date'
				},
				{
					kind: 'input',
					lable: '职业',
					name: 'profession',
					placeholder: '请输入职业',
					required: true,
					msg: '职业不能为空',
				},
				{
					kind: 'picker',
					lable: '是否在职',
					name: 'onjob',
					placeholder: '请选择是否在职',
					required: true,
					msg: '是否在职不能为空',
					mode: 'selector',
					array: [
						{
							value: 0,
							name: '在职'
						},
						{
							value: 1,
							name: '离职'
						}
					]
				},
				{
					kind: 'picker',
					lable: '政治面貌',
					name: 'politics',
					placeholder: '请选择政治面貌',
					required: true,
					msg: '政治面貌不能为空',
					mode: 'selector',
					array: [
						{
							value: 0,
							name: '党员'
						},
						{
							value: 1,
							name: '群众'
						}
					]
				},
				{
					kind: 'picker',
					lable: '文化程度',
					name: 'education',
					placeholder: '请选择文化程度',
					required: true,
					msg: '文化程度不能为空',
					mode: 'selector',
					array: [
						{
							value: 0,
							name: '博士'
						},
						{
							value: 1,
							name: '本科'
						}
					]
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
	background-color: #FFFFFF;
	.steps {
		width: 650rpx;
		margin: 0 auto;
	}
	.content {
		width: 690rpx;
		margin: 0 auto;
		.title {
			font-size: 32rpx;
			font-weight: bold;
			margin: 30rpx 0;
		}
		.tips {
			font-size: 24rpx;
			color: #F3AB42;
			margin-bottom: 32rpx;
		}
		.positive, .back, .handheld, .registration {
			width: 690rpx;
			height: 408rpx;
			margin-bottom: 40rpx;
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
