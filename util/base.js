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

module.exports = {
	dT,
	sT,
	loading,
	hideLoading
}