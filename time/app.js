App({
  onLaunch: function () {
    console.log("开始加载小程序")
    wx.login({
      success(res) {
        console.log(res)
        if (res.code) {
          console.log(res.code)
          // 发起网络请求s
          wx.request({
            url: 'http://127.0.0.1/wx/onLogin',
            data: {
              code: res.code,
              username:'1',
              password:'1'
            },
            success(e){
              console.log(e)

            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})









