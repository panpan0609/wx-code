// pages/about/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "../../images/position.png",
      id: 0,
      latitude: 31.0534200000,
      longitude: 114.5740600000,
      width: 30,
      height: 30
    }],
  },
  loactiontap() {
    wx.openLocation({
      latitude: 31.0534200000,
      longitude: 114.5740600000,
      name: '湖北省黄冈市红安县觅儿镇',
      scale: 28
    })
  },
  // 点击打电话
  calling: function (event) {
    wx.makePhoneCall({
      phoneNumber: event.currentTarget.dataset.tel, //此号码并非真实电话号码，仅用于测试  
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
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