var fetch = require('../../utils/fetch.js');

Page({
  data: {
    content: "",
    definition: "",
    pron: "",
    audio: ""
  },

  onLoad: function () {
  },

  search: function (event) {
    var word = event.detail.value;

    fetch(word, this.fetchCallback);
  },

  updateWordList: function (word) {

  },

  fetchCallback: function (data) {
    var self = this;
    setTimeout(function () {
      self.setData({
        content: data.data.content,
        definition: data.data.definition,
        pron: data.data.pron,
        audio: data.data.audio
      });
      console.log(self.data);
      // wx.navigateTo({
      //   url: './details/details?content=' + self.data.content + '&definition' + self.data.definition,
      // });
    }, 500);
  }
})