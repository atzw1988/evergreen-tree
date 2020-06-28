<template>
	<view
		class="btnContent"
		@click="handleClick"
		:class="[{disable: disable}, {loading: loading}]"
		:style="{width: width + 'rpx', height: height + 'rpx', lineHeight: height + 'rpx', margin: margin}">
		<image class="loading" v-if="loading" src="@/static/common/loading.png" mode=""></image>{{loading? '提交中' : text}}
	</view>
</template>

<script>
	export default {
		name: 'TreeButton',
		props: {
			tabList: {
				type: Array,
				default: () => { return [] }
			},
			disable: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			},
			width: {
				type: Number,
				default: 690
			},
			height: {
				type: Number,
				default: 88
			},
			text: {
				type: String,
				default: '确认'
			},
			margin: {
				type: String,
				default: ''
			}
		},
		methods: {
			handleClick (e) {
				if (this.disable || this.loading) return false
				this.$emit('click')
			}
		}
	}
</script>

<style lang="less" scoped>
.btnContent {
	font-size: 36rpx;
	text-align: center;
	color: #FFFFFF;
	background-color: #00D6C0;
	border-radius: 8rpx;
	margin: 0 auto;
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
</style>
