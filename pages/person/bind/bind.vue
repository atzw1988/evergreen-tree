<template>
	<view class="bindPage">
		<FormItem
			:formList="formList"
			:loading="loading"
			@submit="submit"></FormItem>
	</view>
</template>

<script>
import FormItem from '@/components/common/FormItem/FormItem'
export default {
	components: {
		FormItem
	},
	data () {
		return {
			loading: false,
			formList: [
				{
					kind: 'input',
					lable: '姓名',
					name: 'name',
					placeholder: '请输入姓名',
					required: true,
					msg: '姓名不能为空',
				},
				// {
				// 	kind: 'input',
				// 	lable: '手机号码',
				// 	name: 'phone',
				// 	placeholder: '请输入手机号码',
				// 	required: true,
				// 	msg: '手机号码不能为空',
				// 	message: '请输入正确的手机号码',
				// 	reg: '^[1][3,4,5,6,7,8,9][0-9]{9}$'
				// },
				{
					kind: 'input',
					lable: '身份证号',
					name: 'cardNo',
					placeholder: '请输入身份证号',
					required: true,
					msg: '身份证号不能为空',
					message: '请输入正确的身份证号',
					len: [18, 18]
				}
			]
		}
	},
	methods: {
		submit (value) {
			console.log(value)
			this.loading = true
			setTimeout(() => {
				this.loading = false
			}, 2000)
		}
	}
}
</script>

<style lang="less" scoped>
.bindPage {
	width: 100%;
	height: 100vh;
	background-color: #FFFFFF;
}
</style>
