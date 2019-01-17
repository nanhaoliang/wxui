// pages/govdetail_xq/govdetail_xq.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    txtimgList: {
      "btfm": [ // 标题 简介
        {
          bititle: "标题标题标题标题标题标题标题标题",
          fmimg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2642485998,3259070218&fm=26&gp=0.jpg",
          jianjie: "标题标题标题标题标题标题标题标题"
        }
      ],
      "textimgl": [ //图文内容
        {
          img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2642485998,3259070218&fm=26&gp=0.jpg",
          text: '填写内容',
          title: "内容内容内用内容内用内容内用内容内用内用"
        },
        {
          img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2642485998,3259070218&fm=26&gp=0.jpg",
          text: '填写内容',
          title: "aaaaaaaaaaaaaaaaaa"
        },
        {
          img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2642485998,3259070218&fm=26&gp=0.jpg",
          text: '填写内容',
          title: ""
        },
      ],
     
    },
    fmimages: false,//封面图片
    loads: 0,//背景色
    ymnum: '',//图标
    scimage: "/images/xin_wei.png",// 收藏图片
    // 键盘
    password: false, //是否是密码类型
    focus: false, //获取焦点
    confirmhold: false,//点击键盘右下角按钮时是否保持键盘不收起v
    adjustPosition: false, //键盘弹起时，是否自动上推页面
    confirmType: "send",
    srku: false, //输入框隐藏显示
    plList: [],//评论列表
    userlist: [],//当前用户信息
    santubiao: false,// 判断收藏分享评论图标显示
    scimgflag: 0, //是否收藏id
  },

  // 收藏
  shoucang: function (e) {
    let that = this;
    if (that.data.scimgflag == 0) {
      that.setData({
        scimgflag: 1,
        scimage: "/images/xin_yi.png"
      })
      // this.shc("1");
    } else if (that.data.scimgflag == 1) {
      that.setData({
        scimgflag: 0,
        scimage: "/images/xin_wei.png"
      })
      // this.shc("0");
    }
  },

  // 点击评论
  pingshu: function () {
    let that = this;
    that.setData({
      focus: true,
      srku: true
    })
  },

  //键盘发送事件
  searchBtn: function (e) {
    let userif = app.globalData.userInfo;
    this.setData({
      userlist: userif
    })
    let usedata = JSON.parse(this.data.userlist.rawData)
    let plun = {
      comment_content: e.detail.value,
      comment_openid: {
        name: usedata.nickName,
        img_url: usedata.avatarUrl
      }
    }
    console.log(plun);
    //push数组
    let plList_1 = this.data.plList;
    plList_1.push(plun);
    // usetlist_1.push(plun);
    this.setData({
      plList: plList_1,
      plnss: "" //清空小程序值
    })
    // this.fspl(e.detail.value);
  },

  // 图片加载成功
  imageOnLoad(ev) {
    let that = this;
    console.log(`图片加载成功，width: ${ev.detail.width}; height: ${ev.detail.height}`);
    setTimeout(function () {
      that.setData({
        loads: 1,
        santubiao: true
      })
      wx.hideLoading();
    }, 1000)
  },

  // 点击预览封面图片
  fmviewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.txtimgList.btfm;
    let imgs = [];
    imgs.push(imgArr[index].fmimg)
    wx.previewImage({
      current: imgArr[index].fmimg,     //当前图片地址
      urls: imgs,
    })
  },

  // 点击预览内容图片
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.txtimgList.textimgl;
    let imgs = [];
    for (var a = 0; a < imgArr.length; a++) {
      imgs.push(imgArr[a].img)
    }
    wx.previewImage({
      current: imgArr[index].img,     //当前图片地址
      urls: imgs,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载...',
      mask: true
    })
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