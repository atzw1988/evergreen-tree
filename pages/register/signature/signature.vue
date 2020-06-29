<template>
	<view class="signPage">
		<view class="content">
			<view class="title">请在下方签署本人姓名，本签名代表您授权常青树保险</view>
			<view class="list">1、审核您提交的资料；</view>
			<view class="list">2、为您办理经纪人职业资格证；</view>
			<view class="list">3、使用该签名生成步骤1的《经纪人协议》，并签约您为常青树保险经纪人。</view>
			<view class="signTitle">签名处</view>
			<view class="signWrap">
				<canvas
					canvas-id="sign"
					disable-scroll
					style="width: 100%; height: 100%;"
					@touchstart="signStart"
					@touchmove="signMove"
					@touchend="signEnd"
					@touchcancel="signCancel"
					@error="signError"></canvas>
			</view>
			<tree-button margin="30rpx 0" color="#BCC2CC" @click="reset" text="重签"></tree-button>
			<tree-button :loading="loading" margin="0 0 30rpx" @click="submit" text="提交"></tree-button>
		</view>
	</view>
</template>

<script>
export default {
	data () {
		return {
			isSign: false,
			sign: null,
			coor: {},
			loading: false
		}
	},
	methods: {
		// 监听canvas错误
		signError (e) {
			console.log(e)
		},
		// 签名开始
		signStart ({changedTouches:[coor]}) {
			this.coor = coor
		},
		// 签名中
		signMove ({changedTouches:[coor]}) {
			console.log(coor)
			this.sign.moveTo(this.coor.x, this.coor.y)
			this.coor = coor
			this.sign.lineTo(coor.x, coor.y)
			this.sign.stroke()
			this.sign.draw(true)
		},
		// 签名结束
		signEnd (e) {
			console.log(e)
			this.isSign = true
		},
		// 签名被打断
		signCancel (e) {
			console.log(e)
		},
		// 重签
		reset () {
			this.isSign = false
			this.sign.clearRect(0, 0, 345, 280)
			this.sign.draw()
		},
		// 提交
		submit () {
			if(!this.isSign) return this.$base.dT('请先签名')
			this.loading = true
			uni.canvasToTempFilePath({
				canvasId: 'sign',
				success: (res) => {
					console.log(res)
					const file = res.tempFilePath
				},
				fail: (error) => {
					console.log(error)
				}
			})
		}
	},
	onReady () {
		this.sign = uni.createCanvasContext('sign')
	}
}
</script>

<style lang="less" scoped>
.signPage {
	width: 100%;
	height: 100vh;
	background-color: #FFFFFF;
	.content {
		width: 690rpx;
		height: 100vh;
		margin: 0 auto;
		text-align: justify;
		.title {
			font-size: 32rpx;
			font-weight: bold;
			margin-bottom: 30rpx;
		}
		.signTitle {
			width: 100%;
			text-align: center;
			font-size: 32rpx;
			font-weight: bold;
			margin-bottom: 40rpx;
			margin-top: 60rpx;
		}
		.signWrap {
			width: 100%;
			height: 560rpx;
			border: 2rpx solid #EDEDED;
		}
	}
}
</style>
