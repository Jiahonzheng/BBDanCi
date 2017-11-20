const fetch = (word, callback, time) => {
  wx.request({
    url: 'https://api.shanbay.com/bdc/search/?word=' + word.content,
    method: 'GET',
    success: function (res) {
      var result = res.data.data;
      console.log(result);
      setTimeout(function () {
        callback(result);
      },time);
    },
    fail: function () {

    }
  })
};

module.exports = fetch;
