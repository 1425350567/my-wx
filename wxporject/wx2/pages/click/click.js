// pages/click/click.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  viewclick:function(event){
    console.log(event)
    console.log("点击")
     
    var clickVaule= event.currentTarget.dataset.xuanze
    console.log("123"+clickVaule)
    var tiaozhuan=""
  if (clickVaule=="one")
   {
    console.log("跳转到页面1");
    tiaozhuan ="../click1/click1?name=曹峰&pad=123&nub=1234";
    //wx.navigateTo({
    //url: '../click2/click2',
    //})
    
  
   
   }
    else if (clickVaule == "two")  
   {
     console.log("跳转到页面2");
    //wx.navigateTo({
    //url: '../click2/click2',
    //})
    tiaozhuan = "../click2/click2";

   }
  else if (clickVaule == "three") {
    console.log("跳转到页面3");
    //wx.navigateTo({
    //url: '../click2/click2',
    //})
    tiaozhuan = "../click3/click3";

  }
   wx.navigateTo({
     url: tiaozhuan
   })

  },
  /**
   * 生命周期函数--监听页面加载
   */
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