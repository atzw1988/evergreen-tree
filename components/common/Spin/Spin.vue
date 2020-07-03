<template>
	<!-- 加载中组件 -->
	<view
		class="spin"
		:class="[
			{'spin-fix': fix},
			{'spin-show-text': custom}
		]"
		@touchmove.stop="touchmove"
		@click.stop="handleClick">
		<view class="spin-main">
			<view class="spin-dot"></view>
			<view class="spin-text">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'Spin',
	props: {
		fix: {
			type: Boolean,
			default: false
		},
		custom: {
			type: Boolean,
			default: false
		},
		// small || default || large
		size: {
			type: String,
			default: 'default'
		}
	},
	data () {
		return {
			
		}
	},
	methods: {
		// 拦截滑动
		touchmove (e) {
			return false
		},
		// 拦截点击
		handleClick () {
			return false
		}
	}
}
</script>

<style lang="less" scoped>
.spin {
	color: #00D6C0;
	vertical-align: middle;
	text-align: center;
	width: 100%;
	height: 100%;
}
.spin-dot {
	position: relative;
	display: block;
	border-radius: 50%;
	background-color: #00D6C0;
	width: 60rpx;
	height: 60rpx;
	animation: ani-spin-bounce 1s 0s ease-in-out infinite;
}
@keyframes ani-spin-bounce {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
		opacity: 0;
	}
}
.spin-large .spin-dot {
	width: 96rpx;
	height: 96rpx;
}
.spin-small .spin-dot {
	width: 36rpx;
	height: 36rpx;
}
.spin-fix {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 8;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.9);
}
.spin-fix .spin-main {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.spin-fix .spin-dot {
	display: inline-block;
}
.spin-show-text .spin-dot .spin-text {
	display: none;
}
.spin-show-text .spin-dot .spin-text {
	display: block;
	font-size: 28rpx;
}
</style>
