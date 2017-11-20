const audio = (src) => {
  var context = wx.createInnerAudioContext();
  
  context.src = src;

  return context;
};

module.exports = audio;