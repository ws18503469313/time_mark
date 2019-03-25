const app = getApp()

Page({
  data: {
    array: [1, 2, 3, 4, 5],
    count: 1
  },
  onLoad: function () {
    this.setData({ msg: 'MIni_pro_demo' })
    console.log('微信小程序开始')
    
  },
  add(e) {
    this.setData({
      count: this.data.count + 1
    })
  },
  clickMe(e){
    console.log(1)
    wx.navigateTo({
      url: '/pages/compoent/map'　　// 页面 A
    })
  },
  sacn(e){
    console.log(123)
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }
})
