<template>
	<scroll-view class="formPage" scroll-y="true">
		<slot name="abstract"></slot>
		<view class="content">
			<form @submit="formSubmit">
				<block v-for="(item, index) in formList" :key="index">
					<view style="height: 1rpx;"></view>
					<view class="title">
						<view class="index">{{index + 1}}</view>
						<view>{{item.title}}</view>
					</view>
					<block v-for="(ele, no) in item.formInfo" :key="no">
						<view class="title" v-if="item.formInfo.length > 1">被保险人{{no + 1}}</view>
						<block v-for="(par, se) in ele" :key="se">
							<view class="formItem" v-if="par.kind == 'input'">
								<view class="formLabel" :style="{width: width + 'rpx'}">{{par.lable}}</view>
								<view class="itemBox" :style="{width: `${620 -width}rpx`}">
									<input
										class="input"
										:data-ele="item.formField"
										:data-par="par.name"
										:data-no="no"
										@input="handleInput"
										:value="form.selfInfo.name"
										:placeholder="par.placeholder"/>
								</view>
							</view>
							<view class="formItem" v-if="par.kind == 'radio'">
								<view class="radio">
									<block v-for="(ite, num) in par.array" :key="num">
										<view
											:data-index="index"
											:data-ele="item.formField"
											:data-par="par.name"
											:data-no="no"
											:data-se="se"
											:data-num="num"
											@click="checkChange"
											:class="[{checked: par.value.value == num}]"
											class="radioItem">{{ite.name}}</view>
									</block>
								</view>
							</view>
							<view class="formItem" v-if="par.kind == 'picker'">
								<view
									class="formLabel"
									:style="{width: width + 'rpx'}">{{par.lable}}</view>
								<view class="itemBox" :style="{width: `${620 -width}rpx`}">
									<picker
										:data-index="index"
										:data-ele="item.formField"
										:data-par="par.name"
										:data-no="no"
										:data-se="se"
										@change="bindPickerChange"
										:range="par.array"
										range-key="name"
										v-if="par.mode == 'selector'">
										<view
											:class="[{placeholder: !par.value}]"
											class="pickerText">
											{{par.array[par.value.value].name || par.placeholder}}
											<uni-icons type="arrowdown"></uni-icons>
										</view>
									</picker>
									<picker
										:data-index="index"
										:data-ele="item.formField"
										:data-par="par.name"
										:data-no="no"
										:data-se="se"
										mode="time"
										:value="time"
										start="09:01"
										end="21:01"
										@change="bindTimeChange"
										v-if="par.mode == 'time'">
										<view
											:class="[{placeholder: !time}]"
											class="pickerText">{{time}}</view>
									</picker>
									<picker
										:data-index="index"
										:data-ele="item.formField"
										:data-par="par.name"
										:data-no="no"
										:data-se="se"
										mode="date"
										:value="date"
										:start="startDate"
										:end="endDate"
										@change="bindDateChange"
										v-if="par.mode == 'date'">
										<view
											:class="[{placeholder: !picker[par.name]}]"
											class="pickerText">{{picker[par.name] || par.placeholder}}</view>
									</picker>
									<picker
										:data-index="index"
										:data-ele="item.formField"
										:data-par="par.name"
										:data-no="no"
										:data-se="se"
										mode="region"
										:value="date"
										:start="startDate"
										:end="endDate"
										@change="regionChange"
										v-if="par.mode == 'region'">
										<view
											:class="[{placeholder: !picker[item.name]}]"
											class="pickerText">{{picker[item.name] || item.placeholder}}</view>
									</picker>
								</view>
							</view>
						</block>
					</block>
				</block>
				<view class="formItem" v-if="canMore">
					<view class="radio">
						<view
							@click="addInsured"
							class="radioItem checked">新增被保人</view>
					</view>
				</view>
			</form>
			<view class="goods">
				<view class="price">
					<view class="money">{{317}}<text class="priceUnit">{{priceUnit}}</text></view>
				</view>
				<button
					form-type="submit"
					class="button"
					@click="formSubmit"
					:class="[{disable: disable}, {isLoading: loading}]">
					<image class="loading" v-if="loading" src="@/static/common/loading.png" mode=""></image>{{loading? '提交中' : text}}
				</button>
			</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	name: 'FormProduct',
	props: {
		formList: {
			type: Array,
			default: () => { return [] }
		},
		loading: {
			type: Boolean,
			default: false
		},
		width: {
			type: Number,
			default: 160
		},
		text: {
			type: String,
			default: '立即投保'
		},
		img: {
			type: Object,
			default: () => { return {} }
		},
		disable: {
			type: Boolean,
			default: false
		},
		priceUnit: {
			type: String,
			default: '元/年起'
		},
		canMore: {
			type: Boolean,
			default: false
		}
	},
	data () {
		return {
			id: '1',
			time: '12:00',
			date: '',
			picker: {
				cardkind: '',
				onjob: '',
				politics: '',
				education: '',
				start: '',
				end: '',
				area: ''
			},
			form: {
				selfInfo: {},
				insureds: []
			}
		}
	},
	watch: {
		formList (value) {
			console.log(value)
			this.preAssign()
		}
	},
	mounted () {
		console.log(this.formList)
		this.preAssign()
	},
	methods: {
		// 提交表单并验证表单内容
		formSubmit ({detail:{value}}) {
			console.log(this.form)
			if (this.loading || this.disable) return
			const len = this.formList.length
			for (let i = 0; i < len; i++) {
				const item = this.formList[i]
				const leng = item.formInfo.length
				for (let j = 0; j < leng; j++) {
					const ele = item.formInfo[j]
					const lengt = ele.length
					for (let k = 0; k < lengt; k++) {
						const par = ele[k]
						if (par.required) {
							let val
							try{
								if (item.formField == 'selfInfo') {
									val = this.form.selfInfo[par.name]
								} else {
									val = this.form.insureds[j][par.name]
								}
							}catch(e){
								this.$base.dT(par.msg)
								return
							}
							if (!val) {
								this.$base.dT(par.msg)
								return false
							} else {
								const regstr = par.reg
								const lenstr = par.len
								if (regstr) {
									console.log(regstr)
									const reg = new RegExp(regstr)
									if (!reg.test(val)) {
										this.$base.dT(par.message)
										return false
									}
								}
								if (lenstr) {
									if (val.length < lenstr[0] || val.length > lenstr[1]) {
										this.$base.dT(par.message)
										return false
									}
								}
							}
						}
					}
				}
			}
			this.$emit('submit', value)
		},
		// 监听输入框输入
		handleInput ({detail:{value},target:{dataset:{ele, par, no}}}) {
			if (ele == 'selfInfo') {
				this.form[ele][par] = value
			} else {
				const item = this.form.insureds[no]
				if (!item) {
					this.form.insureds[no] = {}
					this.form.insureds[no][par] = value
				} else {
					let obj = {}
					obj[par] = value
					this.form.insureds[no] = Object.assign(this.form.insureds[no], obj)
				}
			}
		},
		// 个性化选择框
		checkChange (e) {
			const {target: {dataset: {ele, par, no, se, num, index}}} = e
			const item = this.formList[index].formInfo[no][se]
			this.form[par] = item.array[num]
			this.$emit('pickerChange', index, no, se, item.array[num])
		},
		// 普通弹窗选择
		bindPickerChange (e) {
			const {currentTarget: {dataset: {ele, par, no, se, index}}, detail: {value}} = e
			const item = this.formList[index].formInfo[no][se]
			if (ele == 'selfInfo') {
				this.form.selfInfo[par] = item.array[value]
			} else {
				const ele = this.form.insureds[no]
				if (!ele) {
					this.form.insureds[no] = {}
					this.form.insureds[no][par] = item.array[value]
				} else {
					let obj = {}
					obj[par] = item.array[value]
					this.form.insureds[no] = Object.assign(this.form.insureds[no], obj)
				}
			}
			// console.log(this.form[ele][par].name)
			this.$emit('pickerChange', index, no, se, item.array[value])
		},
		bindTimeChange ({currentTarget: {id}}) {
			console.log(e)
		},
		bindDateChange ({currentTarget: {id}, detail: {value}}) {
			console.log(id)
			const item = this.formList[id]
			this.picker[item.name] = value
		},
		regionChange ({currentTarget: {id}, detail: {value}}) {
			console.log(id, value)
			const item = this.formList[id]
			this.picker[item.name] = value.join('')
			this.$emit('areaChange', value, id)
		},
		// 新增被保人
		addInsured () {
			this.$emit('addInsured')
		},
		// 针对部分选择框进行预选赋值
		preAssign () {
			this.formList.forEach(item => {
				item.formInfo.forEach((ele, no) => {
					ele.forEach(par => {
						if (item.formField == 'selfInfo' && par.kind == 'picker') {
							this.form.selfInfo[par.name] = par.value
						} else if (item.formField == 'insureds' && par.kind == 'picker') {
							const item = this.form.insureds[no]
							if (!item) {
								this.form.insureds[no] = {}
								this.form.insureds[no][par.name] = par.value
							} else {
								this.form.insureds[no][par.name] = par.value
							}
						}
					})
				})
			})
		}
	}
}
</script>

