const { get, remove } = require('./storage.js')
const tips = require('tips.js')
const router = require('router/index.js')
const API_BASE_URL = ''


const request = (url, data, method) => {
	const _url = API_BASE_URL + url
	let header = {
		'Content-Type': 'application/json'
	}
	const token = get('token')
	if (token) herder.Authorization = token
	return new Promise((resolve, reject) => {
		uni.request({
			url: _url,
			header: header,
			method:: method,
			data: data,
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
	request
}