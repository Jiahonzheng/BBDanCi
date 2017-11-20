var list = require('../../data/wordList.js');
var fetch = require('../../utils/fetch.js');
var audio = require('../../utils/audio.js')

Page({
  // 页面数据
  data: {
    index: null,
    nextIndex: null,
    content: "",
    definition: "",
    pron: "",
    audio: "",
    checkedWords: [],
    weakWords: [],
    definitionShowed: false,
    nextButtonDisabled: false
  },

  // 载入当前单词
  onLoad: function () {
    var index = this.getIndex();
    var word = list.wordList[index];

    this.data.checkedWords.push(index);

    this.setData({
      index: index,
      content: word.content,
      definition: word.definition,
      pron: word.pron
    });
  },

  // 播放单词语音
  play: function () {
    audio(this.data.audio).play();
  },

  // 显示当前解释
  show: function () {
    this.data.weakWords.push(this.data.index);
    this.setData({
      definitionShowed: true
    });
  },

  // 载入下一单词
  next: function () {
    var nextIndex = this.getIndex();
    var word = list.wordList[nextIndex];

    this.data.checkedWords.push(nextIndex);

    this.setData({
      nextIndex: nextIndex,
      definitionShowed: true,
      nextButtonDisabled: true
    })

    fetch(word, this.fetchCallback, 500);
  },

  // 获取单词Index
  getIndex: function () {
    var index;

    do {
      index = Math.floor(Math.random() * 499) + 1;
    } while (this.data.checkedWords.indexOf(index) != -1);

    return index;
  },

  // 请求回调函数
  fetchCallback: function (word) {
    this.setData({
      index: this.data.nextIndex,
      content: word.content,
      definition: word.definition,
      pron: word.pron,
      audio: word.audio,
      definitionShowed: false,
      nextButtonDisabled: false
    })
  }
})
