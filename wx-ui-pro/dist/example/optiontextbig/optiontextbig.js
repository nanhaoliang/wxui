// example/headtab/headtab.js
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
        tiele: "全部",
        id: "0"
      },
      {
        tiele: "男装",
        id: "1"
      },
      {
        tiele: "女装",
        id: "2"
      },
      {
        tiele: "童装",
        id: "3"
      },
      {
        tiele: "其他",
        id: "4"
      }
    ],
  },

  textChange(e) {
    const that = this;
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    let typesids = e.currentTarget.dataset.type;
    that.setData({
      index: Index,
      typeid: typesids.id,
      swiperIndex: e.currentTarget.dataset.index,
    });
  },

})