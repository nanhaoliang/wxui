// example/imglistloadin/imglistloadin.js

//获取应用实例
const app = getApp()

const ImgLoader = require('../../img-loader/img-loader.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chanpinList: [],//展示
    loadingimg: "/images/image.png", //加载动态图
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化图片预加载组件，并指定统一的加载完成回调
    this.imgLoader = new ImgLoader(this, this.imageOnLoad.bind(this));


    // 接口获取图片
    let goodimg = [
      {
        goods_images: 'http://pic36.photophoto.cn/20150725/1155116300887917_b.jpg',
        loaded: false
      },
      {
        goods_images: 'http://mybaby.cnzcs.org/liangimg/1a.jpg',
        loaded: false
      },
      {
        goods_images: 'http://pic36.photophoto.cn/20150726/1155116343524879_b.jpg',
        loaded: false
      },
      {
        goods_images: 'http://mybaby.cnzcs.org/liangimg/2a.jpg',
        loaded: false
      },
      {
        goods_images: 'http://pic35.photophoto.cn/20150530/1155116311967920_b.jpg',
        loaded: false
      },
      {
        goods_images: 'http://pic35.photophoto.cn/20150530/1155116311967920_b.jpg',
        loaded: false
      },
      {
        goods_images: 'http://mybaby.cnzcs.org/liangimg/1a.jpg',
        loaded: false
      },
      {
        goods_images: 'http://pic36.photophoto.cn/20150726/1155116343524879_b.jpg',
        loaded: false
      },
      {
        goods_images: 'http://mybaby.cnzcs.org/liangimg/2a.jpg',
        loaded: false
      },
    ]


    // 图片占位加载
    let lists = goodimg;
    this.setData({
      chanpinList: lists
    })

    //同时发起全部图片的加载
    this.data.chanpinList.forEach(item => {
      this.imgLoader.load(item.goods_images)
    })
  },


  //加载完成后的回调
  imageOnLoad(err, data) {
    console.log('图片加载完成', err, data.src)

    const chanpinList = this.data.chanpinList.map(item => {
      if (item.goods_images == data.src)
        item.loaded = true
      return item
    })
    this.setData({
      chanpinList
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})