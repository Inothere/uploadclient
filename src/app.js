var electron = require('electron'),
  path = require('path'),
  task = require('./common/task'),
  url = require('url');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

var windows = {
  'mainWindow': null
};
app.on('ready', function() {
  windows.mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false
  });
  windows.mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'windows/main/index.html'),
    protocol: 'file:',
    slashes: true
  }));
  windows.mainWindow.on('closed', function() {
    windows.mainWindow = null;
  });
  windows.mainWindow.once('ready-to-show', function() {
    windows.mainWindow.show();
  });
  windows.mainWindow.on('maximize', function() {
    windows.mainWindow.webContents.send('info', {msg: 'maximized'});
  });

});

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// app.on('activate', () => {
//   // On macOS it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (mainWindow === null) {
//     createWindow();
//   }
// });
