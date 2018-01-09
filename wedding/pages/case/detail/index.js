var api = require('../../../utils/api.js');
var WxParse = require('../../../wxParse/wxParse.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
  },
  previewImage: function (event) {
    let src = event.currentTarget.dataset.src;//获取data-src
    let imgList = event.currentTarget.dataset.imglist.map(item => item.url);//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {
      wx.showNavigationBarLoading();
      api.get({
        url: 'portal/articles/' + options.id,
        data: {},
        isshowLoading: true,
        success: data => {
          wx.hideNavigationBarLoading();
          if (data.code) {
            this.setData({ article: data.data });
            WxParse.wxParse('articleContent', 'html', data.data.post_content, this, 30);
            wx.setNavigationBarTitle({
              title: data.data.post_title
            });
          }
        },
        fail: err => {
          wx.hideNavigationBarLoading();
        }
      });
    }
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
    return {
      title: this.data.article.post_title,
      path: '/pages/case/detail/index?id=' + this.id
    }
  }
})