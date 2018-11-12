// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    responsePath:{},
    flag:false
  
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  nameInput:function(event){
    console.log(event)
    console.log(event.detail.value)

    var nameinput = event.detail.value;
    console.log("输入的姓名,",nameinput)
    var that=this;
    that.setData({"username":nameinput});
    
    },
    bntclick:function(event){
      console.log("按钮被点击")
      var that = this
      wx.request({
        data: { "username":that.data.username },
        header: { "content-tepy": "aplication/json" },
        url:'http://zdcbwe.natappfree.cc/queryEmp',
        success: function (response) {
          var empPath=response.data.flag
          console.log(empPath)
        
          that.setData({responsePath:empPath, flag:true})


        }


       
      })
      
      

    },
    callphone:function(event){
      var phoneclick = event.currentTarget.dataset.phone
      console.log(phoneclick)
      wx.makePhoneCall({
        phoneNumber: phoneclick,
        success:function(){
          console.log("拨打成功")
        },
        fail:function () {
          console.log("拨打失败")
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