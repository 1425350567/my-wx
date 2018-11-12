// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicpage: [
      { "mimage": "../images/aaa.jpg", "mtitle": "牌楼口岸", "auth": "简弘亦", "path": "../mp3/aaa.mp3" }, 
      { "mimage": "../images/bbb.jpg", "mtitle": "孤独患者", "auth": "陈奕迅", "path": "../mp3/bbb.mp3" }, 
      { "mimage": "../images/ccc.jpg", "mtitle": "那些你很冒险的梦", "auth": "林俊杰", "path": "../mp3/ccc.mp3" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  musicclick:function(event){
    console.log(event)
    var musicpath = event.currentTarget.dataset.mpath;
    console.log(musicpath)
    var musicimage = event.currentTarget.dataset.mimg;
    console.log(musicimage)
    var tiaozhuan="";
    tiaozhuan = "../music1/music1?path=" + musicpath + "&imagepath=" + musicimage

    wx.navigateTo({
      url: tiaozhuan,
    })

  },
  onLoad: function (options) {
  
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