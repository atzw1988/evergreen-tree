/**
 * 提示与加载工具类
 */
export default class Tips {
    constructor() {
      this.isLoading = false;
    }
    /**
     * 弹出提示框
     */
    static success(title, duration = 500) {
      setTimeout(() => {
        uni.showToast({
          title: title,
          icon: "success",
          mask: true,
          duration: duration
        });
      }, 300);
      if (duration > 0) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, duration);
        });
      }
    }
  
    /**
     * 弹出确认窗口
     */
    static confirm(text, payload = {}, title = "提示") {
      return new Promise((resolve, reject) => {
        uni.showModal({
          title: title,
          content: text,
          showCancel: true,
          success: res => {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: res => {
            reject(payload);
          }
        });
      });
    }
  
    /**
     * 提示框
     */
    static alert(title) {
      uni.showToast({
        title: title,
        icon:"none",
        duration: 1500
      });
    }
  
    /**
     * 错误框
     */
    static error(title, onHide) {
      uni.showToast({
        title: title,
        image: "../images/error.png",
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(() => {
          onHide();
        }, 500);
      }
    }
  
    /**
     * 弹出加载提示
     */
    static loading(title = "加载中") {
      if (Tips.isLoading) {
        return;
      }
      Tips.isLoading = true;
      uni.showLoading({
        title: title,
        mask: true
      });
    }
  
    /**
     * 加载完毕
     */
    static loaded() {
      if (Tips.isLoading) {
        Tips.isLoading = false;
        uni.hideLoading();
      }
    }
  }
  
  /**
   * 静态变量，是否加载中
   */
  Tips.isLoading = false;
  