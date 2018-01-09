// pages/case/index/index.js
var api = require('../../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },
  getList: function () {
    api.get({
      url: 'portal/categories',
      isshowLoading: true,
      success: res => {
        if (res.code == 1) {
          let arr1 = [], arr2 = [], arr3 = [], arr4 = [], list1 = {}, list2 = {}, list3 = {}, list4 = {}, list = {};
          res.data.forEach((val) => {
            if (val.name == '婚车装饰') {
              arr1.push(val.more.thumbnail)
            }
            if (val.name == '婚庆策划') {
              arr2.push(val.more.thumbnail)
            }
            if (val.name == '司仪主持') {
              arr3.push(val.more.thumbnail)
            }
            if (val.name == '开业庆典') {
              arr4.push(val.more.thumbnail)
            }
          })
          list1['text'] = '婚庆策划';
          list1['url'] = arr2;
          list2['text'] = '婚车装饰';
          list2['url'] = arr1;
          list3['text'] = '司仪主持';
          list3['url'] = arr3;
          list4['text'] = '开业庆典';
          list4['url'] = arr4;
          list[0] = list1;
          list[1] = list2;
          list[2] = list3;
          list[3] = list4;
          this.setData({
            list: list
          })
        }
        if (res.code == 0) {
          //  console.log(res.data);
        }
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

  previewImage: function (event) {
    let src = event.currentTarget.dataset.src;//获取data-src
    let imgList = event.currentTarget.dataset.imglist;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '百年好合婚庆',
      path: '/page/index/index',
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
  }
})