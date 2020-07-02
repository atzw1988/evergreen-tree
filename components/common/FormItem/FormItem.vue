<template>
	<view class="formPage">
		<form @submit="formSubmit">
			<block v-for="(item, index) in formList" :key="index">
				<view class="formItem" v-if="item.kind == 'input'">
					<view class="formLabel" :style="{width: width + 'rpx'}">{{item.lable}}</view>
					<view class="itemBox" :style="{width: `${620 -width}rpx`}">
						<input
							class="input"
							:name="item.name"
							:placeholder="item.placeholder"/>
					</view>
				</view>
				<view class="formItem" v-if="item.kind == 'picker'">
					<view
						class="formLabel"
						:style="{width: width + 'rpx'}">{{item.lable}}</view>
					<view class="itemBox" :style="{width: `${620 -width}rpx`}">
						<picker
							:id="index"
							@change="bindPickerChange"
							:range="item.array"
							range-key="name"
							v-if="item.mode == 'selector'">
							<view
								:class="[{placeholder: !picker[item.name].name}]"
								class="pickerText">{{picker[item.name].name || item.placeholder}}</view>
								<!-- {{item.array[idList[item.name]].name || item.placeholder}} -->
						</picker>
						<picker
							:id="index"
							mode="time"
							:value="time"
							start="09:01"
							end="21:01"
							@change="bindTimeChange"
							v-if="item.mode == 'time'">
							<view
								:class="[{placeholder: !time}]"
								class="pickerText">{{time}}</view>
						</picker>
						<picker
							:id="index"
							mode="date"
							:value="date"
							:start="startDate"
							:end="endDate"
							@change="bindDateChange"
							v-if="item.mode == 'date'">
							<view
								:class="[{placeholder: !picker[item.name]}]"
								class="pickerText">{{picker[item.name] || item.placeholder}}</view>
						</picker>
						<picker
							:id="index"
							mode="region"
							:value="date"
							:start="startDate"
							:end="endDate"
							@change="regionChange"
							v-if="item.mode == 'region'">
							<view
								:class="[{placeholder: !picker[item.name]}]"
								class="pickerText">{{picker[item.name] || item.placeholder}}</view>
						</picker>
					</view>
				</view>
			</block>
			<button
				form-type="submit"
				class="button"
				:class="[{disable: disable}, {isLoading: loading}]">
				<image class="loading" v-if="loading" src="@/static/common/loading.png" mode=""></image>{{loading? '提交中' : text}}
			</button>
		</form>
	</view>
</template>

<script>
export default {
	name: 'FormItem',
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
			default: '确定'
		},
		img: {
			type: Object,
			default: () => { return {} }
		},
		disable: {
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
			}
		}
	},
	methods: {
		formSubmit ({detail:{value}}) {
			if (this.loading || this.disable) return
			value = Object.assign(value, this.picker, this.img)
			console.log(value)
			const len = this.formList.length
			for (let i = 0; i < len; i++) {
				if (this.formList[i].required) {
					const ele = value[this.formList[i].name]
					if (!ele) {
						this.$base.dT(this.formList[i].msg)
						return false
					} else {
						const regstr = this.formList[i].reg
						const strlen = this.formList[i].len
						if (regstr) {
							console.log(regstr)
							const reg = new RegExp(regstr)
							console.log(reg)
							if (!reg.test(ele)) {
								this.$base.dT(this.formList[i].message)
								return false
							}
						}
						if (strlen) {
							if (ele.length < strlen[0] || ele.length > strlen[1]) {
								this.$base.dT(this.formList[i].message)
								return false
							}
						}
					}
				}
			}
			this.$emit('submit', value)
		},
		bindPickerChange ({currentTarget: {id}, detail: {value}}) {
			console.log(id, value)
			console.log(this.formList[id].array)
			const item = this.formList[id]
			this.picker[item.name] = item.array[value]
		},
		bindTimeChange (e) {
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
		}
	}
}
</script>

<style lang="less" scoped>
.formPage {
	width: 100%;
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
	}
	.button {
		width: 690rpx;
		margin: 60rpx auto 0;
		font-size: 36rpx;
		text-align: center;
		color: #FFFFFF;
		background-color: #00D6C0;
		border-radius: 8rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 40rpx;
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
</style>
