var net = require('net');

module.exports = {
  bind: function (options) {
    var windows = options.windows,
      port = options.port;
    windows.mainWindow.on('maximize', function() {
      windows.mainWindow.webContents.send('info', {msg: 'port: ' + port});
    });  
  }
}
