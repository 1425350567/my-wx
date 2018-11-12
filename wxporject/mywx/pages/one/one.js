// pages/one/one.js
var quanju = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //classname:"",
    imagePath: "",
    nametwo: "",
    Checkimg:[],
    pwdtwo:"",
    idtwo:"",
    addresstwo:"",
    emailtwo:""
  
  },

  /**
   * 生命周期函数--监听页面加载
   */

    onLoad: function (options) {
    
    /** var clname= options.cname
    console.log(clname)
    var that=this
    that.setData({ classname: clname})
    **/
    
    
    
    
  },
  upimage:function(event){
    var that =this;
    //微信小程序图片选择的方法 
    wx.chooseImage({
      //选择的个数
      count:1,
      //选择图片是原图或者是压缩图
      sizeType:["compressed"],
      //选择来源:本地相册和相机
      sourceType: ["album", "camera"],

      success: function (resp) {
        var tempPaths = resp.tempFilePaths;
        console.log("选择的本地图片:" + tempPaths);

        //显示出来
        that.setData({ imagePath: tempPaths[0] });


        //把图片上传
        uploadFileImage(that, tempPaths[0]);


      },
    })
    function uploadFileImage(page,path)
    {
      wx.showToast({
        icon: 'loading',
        title: '正在上传'

      })
      wx.uploadFile({
        //路径
        url: quanju.globalData.sever+"/uploadfile",
        filePath: path,
        //服务端是根据这个名字来获取上传图片
        name: 'fileimg',
        //二进制流的来读取  post请求
        header: { "content-type":"multipart/form-data" },
        success: function (response) {
          console.log(response.data);
        }

      })

    }
      

  },
  nameinput: function (event) {
    console.log(event.detail.value);
    var nameone = event.detail.value;
    var that = this;
    that.setData({ nametwo: nameone });

  },
  pwdinput: function (event) {
    console.log(event.detail.value);
    var pwdone = event.detail.value;
    var that = this;
    that.setData({ pwdtwo: pwdone });

  },
  idinput: function (event) {
    console.log(event.detail.value);
    var idone = event.detail.value;
    var that = this;
    that.setData({ idtwo: idone });

  },
  addressinput: function (event) {
    console.log(event.detail.value);
    var addressone = event.detail.value;
    var that = this;
    that.setData({ addresstwo: addressone });

  },
  emailinput: function (event) {
    console.log(event.detail.value);
    var emailone = event.detail.value;
    var that = this;
    that.setData({ emailtwo: emailone });

  },

  nameblur: function (event) {
    console.log("失去焦点");
    var that = this;
    console.log(that.data.nametwo)
    wx.request({
      data: { "namethree": that.data.nametwo },
      header: { "content-type": "application/json" },
      url: quanju.globalData.sever +'/CheckUsername',
      success: function (resp) {
        console.log(resp.data.flag);
        var checkimg = resp.data.flag
        console.log(checkimg)
        that.setData({ Checkimg: checkimg })
        
      }

    })
  },
  zhuceclick:function(event){
    console.log(event.currentTarget)
    var that=this;
    wx.request({
      url:quanju.globalData.sever+"/zhuce",
      header:{"content-type":"application/json"},
      data: { "name": that.data.nametwo, "pwd": that.data.pwdtwo, "id": that.data.idtwo, "address": that.data.addresstwo, "email": that.data.emailtwo},
      
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