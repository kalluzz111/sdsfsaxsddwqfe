process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const { app, BrowserWindow } = require('electron'); // ✅ this line MUST be here!
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 262,
    height: 397,
    resizable: false,
    frame: false,
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('start.html').catch((err) => {
    console.error("Failed to load HTML:", err);
  });
}

app.whenReady().then(() => {
  console.log("App is launching...");
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

