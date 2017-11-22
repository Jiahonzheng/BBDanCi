Page({
  data: {
    content: ""
  },

  onShow: function () {
    this.setData({
      content: ""
    });
  },

  search: function (event) {
    this.setData({
      content: event.detail.value
    });

    wx.navigateTo({
      url: './details/details?content=' + this.data.content,
    });
  }
})