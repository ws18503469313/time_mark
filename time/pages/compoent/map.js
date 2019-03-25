// pages/compoent/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    

    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log("markertap: "+e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }



})