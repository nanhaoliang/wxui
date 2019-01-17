Page({
    data: {
        list: [
            {
              id: 'logindemo',
              name: '登陆页面',
              open: false,
              pages: ['logindemo']
            },
            {
                id: 'form',
                name: '表单',
                open: false,
                pages: ['form','button', 'list', 'input', 'slider', 'uploader']
            },
            {
                id: 'widget',
                name: '基础组件',
                open: false,
              pages: ['xscroll','badge', 'flex', 'footer', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress','textroll']
            },
            {
                id: 'feedback',
                name: '操作反馈',
                open: false,
                pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
            },
            {
                id: 'nav',
                name: '导航相关',
                open: false,
                pages: ['navbar', 'tabbar','optiontextbig','lefttable']
            },
            {
                id: 'search',
                name: '搜索相关',
                open: false,
                pages: ['searchbar']
            },
            {
                id: 'img-lodin',
                name: '图片加载',
                open: false,
                pages: ['imglistloadin']
            },
            {
              id: 'textwxparse',
              name: 'html富文本解析',
              open: false,
              pages: ['textwxParse']
            },
            {
              id: 'textimg',
              name: '图文结合上传',
              open: false,
              pages: ['textimg']
            },
            {
              id: 'imgcarousel',
              name: '图片轮播（预加载）',
              open: false,
              pages: ['imgcarousel']
            },
            {
              id: 'drawerlayer',
              name: '底部弹出层',
              open: false,
              pages: ['drawerlayer']
            },
            {
              id: 'comment',
              name: '订单评价',
              open: false,
              pages: ['comment']
            },
            {
              id: 'cascadeflow',
              name: '瀑布流',
              open: false,
              pages: ['cascadeflow']
            },
            {
              id: 'city_picker',
              name: '城市三级联动',
              open: false,
              pages: ['city_picker']
            },
            {
              id: 'calender',
              name: '自定义日历',
              open: false,
              pages: ['calender']
            },
            {
              id: 'map',
              name: '地图选点(手机预览定位准确)',
              open: false,
              pages: ['map']
            },
            {
              id: 'shoppinpcart',
              name: '购物车流程',
              open: false,
              pages: ['shoppinpcart']
            },
            
        ]
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    }
});
