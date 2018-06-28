//index.js


Page({
  data: {
    seekText:"",
    seekLabelTrue:false,
    loadingTrue:false,
    timer:null,
    seekValueList:[]
  },
  onLoad: function () {
   
  },
  inputEvent: function (param) {
    //接口查询频率控制，300毫秒
    if(this.data.timer != null){
      clearTimeout(this.data.timer);
    }
    this.data.timer = setTimeout(()=>{
      this.searchRequest(param.detail.value);        
    }, 300);
    
  },
  blur:function (param) {
    if(param.detail.value==""){
      this.setData({
        seekLabelTrue: false
      })
    }
  },
  focus:function (param) {  
    this.setData({
      seekLabelTrue: true
    })
  },
  //搜索请求
  searchRequest: function (value) {
    if(value == ''){
      this.setData({
        seekValueList: [],
        seekText: value
      });
      return
    };
    this.setData({
      loadingTrue: true
    })
    wx.request({
      url: 'https://api.github.com/search/repositories',
      data: {
        q: value
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success:  (res) => {
        this.setData({
          loadingTrue: false,
          seekText: value
        })
        //状态储值更新
        if (res.statusCode == 200) {
          this.setData({
            seekValueList: res.data.items,
          })
        } else {
          this.setData({
            seekValueList: []
          })
        }
      },
      fail: () => {
        this.setData({
          seekValueList: [],
          seekText: value
        });
      }
    })
  },

})