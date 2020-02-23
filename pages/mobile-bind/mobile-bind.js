// pages/mobile-bind/mobile-bind.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: {
      type: 'mobile',
      placeholder: '请输入手机号'
    },
    vcode: {
      type: 'vcode',
      placeholder: '请输入验证码',
      title: '获取验证码'
    }
  },

  bindMobile(){
    console.log(`手机号是 ${app.globalData.mobile} 验证码是:${app.globalData.vcode}`)
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