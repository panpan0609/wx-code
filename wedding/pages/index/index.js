//index.js
//获取应用实例
const app = getApp()
const backgroundAudioManager = wx.getBackgroundAudioManager()
var api = require('../../utils/api.js')
// function getRandomColor() {
//   let rgb = []
//   for (let i = 0; i < 3; ++i) {
//     let color = Math.floor(Math.random() * 256).toString(16)
//     color = color.length == 1 ? '0' + color : color
//     rgb.push(color)
//   }
//   return '#' + rgb.join('')
// }
Page({
  data: {
    imgList:[],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    list: [],
    isPlaying:true
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
    this.getList();
    wx.playBackgroundAudio({
      dataUrl: 'http://www.hellobug.cn/upload/music/music.mp3',           coverImgUrl:'https://www.hellobug.cn/upload/portal/20180122/427ba091b434973066da043334c02dfe.jpg',
      title: '咱们结婚吧',
    })
  },
  getList: function () {
    api.get({
      url: 'portal/categories',
      data:{
        type:1,
        page:1
      },
      isshowLoading: true,
      success: res => {
        if (res.code == 1) {
          let arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], list1 = {}, list2 = {}, list3 = {}, list4 = {}, list5 = {}, list = {};
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
            if (val.name == '大棚出租') {
              arr5.push(val.more.thumbnail)
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
          list5['text'] = '大棚出租';
          list5['url'] = arr5;
          list[0] = list1;
          list[1] = list2;
          list[2] = list3;
          list[3] = list4;
          list[4] = list5;
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
  onMusicTap: function (event) {
    if (this.data.isPlaying){
      wx.pauseBackgroundAudio();
      this.setData({
        isPlaying:false
      })
    }else{
      wx.playBackgroundAudio({
        dataUrl: 'http://www.hellobug.cn/upload/music/music.mp3',        coverImgUrl:'https://www.hellobug.cn/upload/portal/20180122/427ba091b434973066da043334c02dfe.jpg',
        title: '咱们结婚吧',
      })
      this.setData({
        isPlaying: true
      })
    }
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
      path: '/pages/index/index',
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
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  }
})
