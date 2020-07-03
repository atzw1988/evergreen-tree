<template>
	<view
		class="notify"
		:style="{
			top: top,
			zIndex: zIndex
		}"
		:class="[type, {notifyShow: isShow}]">
		<view
			v-if="insetTop"
			:style="{
				background: background,
				height: statusBarHeight + 'px'
			}"></view>
		<text>{{message}}</text>
	</view>
</template>

<script>
export default {
	name: 'Notify',
	props: {
		background: String,
		color: {
			type: String,
			default: '#FFFFFF'
		},
		zIndex: {
			type: Number,
			default: 1001
		},
		insetTop: {
			type: Boolean,
			default: false
		},
		top: {
			type: String,
			default: '0rpx'
		}
	},
	data () {
		return {
			isShow: false,
			statusBarHeight: 0,
			timer: null,
			message: '',
			type: 'primary'
		}
	},
	mounted () {
		const { statusBarHeight, navigationBarHeight } = uni.getSystemInfoSync()
		this.statusBarHeight = statusBarHeight
	},
	methods: {
		handleShow (options) {
			console.log(options)
			for (let key in options) {
				this[key] = options[key]
			}
			clearTimeout(this.timer)
			this.isShow = true
			this.time = setTimeout(() => {
				this.handleHide()
				this.timer = null
			},2000)
		},
		handleHide () {
			this.isShow = false
		}
	}
}
</script>

<style lang="less" scoped>
.notify {
	width: 100%;
	min-height: 64rpx;
	line-height: 2.3;
	text-align: center;
	position: fixed;
	left: 0;
	right: 0;
	background-color: #2d8cf0;
	color: #FFFFFF;
	font-weight: 28rpx;
	opacity: 0;
	transform: translateZ(0) translateY(-100%);
	transition: all 0.4s ease-in-out;
}
.notifyShow {
	opacity: 1;
	transform: translateZ(0) translateY(0);
}
.primary {
	background-color: #2d8cf0;
}
.success {
	background-color: #19be6b;
}
.warning {
	background-color: #f90;
}
.error {
	background-color: #ed3f14;
}
</style>
