<template>
	<view class="proDemo">
		<FormProduct
			:formList="formList"
			:canMore="canMore"
			@addInsured="addInsured"
			@pickerChange="pickerChange">
			<view class="test" slot="abstract">
				<view class="banner">
					<view
						class="item"
						v-for="(item, index) in styleList"
						:style="{
							left: item.left + 'rpx',
							top: item.top + 'rpx',
							transform: item.transform
						}"
						:key="index">
						<image class="img" src="../../../static/home/customer.png" mode=""></image>
					</view>
				</view>
				<button type="default" @click="handleClick">点击</button>
				<view class="banner">
					<view class="cardDemo" :style="{transform: card.post.tran, opacity: card.post.opacity}">
						正面
					</view>
					<view class="cardDemo" :style="{transform: card.side.tran, opacity: card.side.opacity}">
						反面
					</view>
				</view>
			</view>
		</FormProduct>
	</view>
</template>

<script>
import FormProduct from '@/components/common/FormProduct/FormProduct'
export default {
	components: {
		FormProduct
	},
	data () {
		return {
			formList: [
				{
					title: '本人信息（投保人）',
					formField: 'selfInfo',
					formInfo: [
						[
							{
								kind: 'input',
								lable: '姓名',
								name: 'name',
								placeholder: '请输入投保人姓名',
								required: true,
								msg: '投保人姓名不能为空',
							},
							{
								kind: 'picker',
								lable: '证件类型',
								name: 'cardKind',
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
								],
								value: {
									value: 0,
									name: '身份证'
								}
							},
							{
								kind: 'input',
								lable: '证件号',
								name: 'cardNumber',
								placeholder: '请输入证件号',
								required: true,
								msg: '投保人证件号不能为空',
								message: '请输入正确的投保人证件号',
								len: [18, 18]
							},
							{
								kind: 'input',
								lable: '手机号',
								name: 'phone',
								placeholder: '请输入手机号',
								required: true,
								msg: '投保人手机号不能为空',
								message: '请输入正确的投保人手机号',
								reg: '^[1][3,4,5,6,7,8,9][0-9]{9}$'
							}
						]
					]
				},
				{
					title: '投保种类',
					formField: 'kind',
					formInfo: [
						[
							{
								kind: 'radio',
								name: 'kind',
								array: [
									{
										value: 0,
										name: '个人版'
									},
									{
										value: 1,
										name: '家庭版2-7版'
									}
								],
								value: {
									value: 0,
									name: '个人版'
								}
							}
						]
					]
				},
				{
					title: '为谁投保（被保险人）',
					formField: 'insureds',
					formInfo: [
						[
							{
								kind: 'picker',
								lable: '关系',
								name: 'relation',
								placeholder: '请选择被保人与投保人关系',
								required: true,
								msg: '被保人与投保人关系不能为空',
								mode: 'selector',
								array: [
									{
										value: 0,
										name: '本人'
									},
									{
										value: 1,
										name: '配偶'
									}
								],
								value: {
									value: 1,
									name: '配偶'
								}
							},
							{
								kind: 'input',
								lable: '姓名',
								name: 'name',
								placeholder: '请输入被保人姓名',
								required: true,
								msg: '被保人姓名不能为空',
							},
							{
								kind: 'picker',
								lable: '证件类型',
								name: 'cardKind',
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
								],
								value: {
									value: 0,
									name: '身份证'
								}
							},
							{
								kind: 'input',
								lable: '证件号',
								name: 'cardNumber',
								placeholder: '请输入被保人证件号',
								required: true,
								msg: '被保人证件号不能为空',
								message: '请输入正确的被保人证件号',
								len: [18, 18]
							},
							{
								kind: 'input',
								lable: '手机号',
								name: 'phone',
								placeholder: '请输入被保人手机号',
								required: true,
								msg: '被保人手机号不能为空',
								message: '请输入正确的被保人手机号',
								reg: '^[1][3,4,5,6,7,8,9][0-9]{9}$'
							}
						]
					]
				}
			],
			canMore: false,
			styleList: [
				{
					top: 200,
					left: 275,
					transform: 'rotateY(0deg)'
				},
				{
					top: 200,
					left: 275,
					transform: 'rotateY(360deg)'
				},
				{
					top: 150,
					left: 50,
					transform: 'rotateY(320deg) skewY(15deg) scale(0.95)'
				},
				{
					top: 50,
					left: 80,
					transform: 'rotateY(240deg) skewY(30deg) scale(0.9)'
				},
				{
					top: 0,
					left: 275,
					transform: 'rotateY(180deg) scale(0.8)'
				},
				{
					top: 50,
					left: 470,
					transform: 'rotateY(120deg) skewY(-30deg) scale(0.9)'
				},
				{
					top: 150,
					left: 500,
					transform: 'rotateY(40deg) skewY(-15deg) scale(0.95)'
				}
			],
			card: {
				post: {
					tran: 'rotateY(0)',
					opacity: 1
				},
				side: {
					tran: 'rotateY(180deg)',
					opacity: 0
				}
			},
			isPost: true
		}
	},
	methods: {
		pickerChange (id, no, se, value) {
			this.formList[id].formInfo[no][se].value = value
		},
		// 新增被保人
		addInsured () {
			this.formList.forEach(item => {
				if (item.formField == 'insureds') {
					item.formInfo.push(item.formInfo[0])
				}
			})
		},
		handleClick () {
			let arr = this.styleList
			console.log(arr.unshift(arr.pop()))
			if (this.isPost) {
				this.card = {
					post: {
						tran: 'rotateY(180deg)',
						opacity: 0
					},
					side: {
						tran: 'rotateY(360deg)',
						opacity: 1
					}
				}
			} else {
				this.card = {
					post: {
						tran: 'rotateY(0)',
						opacity: 1
					},
					side: {
						tran: 'rotateY(180deg)',
						opacity: 0
					}
				}
			}
			this.isPost = !this.isPost
		}
	}
}
</script>

<style lang="less" scoped>
.proDemo {
	width: 100%;
	height: 100vh;
	background-color: #FAFAFA;
	.test {
		height: 1000rpx;
		width: 100%;
		.banner {
			width: 100%;
			height: 500rpx;
			background-color: #2C405A;
			position: relative;
			perspective: 800rpx;
			.item {
				width: 200rpx;
				height: 300rpx;
				position: absolute;
				background-color: #0A98D5;
				transition: all 0.5s ease-in-out;
				color: #FFFFFF;
				text-align: center;
				line-height: 300rpx;
				border-radius: 20rpx;
				opacity: 0.5;
				.img {
					width: 100rpx;
					height: 100rpx;
				}
			}
			.cardDemo {
				width: 500rpx;
				height: 200rpx;
				background-color: #07C160;
				position: absolute;
				top: 50rpx;
				left: 125rpx;
				transition: all 0.8s ease-in-out;
			}
		}
	}
}
</style>
