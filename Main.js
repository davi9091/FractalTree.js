const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;

// Listen for app to be ready

app.on('ready', function(){
    mainWindow = new BrowserWindow({});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));

    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function(){
      app.quit();
    });

    // Build menu from menu template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

// Menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu:  [ {
          label: 'Quit',
          accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
          click() {
            app.quit();
          }} ]
    }, {
        label: 'About',
        submenu: [ {
          label: 'Help',
          click() {
            mainWindow.webContents.send('help');
          }
        }, {
          label: 'About me...',
          click() {
            mainWindow.webContents.send('about');
          }
        }
        ]
  }
];