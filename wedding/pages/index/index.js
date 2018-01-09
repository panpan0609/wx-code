//index.js
//获取应用实例
const app = getApp()
var api = require('../../utils/api.js')
Page({
  data: {
    imgList:[],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
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
  onLoad: function () {
    api.get({
      url:'home/slides/2',
      success: res =>{
        if(res.code == 1){
          let imgList = [];
          imgList = res.data[0].items.map(item => item.image);
          this.setData({
            imgList: imgList
          })
        }
      }
    })
    this.pullUpLoad();
  },
  pullUpLoad: function () {
    if (this.data.loadingMore || this.data.noMoreData) return;
    this.setData({
      loadingMore: true
    });
    api.get({
      url: 'portal/articles',
      data: { page: this.currentPageNumber },
      success: data => {
        if (data.code == 1) {
          data.data = data.data.slice(4)
          this.data.list.push(...data.data)
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
