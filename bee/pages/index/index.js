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
    list:[],
  },
 
  onLoad: function () {
    api.get({
      url:'home/slides/1',
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
    this.getList();
  },
  getList: function () {
    api.get({
      url: 'portal/categories',
      success: res => {
        if (res.code == 1) {
          let arr1 = [], arr2 = [], arr3 = [], arr4 = [], list1 = {}, list2 = {}, list3 = {}, list4 = {}, list = {};
          res.data.forEach((val) => {
            if (val.name == '蜂蜜') {
              arr2.push(val.more.thumbnail)
            }
            if (val.name == '蜂皇浆') {
              arr1.push(val.more.thumbnail)
            }
            if (val.name == '花粉') {
              arr3.push(val.more.thumbnail)
            }
            if (val.name == '蜂胶') {
              arr4.push(val.more.thumbnail)
            }
          })
          list1['text'] = '蜂蜜';
          list1['url'] = arr2;
          list2['text'] = '蜂皇浆';
          list2['url'] = arr1;
          list3['text'] = '花粉';
          list3['url'] = arr3;
          list4['text'] = '蜂胶';
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
      title: '海波蜂蜜',
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
