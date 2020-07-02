const { request } = require('./requset.js')
module.exports = {
	login: (data) => {
		return request('/park/sys/login/wechatLogin', data, 'POST')
	},
	getStep: (data) => {
		return request('/service-walkathon-soa/step/stepForUser', data, 'GET')
	}
}