// example/imgcarousel/imgcarousel.js

//获取应用实例
const app = getApp();

// 图片预加载
const ImgLoader = require('../../img-loader/img-loader.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    msgList: [],
    imgList: [],
    swiperIndex: '', //变时轮播图id存储
    currentImageId: "", // 当前轮播图id存储
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    ymnum: '',
    imglo: false,
    tupainlist: [],
    loadingimg: "/images/image.png", //加载动态图
    swipgao: "",
    pads: true
  },

  // 当band变化时执行的操作
  swiperChange(e) {
    const that = this;
    that.setData({
      swiperIndex: e.detail.current,
      imgList: e.currentTarget.dataset.imglist
    });
    let images = that.data.imgList;
    console.log(images[that.data.swiperIndex]);
  },

  // 点击操作
  detail: function (e) {
    const that = this;
    that.setData({
      currentImageId: e.currentTarget.dataset.imgid
    });
    console.log("当前轮播图id" + that.data.currentImageId);
    // wx.navigateTo({
    //   url: '/pages/commDetails/commDetails?cpid=' + that.data.currentImageId,
    // })
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
        goods_images:'http://pic36.photophoto.cn/20150725/1155116300887917_b.jpg',
        loaded:false
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
    ]

    // 图片占位加载
    let lists = goodimg; // 图片空
    this.setData({
      tupainlist: goodimg
    })

    this.setData({
      imgUrls: lists,
    })

    //同时发起全部图片的加载
    this.data.imgUrls.forEach(item => {
      this.imgLoader.load(item.goods_images)
    })

    var fu = this.gaoheight();
    setTimeout(function () {
      this.setData({
        pads: false
      })
      wx.hideLoading();
    }.bind(this), 2000)

  },

  //加载完成后的回调
  imageOnLoad(err, data) {
    console.log('图片加载完成', err, data.src)

    const imgUrls = this.data.imgUrls.map(item => {
      if (item.goods_images == data.src)
        item.loaded = true
      return item
    })
    this.setData({
      imgUrls
    })
  },

  // 获取高度 titles
  gaoheight: function (e) {
    let that = this;
    let s1 = "";
    let s2 = "";
    let s3 = "";
    let s5 = "";
    // 可见区域高度 父级
    var query = wx.createSelectorQuery();
    query.select('#getheight').boundingClientRect();
    query.exec(function (res) {
      console.log(res[0].height);
      s1 = res[0].height;
      // 可见区域高度 收藏
      var queryss = wx.createSelectorQuery();
      queryss.select('#shoucan').boundingClientRect();
      queryss.exec(function (res) {
        console.log(res[0].height);
        s2 = res[0].height;
        // 可见区域高度 标题
        var querys = wx.createSelectorQuery();
        querys.select('#titles').boundingClientRect();
        querys.exec(function (res) {
          console.log(res[0].height);
          s3 = res[0].height;
          // 可见区域高度 imglist
          var queryss = wx.createSelectorQuery();
          queryss.select('#imglist').boundingClientRect();
          queryss.exec(function (res) {
            console.log(res[0].height);
            s5 = res[0].height;
            that.phonedetail(s1, s2, s3, s5);
          })
        })
      })
    })
  },

  // 获取手机型号
  phonedetail: function (s1, s2, s3, s5) {
    let that = this;
    wx.getSystemInfo({
      success(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        if (res.windowHeight <= '555') {
          var a1 = s1 - (s2 + s3 + s5);
        } else {
          var a1 = s1 - (s2 + s3 + s5 + 15);
        }
        console.log(a1);
        that.setData({
          swipgao: a1 + "px"
        })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})