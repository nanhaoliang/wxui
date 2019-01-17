// pages/govdetail/govdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txtimgList: {
      "textimgl": [ //图文内容
        {
          img: "/images/zwttj.png",
          text: '填写内容',
          title: ""
        }
      ],
      "btfm": [ // 标题 简介
        {
          bititle: "",
          fmimg: "/images/fm.png",
          jianjie: ""
        }
      ]
    },
  },

  // 封面图片
  fenimg: function (e) {
    var that = this;
    let index = e.currentTarget.dataset.index;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片res.tempFilePaths
        var fmimg = 'txtimgList.btfm[' + index + '].fmimg';
        that.setData({
          [fmimg]: res.tempFilePaths[0]
        });
      }
    })
  },

  // 标题
  bioati: function (e) {
    var that = this;
    let index = e.currentTarget.dataset.index;
    var titlisst = 'txtimgList.btfm[' + index + '].bititle';
    that.setData({
      [titlisst]: e.detail.value
    });
  },

  // 添加图文数组
  addtim: function (e) {
    let plun = {
      img: "/images/zwttj.png",
      text: "填写内容",
      title: ""
    }
    //push数组
    let plList_1 = this.data.txtimgList.textimgl;
    plList_1.push(plun);
    this.setData({
      'txtimgList.textimgl': plList_1
    })
  },


  // 内容输入时触发
  shuru: function (e) {
    // console.log(e);
    var that = this;
    let index = e.currentTarget.dataset.index;
    var titlist = 'txtimgList.textimgl[' + index + '].title';
    that.setData({
      [titlist]: e.detail.value
    });
  },

  // 上传图片
  chooseImage: function (e) {
    var that = this;
    let index = e.currentTarget.dataset.index;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片res.tempFilePaths
        var imglist = 'txtimgList.textimgl[' + index + '].img';
        that.setData({
          [imglist]: res.tempFilePaths[0]
        });
      }
    })
  },

  // 删除数组
  delted: function (e) {
    let listnum = this.data.txtimgList.textimgl.length - 1;
    if (listnum != 0) {
      let arrlist = this.data.txtimgList.textimgl;
      arrlist.splice(listnum, 1);
      this.setData({
        'txtimgList.textimgl': arrlist
      })
    }
  },

  // 确定
  fabu(e) {
    console.log(this.data.txtimgList);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.txtimgList.textimgl);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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