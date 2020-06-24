const request = require('requset.js')
module.exports = {
	login: (data) => {
		return request('/park/sys/login/wechatLogin', data, 'POST')
	}
}