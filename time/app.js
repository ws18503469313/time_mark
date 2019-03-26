App({
  onLaunch: function () {
    console.log("开始加载小程序")
    wx.login({
      success(res) {
        console.log(res)
        if (res.code) {
          console.log(res.code)
          // 发起网络请求
          wx.request({
            url: 'https://www.wssmjy.com/wx/onLogin',
            data: {
              code: res.code,
              username:'wangshuai',
              password:'123'
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









