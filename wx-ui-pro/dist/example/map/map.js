// page/component/orders/orders.js
Page({
  data: {
    address: {},
    hasAddress: false,
    total: 0,
  },

  onReady() {
    
  },

  onShow: function () {
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        console.log(res);
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },
})