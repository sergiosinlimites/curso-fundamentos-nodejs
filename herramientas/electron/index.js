const { app, BrowserWindow } = require('electron');

let mainWindow;
function createWindow(){
    mainWindow = new BrowserWindow({
        width:800,
        height:600
        // webPreferences: {}, preload: {} etc
    });
    mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);