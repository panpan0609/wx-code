
// pages/connect/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "../../images/loation.png",
      id: 0,
      latitude: 22.9774635054,
      longitude: 113.2307500615,
      width: 20,
      height: 20
    }],
    polyline: [{
      points: [{
        longitude: 113.2307500615,
        latitude: 22.9774635054
      }, {
          longitude: 113.2307500618,
          latitude: 22.9774635060
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  loactiontap() {
    wx.openLocation({
      latitude: 22.9774635054,
      longitude: 113.2307500615,
      name: "广东省佛山市顺德区陈村镇顺联智造汇18栋3层",
      scale: 28
    })
  },
  // 点击打电话
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '18022208988', //此号码并非真实电话号码，仅用于测试  
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