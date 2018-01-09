//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationData: {},
    imgUrls: [
      'http://img2.imgtn.bdimg.com/it/u=118266621,4179316461&fm=27&gp=0.jpg',
      'http://oss.huangye88.net/live/user/1836524/1466650155052484100-2.jpg',
      'http://img5.imgtn.bdimg.com/it/u=1036833655,3038361718&fm=27&gp=0.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    list: [
      {
        text: "微信公众号开发",
        detail: "基于微信平台实现订阅号、服务号、企业号和应用号开发产品",
        src: "../../images/weixin-01.png"
      },
      {
        text: "APP开发",
        detail:"基于iOS、Android平台帮助您开发各类App，涵盖各领域",
        src: "../../images/app-01.png"
      },
      {
        text: "小程序开发",
        detail: "敏锐观察行业需求和痛点，做可以落地实在的平台",
        src: "../../images/wx-01.png"
      },
      {
        text: "高端定制开发",
        detail: "根据企业个性化定制软件，让软件适应企业发展",
        src: "../../images/ruanjian-01.png"
      },
      {
        text: "网站建设", 
        detail: "从需求分析到前端设计开发，最后后期质保完整流程方案",
        src: "../../images/website-01.png"
      }
    ],
    partner:[
      { src: '../../images/partner01.png' },
      { src: '../../images/partner02.png' },
      { src: '../../images/partner03.png' },
      { src: '../../images/partner04.png' },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShow: function () {
    // var animation = wx.createAnimation({
    //   duration: 1000,
    //   timingFunction: 'ease',
    // })
    // this.animation = animation
    // this.setData({
    //   animationData: animation.export()
    // })

    // setTimeout(function () {
    //   animation.translateY(-140).step()
    //   this.setData({
    //     animationData: animation.export()
    //   })
    // }.bind(this), 1000)
  },
})
