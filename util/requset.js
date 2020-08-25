const { get, remove, set } = require('./storage.js')
const { environment, config } = require('./config.js')
const tips = require('./tips.js')
const { dT } = require('./base.js')
const router = require('./router/index.js')
const API_BASE_URL = environment == 'develop'? config.qaHost : config.proHost


const request = (url, data, method) => {
	const _url = API_BASE_URL + url
	let header = {
		'Content-Type': 'application/json'
	}
	const token = get('token')
	if (token) header.token = token
	return new Promise((resolve, reject) => {
		uni.request({
			url: _url,
			header: header,
			method: method,
			data: data,
			success: ({ statusCode, data}) => {
				if (statusCode >=200 && statusCode < 300 || statusCode == 304) {
					resolve(data)
				} else if (statusCode == 401) {
					dT('登陆过期，请重新登陆')
				}
			},
			fail: (error) => {
				dT('网络链接错误，请稍后重试')
				reject(error)
			}
		})
	})
}

const upload = (url, data) => {
	const _url = API_BASE_URL + url
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: _url,
			filePath: data,
			name: 'file',
			header: {
				'Content-Type': 'multipart/form-data;charset=utf-8'
			},
			success: (res) => {
				if (res.statusCode >=200 && res.statusCode < 300 || res.statusCode == 304) {
					resolve(res.data)
				}
			},
			fail: (error) => {
				tips.alert('网络链接错误，请稍后重试')
				reject(error)
			}
		})
	})
}

module.exports = {
	request,
	upload
}