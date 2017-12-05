// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512124232914&di=98eae9c1081aa39fd088aeb42efd3fdb&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130420%2F0046043362592693_b.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512124232913&di=bfe1f2bc6035dde6c15fcf117479fc57&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F314e251f95cad1c83859c61b743e6709c93d512f.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512124232913&di=d219d05af5c4dfbb7f80229099247064&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201509%2F05%2F20150905233148_xtneV.jpeg"
    ],
    modalFlag: true
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
  modaltap:function(){
    this.setData({
      modalFlag: false
    })
  },
  modalOk: function () {
    this.setData({
      modalFlag: true
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