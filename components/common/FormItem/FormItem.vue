<template>
	<view class="formPage">
		<form @submit="formSubmit">
			<block v-for="(item, index) in formList" :key="index">
				<view class="formItem" v-if="item.kind == 'input'">
					<view class="formLabel">{{item.lable}}</view>
					<view class="itemBox">
						<input
							class="input"
							:name="item.name"
							:placeholder="item.placeholder"/>
					</view>
				</view>
				<view class="formItem" v-if="item.kind == 'picker'">
					<view class="formLabel">{{item.lable}}</view>
					<view class="itemBox">
						<picker
							@change="bindPickerChange"
							:value="id"
							:range="item.array"
							v-if="item.mode == 'selector'">
							<view class="uni-input">{{item.array[id]}}</view>
						</picker>
						<picker
							mode="time"
							:value="time"
							start="09:01"
							end="21:01"
							@change="bindTimeChange"
							v-if="item.mode == 'time'">
							<view class="uni-input">{{time}}</view>
						</picker>
						<picker
							mode="date"
							:value="date"
							:start="startDate"
							:end="endDate"
							@change="bindDateChange"
							v-if="item.mode == 'date'">>
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
				</view>
			</block>
			<button
				form-type="submit"
				class="button"
				:class="[{disable: disable}, {loading: loading}]">
				<image class="loading" v-if="loading" src="@/static/common/loading.png" mode=""></image>{{loading? '提交中' : '确定'}}
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
		}
	},
	data () {
		return {
			id: 0,
			time: '12:00',
			date: '2020-06-05'
		}
	},
	methods: {
		formSubmit ({detail:{value}}) {
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
		bindPickerChange (e) {
			console.log(e)
		},
		bindTimeChange (e) {
			console.log(e)
		},
		bindDateChange (e) {
			console.log(e)
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
		border-bottom: 1rpx solid #F7F7F7;
		.formLabel {
			width: 160rpx;
			padding: 24rpx 0;
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
	.loading {
		opacity: 0.4;
	}
	.disable {
		background-color: #f3f3f3 !important;
	}
}
</style>
