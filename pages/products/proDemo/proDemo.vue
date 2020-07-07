<template>
	<view class="proDemo">
		<FormProduct
			:formList="formList"
			@addInsured="addInsured"
			@pickerChange="pickerChange">
			<view class="test">测试</view>
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
			]
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
		height: 500rpx;
	}
}
</style>
