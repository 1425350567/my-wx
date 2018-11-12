Page({

  /**
   * 页面的初始数据
   */
  data: {
    topimages: ["../images/a1.jpg", "../images/a2.jpg", "../images/a3.jpg"],
    contentimages: [
      { "images": "../images/tiyu.png", "title": "体育" },
      { "images": "../images/dongtai.png", "title": "动态" },
      { "images": "../images/daohang.png", "title": "导航" },
      { "images": "../images/tongxun3.png", "title": "通讯" },
      { "images": "../images/denglu.png", "title": "登陆" },
      { "images": "../images/zhuce.png", "title": "注册" }]
  },
  cellclick: function (event) {
    console.log(event);
    console.log(event.currentTarget.dataset.aa);
    var wenzi = event.currentTarget.dataset.aa;
    console.log("输出的文字是" + wenzi)


    var tiaozhuan = "";

    tiaozhuan = "../gongyong/gongyong?Value=" + wenzi;




    wx.navigateTo({
      url: tiaozhuan,
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