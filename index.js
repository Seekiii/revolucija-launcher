const electron = require('electron');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

electron.app.on('ready', () => {
    const mainWindow = new electron.BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
            //devTools: false
        },
        resizable: false,
        icon: __dirname + '/html/favicon.ico',
        center:true,
        maximizable :false,
        darkTheme :true,
        allowRunningInsecureContent : true
    });
    mainWindow.loadURL(`file://${__dirname}/html/index.html`);
});

electron.app.on('window-all-closed', () => {
    electron.app.quit()
})