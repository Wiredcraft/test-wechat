import Tool from '../../utils/tool.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filterList: [],
    searchText:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  //搜索监听事件
  inputEvent: function (event) {
    let that = this;
    //查询函数防抖动
    Tool.debounce(function () {
      console.log(event.detail.value);
      console.log(that);
      that.searchRequest(event.detail.value);
    }, 300)();
  },
  //搜索请求
  searchRequest: function (value) {
    let temp = this;
    wx.request({
      url: 'https://api.github.com/search/repositories',
      data: {
        q: value
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        //状态储值更新
        if (res.statusCode == 200) {
          temp.setData({
            filterList: res.data.items
          })
        } else {
          temp.setData({
            filterList: []
          })
        }
        temp.setData({
          searchText: value
        });
      },
      fail: function () {
        temp.setData({
          filterList: [],
          searchText: value
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})