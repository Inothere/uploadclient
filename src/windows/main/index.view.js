const Vue = require('vue/dist/vue');
var electron = require('electron');

var ipcRenderer = electron.ipcRenderer;

var app = new Vue({
  el: '#uploader',
  data: {
    reactivity: {
      message: 'Hello Uploader',
      info: 'test'
    }
  },
  methods: {
    toggle: function() {
      var self = this;
      if (self.reactivity.message == 'Hello Uploader') {
        self.reactivity.message = 'Hello me'
      } else {
        self.reactivity.message = 'Hello Uploader';
      }
    }
  },
  created: function() {
    var self = this;
    self.reactivity.info = 'test';
    
    ipcRenderer.on('info', function(e, msg) {
      self.reactivity.info = msg.msg;
    });
  },
  watch: {
    info: function(val) {
      console.log('changed');
    }
  }
});


