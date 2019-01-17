var base64 = require("../images/base64");
Page({
  data:{
    list: [
      { text: '这里填写内容' },
      { text: '这里填写内容' },
      { text: '这里填写内容' },
      { text: '这里填写内容' },
      { text: '这里填写内容' },
      { text: '这里填写内容' }
    ],
    allStatus: false
  },

  check: function (e) {
    var index = e.currentTarget.dataset.index;
    this.data.list[index].selectStatus = true;
    this.setData({
      list: this.data.list
    });
  },
  uncheck: function (e) {
    var index = e.currentTarget.dataset.index;
    this.data.list[index].selectStatus = false;
    this.setData({
      list: this.data.list
    });
  },
  selectAll: function () {
    var vm = this;
    var list = vm.data.list;
    for (var i = 0; i < list.length; i++) {
      if (!list[i].selectStatus) {
        vm.setData({
          allStatus: true
        });
        break;
      }
    }
    if (i >= list.length) {
      vm.setData({
        allStatus: false
      });
    }

    for (var i = 0; i < list.length; i++) {
      list[i].selectStatus = vm.data.allStatus;
    }

    vm.setData({
      list: list
    });

  },
    onLoad: function(){
        this.setData({
            icon: base64.icon20
        });
    }
});