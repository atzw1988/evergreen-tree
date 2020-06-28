// 答题判断
function checkExam (arr, callback) {
	const res = []
	let score = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == undefined) {
			res.push(i + 1)
		} else {
			score += arr[i]
		}
	}
	callback(res, score, res.length > 0)
}

module.exports = {
	checkExam
}