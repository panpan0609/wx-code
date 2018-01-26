// pages/case/index/index.js
var api = require('../../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    loadingMore: false,
    noMoreData: false,
  },
  currentPageNumber: 1,
  // 点击图片放大浏览事件
  previewImage(e) {
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: [e.currentTarget.dataset.previewUrl] // 需要预览的图片http链接列表
    });
  },
  // 查看详情
  onListItemTap(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/case/detail/index?id=' + id
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pullUpLoad();
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

  pullUpLoad: function () {
    if (this.data.loadingMore || this.data.noMoreData) return;
    this.setData({
      loadingMore: true
    });
    api.get({
      url: 'portal/lists/is_top',
      data: { page: this.currentPageNumber },
      success: data => {
        if (data.code == 1) {
          this.data.list.push(...data.data.list)
          this.setData({
            list: this.data.list
          });
          this.currentPageNumber++;
          this.setData({
            noMoreData: true
          });
        }
        if (data.code == 0) {
        }
      },
      complete: () => {
        this.setData({
          loadingMore: false
        });
      }
    });
  },
  onReachBottom: function () {
    this.pullUpLoad();
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '百年好合婚庆',
      path: '/pages/case/index/index',
      success: function (res) {
        wx.showToast({
          title: '转发成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

 
})