<style lang="less" scoped>
.formPage {
	width: 100%;
	height: calc(100vh - 100rpx);
	background-color: #fafafa;
	.content {
		width: 690rpx;
		margin: 0 auto;
		background-color: #FFFFFF;
	}
	.title {
		width: 90%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		font-weight: bold;
		margin-top: 20rpx;
		.index {
			width: 36rpx;
			height: 36rpx;
			border-radius: 50%;
			background-color: #2BE1CE;
			text-align: center;
			line-height: 36rpx;
			color: #FFFFFF;
			margin-right: 20rpx;
		}
	}
	.formItem {
		width: 90%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1rpx solid #F7F7F7;
		.formLabel {
			padding: 24rpx 0;
		}
		.pickerText {
			padding: 0;
			text-align: right;
		}
		.placeholder {
			color: #777777;
		}
		.radio {
			width: 100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			.radioItem {
				width: 240rpx;
				height: 60rpx;
				border: 2rpx solid #777777;
				text-align: center;
				line-height: 60rpx;
				margin-right: 20rpx;
				border-radius: 8rpx;
			}
			.checked {
				border-color: #2BE1CE !important;
				color: #2BE1CE !important;
			}
		}
	}
	.goods {
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		.price {
			width: 65%;
			.money {
				font-size: 36rpx;
				color: #00D6C0;
				font-weight: bold;
				margin-left: 20rpx;
				.priceUnit {
					font-size: 24rpx;
					color: #777777;
					font-weight: normal;
				}
			}
		}
		.button {
			width: 35%;
			font-size: 36rpx;
			text-align: center;
			color: #FFFFFF;
			background-color: #00D6C0;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100rpx;
			border-radius: 0;
			.loading {
				width: 40rpx;
				height: 40rpx;
				margin-right: 20rpx;
				animation: loadingAni 2s linear infinite;
			}
			@keyframes loadingAni {
				0% {
					-webkit-transform: rotate(0deg);
				}
			
				25% {
				-webkit-transform: rotate(90deg);
				}
			
				50% {
				-webkit-transform: rotate(180deg);
				}
			
				75% {
				-webkit-transform: rotate(270deg);
				}
			
				100% {
				-webkit-transform: rotate(360deg);
				}
			}
		}
		.isLoading {
			opacity: 0.4;
		}
		.disable {
			background-color: #f3f3f3 !important;
		}
	}
}
</style>
