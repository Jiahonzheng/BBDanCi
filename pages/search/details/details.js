Page({
  data: {
    content: "",
    definition: "",
    pron: "",
    audio: ""
  },

  onLoad: function (options) {
    this.setData({
      content: options.content,
      definition: options.definition
    });
    console.log(this.data);
  }
})