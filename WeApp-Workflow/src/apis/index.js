var regeneratorRuntime = require("../libs/regenerator-runtime/runtime.js")

const wxGet = async (url) => {
	await wx.request({
		url: url,
		method: 'GET',
		header: { 'Content-Type': 'application/json' },
		success: (res) => {
			return res
		},
		error: (e) => {
			return e
		}
	})
}

const wxPost = async (url, data) => {
	let postData = data

	await wx.request({
		url: url,
		data: postData,
		method: 'POST',
		header: { 'Content-Type': 'application/json' },
		success: (res) => {
			return res
		},
		error: (e) => {
			return e
		}
	})
}

module.exports = {
	wxGet: wxGet,
	wxPost: wxPost
}
