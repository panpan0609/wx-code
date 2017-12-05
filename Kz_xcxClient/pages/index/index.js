//index.js
//获取应用实例
const app = getApp()
var api = require('../../utils/api.js')
Page({
  onLoad: function (options) {
    try {
      var isLogin = wx.getStorageSync('login')
      console.info(isLogin)
      if (!isLogin || null == isLogin) {
        api.login()
        
        return
      }
    } catch (e) {
      // Do something when catch error
    }

    this.setData({
      title: options.title
    })
  },
  data: {
    title: '',
    imgUrls: [
      '../../images/01.jpg',
      '../../images/02.jpg',
      '../../images/03.jpg',
      '../../images/04.jpg',
      '../../images/05.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    list: [
      { text: "照明灯饰", src: "../../images/light.png", bg: "#38B89B" },
      { text: "商铺生意", src: "../../images/money.png", bg: "#F63B3C" },
      { text: "招聘求职", src: "../../images/qiuzhi.png", bg: "#FA9F2C" },
      { text: "生活服务", src: "../../images/house_server.png", bg: "#FD4E15" },
      { text: "二手买卖", src: "../../images/two_handle.png", bg: "#FEA331" },
      { text: "房产租售", src: "../../images/house.png", bg: "#F93B40" },
      { text: "拼车", src: "../../images/car.png", bg: "#1FAEE9" },
      { text: "商务服务", src: "../../images/server.png", bg: "#FD501B" },
      { text: "花木", src: "../../images/flower.png", bg: "#2CA9F3" },
      { text: "教育培训", src: "../../images/study.png", bg: "#30b699" }
    ],
    banner: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512124232914&di=98eae9c1081aa39fd088aeb42efd3fdb&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130420%2F0046043362592693_b.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512124232913&di=bfe1f2bc6035dde6c15fcf117479fc57&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F314e251f95cad1c83859c61b743e6709c93d512f.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512124232913&di=d219d05af5c4dfbb7f80229099247064&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201509%2F05%2F20150905233148_xtneV.jpeg"
    ],
    isChecked: true
  },
  // 顶部搜索框跳转链接
  jumpTap: function () {
    wx.navigateTo({
      url: '../home/search/search'
    })
  },
  // 列表图标跳转详情页
  listClickTap: function (event) {
    var title = event.currentTarget.dataset.title;
    wx.navigateTo({
      url: '../home/classify/classify?title=' + title
    })
  },
  // 发布列表跳转详情页
  detailTap: function () {
    wx.navigateTo({
      url: '../home/detail/detail'
    })
  },
  // 点击查看全文
  downTap: function () {
    this.setData({
      isChecked: false
    })
  },
  // 点击收起全文
  upTap: function () {
    this.setData({
      isChecked: true
    })
  },
  // 点击打电话
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '13125152877', //此号码并非真实电话号码，仅用于测试  
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  // 点击图片放大浏览事件
  showImg: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = this.data.banner;//获取data-list
    console.log(imgList);
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我在快招等你',
      path: '/page/index?id=123',
      success: function (res) {
        // 转发成功
        console.log(res);
      },
      fail: function (res) {
        // 转发失败
        console.log(res);
      }
    }
  }

});
