var fetch = require('../../../utils/fetch.js');
var audio = require('../../../utils/audio.js');

Page({
  // 页面数据
  data: {
    content: "",
    definition: "",
    pron: "",
    audio: "",
    isLoading: true
  },

  // 载入单词
  onLoad: function (options) {
    this.setData({
      content: options.content,
      definition: options.definition
    });
    
    fetch(options.content, this.fetchCallback);
  },

  // 播放单词语音
  play: function () {
    audio(this.data.audio).play();
  },

  // 请求回调函数
  fetchCallback: function (data) {
    this.setData({
      content: data.data.content,
      definition: data.data.definition,
      pron: data.data.pron,
      audio: data.data.audio,
      isLoading: false
    });
  }
})