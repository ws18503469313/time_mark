App({
  data:{
    baseUrl: "127.0.0.1",
    user_id: ""
  },
  onLaunch: function () {
    console.log("开始加载小程序")
    //先微信服务器请求获取jscode
    wx.login({
      success(res) {
        console.log(res)
        if (res.code) {
          console.log("小程序初始化获取jscode:" + res.code)
          // 向用户
          wx.request({
            url: "http://127.0.0.1/wx/getAccessToken",
            data: {
              code: res.code
            },
            success(e) {
              console.log(e)
              var user_id = e.data.data
              wx.getLocation({
                type: 'wgs84',
                success(res) {
                  const latitude = res.latitude
                  const longitude = res.longitude
                  wx.request({
                    url: "http://127.0.0.1/wx/postAddress",
                    data: {
                      userId: user_id,
                      latitude: latitude,
                      longitude: longitude
                    },
                    success(e) {
                      console.log(e)
                    }
                  })
                }
              })
            }
          })

      }else {
        console.log('登录失败！' + res.errMsg)
      }
    }
    })

   
  }
})









