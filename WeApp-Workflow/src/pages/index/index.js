//index.js
//获取应用实例
var app = getApp()

const testfunc = (n) => {
	return n + 1
}

Page({
	data: {
		motto: 'Hello World',
		msg: 'Hello World',
		n: 0
	},
	onLoad: function () {

	},
	clickTest: function () {
		let new_n = testfunc(this.data.n)
		this.setData({ n: new_n })
	}
});
