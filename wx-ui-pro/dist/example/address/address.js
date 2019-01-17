// page/component/new-pages/user/address/address.js
var QQMapWX = require('../../qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
  data: {
    address: {
      name: '',
      phone: '',
      detail: '',
      demap: '',
      mapdeta: ''
    },
    latitude: 0,//地图初次加载时的纬度坐标
    longitude: 0, //地图初次加载时的经度坐标
    name: "" //选择的位置名称
  },


  onLoad() {
    // 实例化API核心类
    // 腾讯地图API key 需要自己申请  地址： https://lbs.qq.com/guides/startup.html  
    qqmapsdk = new QQMapWX({
      key: '自己申请 key  https://lbs.qq.com/guides/startup.html'
    });

    var self = this;

    wx.getStorage({
      key: 'address',
      success: function (res) {
        self.setData({
          address: res.data
        })
      }
    })
  },

  formSubmit(e) {
    const value = e.detail.value;
    if (value.name && value.phone && value.detail) {
      wx.setStorage({
        key: 'address',
        data: value,
        success() {
          wx.navigateBack();
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false
      })
    }
  },

  //移动选点
  moveToLocation: function () {
    var that = this;
    // 打开地图选择位置
    wx.chooseLocation({
      success: function (res) {
        let addlist = that.data.address.detail;
        let mapdeta = res.address + addlist
        // res.name为地址名称  
        console.log(res);
        //选择地点之后返回到原来页面
        that.setData({
          'address.demap': res.address,
        })
        wx.navigateTo({
          url: "/example/index/index?address=" + res.name
        });
      },
      fail: function (err) {
        console.log(err)
      }
    });
  }
})