import { getReposDetails } from '../../apis/index'

Page({
	data: {
		repo: {
			owner: {
				avatar_url: ""
			},
			name: "",
			full_name: "",
			description: "",
			language: ""
		}
	},
	onLoad: function (options) {
		wx.showLoading({
			title: 'Loading...',
			mask: true
		})
		this.loadData(options)
	},
	loadData(val) {
		getReposDetails(val.owner, val.repo).then(res => {
			console.log(res)
			this.setData({repo: res.data})
			wx.hideLoading()
		}).catch(err => {
			console.log(err)
			wx.hideLoading()
			this.repo = null
			wx.showToast({
				title: 'Network Error',
				icon: 'none',
				duration: 2000
			})
		})
	}
})
