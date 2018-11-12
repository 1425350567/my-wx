// pages/denglu/denglu.js
var quanju=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yanzheng:"",
    imgPath:{},
    name:"",
    pwd:"",
    code:"",
    canme:""
   

  },

  /**
   * 生命周期函数--监听页面加载
   */

//输入框事件
  cell1click:function(event){
    console.log(event.detail.value)

    var oneinput = event.detail.value
    
    var that=this

    that.setData({ name: oneinput})

  },
  cell2click:function(event){
    console.log(event.detail.value)

    var twoinput = event.detail.value

    var that = this

    that.setData({pwd : twoinput })

  },
  //验证码输入框
  cell3click: function (event) {
    var that = this;
    var threeinput = event.detail.value;
    console.log(threeinput);

    that.setData({ code:threeinput });
  },
  //登陆点击事件
  btnclick:function(event){
     
     //判断验证码事件
     var that=this

    var inputcode = that.data.code
  
    
    var codevalue = that.data.yanzheng
    console.log(that.data.name)
    console.log(that.data.pwd)
    if (codevalue == inputcode){
      console.log("验证码正确")
      wx.request({
        
        data: { "uesername":that.data.name, "userpwd":that.data.pwd},
        url: quanju.globalData.sever+'/Checklogin',
        header:{"content-type":"application/json"},

        success:function(respone){
          console.log(respone.data.flag)
          
          var result = respone.data.flag
          if (result == "None") {

            that.setData({ result: "没有这个学生" });
            console.log("没有这个学生")

          }
          else if (result == "0") {
            that.setData({ result: "您的状态不正常" });
            console.log("您的状态不正常")
          }

          else {

            wx.navigateTo({
              url: '../one/one?cname='+result 
            })

          }

          
        }
      })

    }

    else{
      console.log("验证码不正确")
    }

    
    
      

    


  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      header:{"content-type":"application/json"},
      url: quanju.globalData.sever+'/Mywx',
      success:function(resp){
        console.log(resp.data)
        
        that.setData({ yanzheng: resp.data.Yzm, imgPath: resp.data.imagePath })
      }

      
    })
    

    
  
  },


  yzclick:function(event){
    var that = this;
    wx.request({
      header: { "content-type": "application/json" },
      url: quanju.globalData.sever+'/Rest',
      success: function (resp) {
        console.log(resp.data)
        that.setData({yanzheng: resp.data.Yzm})
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

