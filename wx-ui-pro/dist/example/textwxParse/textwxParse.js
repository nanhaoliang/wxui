// example/textwxParse/textwxParse.js

let wxparse = require("../../wxParse/wxParse.js"); 

//获取应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dkcontent: "<div><p>wewqewqewqwee</p><h1>12321321321</h1>你好文字这是html<div><br/><img src='http://a.hiphotos.baidu.com/image/pic/item/9a504fc2d5628535959cf4cf94ef76c6a6ef63db.jpg'><br><video src='http://www.w3school.com.cn/i/movie.ogg' controls='controls'>your browser does not support the video tag</video>",
    dkheight: "100%",
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    indicatorcolor: "#E85027",
    circular: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wxparse.wxParse('dkcontent', 'html', this.data.dkcontent, this, 5);
  },

})