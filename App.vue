<script>
    export default {
        onLaunch: function() {
            console.log('App Launch');
            // #ifdef APP-PLUS
            // 检测升级
            uni.request({
                url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
                data: {
                    appid: plus.runtime.appid,
                    version: plus.runtime.version,
                    imei: plus.device.imei
                },
                success: (res) => {
                    if (res.statusCode == 200 && res.data.isUpdate) {
                        let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
                        // 提醒用户更新
                        uni.showModal({
                            title: '更新提示',
                            content: res.data.note ? res.data.note : '是否选择更新',
                            success: (showResult) => {
                                if (showResult.confirm) {
                                    plus.runtime.openURL(openUrl);
                                }
                            }
                        })
                    }
                }
            })
            // #endif
			// #ifdef MP-WEIXIN
			console.log('微信小程序')
			const updateManager = wx.getUpdateManager()
			updateManager.onCheckForUpdate(function (res) {
			  // 请求完新版本信息的回调
			  console.log(res.hasUpdate)
			})
			updateManager.onUpdateReady(function () {
			  // wx.showModal({
			  //     title: '更新提示',
			  //     content: '新版本已经准备好，请下载并重启应用？',
			  //     showCancel: false,
			  //     success: function (res) {
			  //         if (res.confirm) {
			  //             // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
			  //             updateManager.applyUpdate()
			  //         }
			  //     }
			  // })
			  updateManager.applyUpdate()
			})
		
			updateManager.onUpdateFailed(function () {
			  // 新的版本下载失败
			  wx.showModal({
				title: '更新提示',
				content: '新版本下载失败',
				showCancel: false
			  })
			})
			// #endif
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        },
		globalData: {
			test: ''
		}
    }
</script>

<style>
    /* #ifndef APP-PLUS-NVUE */
    /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
    @import './common/uni.css';

    /* 以下样式用于 hello uni-app 演示所需 */
    page {
        background-color: #FFFFFF;
        height: 100%;
        font-size: 28rpx;
        line-height: 1.8;
    }

    .uni-header-logo {
        padding: 30rpx;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10rpx;
    }

    .uni-header-image {
        width: 100px;
        height: 100px;
    }

    .uni-hello-text {
        color: #7A7E83;
    }

    .uni-hello-addfile {
        text-align: center;
        line-height: 300rpx;
        background: #FFF;
        padding: 50rpx;
        margin-top: 10px;
        font-size: 38rpx;
        color: #808080;
    }

    /* #endif*/
</style>
