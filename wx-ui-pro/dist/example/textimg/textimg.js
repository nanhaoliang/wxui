// pages/govpage/govpage.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    typeid: 0,
    swiperIndex: '',//变化时id存储
    selectData: [
      {
        tiele: "推荐",
        id: "0"
      },
      {
        tiele: "全部",
        id: "1"
      },
      {
        tiele: "",
        id: "2"
      },
      {
        tiele: "",
        id: "3"
      },
      {
        tiele: "",
        id: "4"
      }
    ],
    zxList: [
      {
        title: "标题标题标题标题标题",
        synopsis: "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介",
        read_num: "1000",
        comment_num: "2000"
      },
      {
        title: "标题标题标题标题标题",
        synopsis: "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介",
        read_num: "1000",
        comment_num: "2000"
      },
    ],
  },

  // 点击操作
  textChange(e) {
    const that = this;
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    let typesids = e.currentTarget.dataset.type;
    if (typesids.tiele == "") {
      return false;
    } else {
      that.setData({
        index: Index,
        typeid: typesids.id,
        swiperIndex: e.currentTarget.dataset.index,
      });
    }
  },

  // 跳转详情也
  xqgvpage: function (e) {
    wx.navigateTo({
      url: '/example/govdetail_xq/govdetail_xq',
    })
  },

  // 发布攻略
  fabu: function (e) {
    wx.navigateTo({
      url: '/example/govdetail/govdetail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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