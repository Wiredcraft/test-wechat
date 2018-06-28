
//项目详细信息
Page({

  data: {
    loadingTrue:false,
    detail:{}
  },
  //
  onLoad: function (options) {
    this.getData(options.value);
    // this.getData("mmmwhy/ss-panel-and-ss-py-mu");
  },
  //获取数据方法
  getData(param){
    this.setData({
      loadingTrue: true
    })
    wx.request({
      url: 'https://api.github.com/repos/' + param,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        this.setData({
          detail: res.data,
          loadingTrue: false
        })
      },
      fail:function(){
        this.setData({
          loadingTrue: false
        })
      }
    })
  },
})