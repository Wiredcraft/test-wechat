import testData from './test.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options.fullName);
  },

//  获取数据方法
  getData(param){
    let that = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://api.github.com/repos/' + param,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        wx.hideLoading()
        that.setData({
          detail: res.data,
          userInfo: res.data.owner
        })
      },
      fail:function(){
        wx.hideLoading();
      }
    })
  },
})