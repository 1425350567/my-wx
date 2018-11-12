// pages/zhuce/zhuce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  empinfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that=this
    wx.request({
      url:'http://m5vxmx.natappfree.cc/EmpAllinfo',
      header:{"content-type":"application/json"},
      success: function (res) {
        
        console.log(res.data)
        that.setData({empinfo: res.data.empinfo1})
        
      }
    })
   
  },
  callphone:function(event){
    console.log(event.currentTarget.dataset.number)
    var phNumber = event.currentTarget.dataset.number

    wx.makePhoneCall({
      phoneNumber: 'phNumber',
      success: function () {
        console.log("打电话成功");
      },
      fail: function () {
        console.log("打电话失败");
      }
    })
    
  },

  mailclick: function (event) {
    console.log(event.currentTarget.dataset.email)
    var mail = event.currentTarget.dataset.email
    
    wx.navigateTo({
      url: '../mail/mail?mailnumber='+mail,
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