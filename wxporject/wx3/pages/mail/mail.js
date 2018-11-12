// pages/mail/mail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mnber:"",
    title:"",
    content:""
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var mnuber = options.mailnumber;
    that.setData({mnber:mnuber})
    
  },
  titleinput:function(event){
    console.log(event.detail.value)
    var titleone = event.detail.value
    var that=this
    that.setData({title: titleone})
  },
  contentinput:function(event) {
    console.log(event.detail.value)
    var contentone = event.detail.value
    var that = this
    that.setData({ content: contentone })
  },
  sendclick:function(event){
    var that=this
    console.log(that.data.title, that.data.content, that.data.mnber)
    wx.request({
      data: {"mailtitle": that.data.title,"mailcontet":that.data.content,                    "mailnumber":that.data.mnber},
      url:'http://m5vxmx.natappfree.cc/Sendemail',
      header: {"content-type": "application/json"},
      success: function (resp)
      {
        console.log("1111")
      },
      fail:function(rsep){
        console.log("2222")
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