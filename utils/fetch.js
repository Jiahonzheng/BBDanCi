const fetch = (word, callback) => {
  wx.request({
    url: 'https://api.shanbay.com/bdc/search/?word=' + word,
    method: 'GET',
    success: function (res) {
      var data = res.data;

      callback(data);
    },
    fail: function () {

    }
  })
};

module.exports = fetch;
