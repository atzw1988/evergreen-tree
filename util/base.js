function getCtx (selector) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];
    const componentCtx = ctx.selectComponent(selector);
    if (!componentCtx) {
        console.error('无法找到对应的组件，请按文档说明使用组件');
        return null;
    }
    return componentCtx;
}

function dT (text) {
	uni.showToast({
		title: text,
		icon: 'none',
		duration: 2000
	})
}

function sT (text) {
	uni.showToast({
		title: text,
		icon: 'success',
		duration: 2000
	})
}

function loading (text) {
	uni.showLoading({
		title: text
	})
}

function hideLoading () {
	uni.hideLoading()
}

 const message = function (options) {
	const { selector = '#notify' } = options
	const ctx = getCtx(selector)
	// #ifdef MP-WEIXIN
	ctx.$vm.handleShow(options)
	// #endif
	// #ifdef H5
	ctx.handleShow(options)
	// #endif
}

function dM (text) {
	const options = {
		message: text,
		type: 'primary'
	}
	message(options)
}

function sM (text) {
	const options = {
		message: text,
		type: 'success'
	}
	message(options)
}

function wM (text) {
	const options = {
		message: text,
		type: 'warning'
	}
	message(options)
}

function eM (text) {
	const options = {
		message: text,
		type: 'error'
	}
	message(options)
}

module.exports = {
	dT,
	sT,
	loading,
	hideLoading,
	dM,
	sM,
	wM,
	eM
}