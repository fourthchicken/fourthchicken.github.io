const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('node:path')

const electron = require('electron')
const { ipcRenderer } = require('electron')




function createWindow () {
  const loading = new BrowserWindow({
    width:600,
    height:400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    frame:false,
    show:false
  })
  loading.loadFile('waiting.html')
  loading.once('ready-to-show', () =>{
    loading.show()
  })
  





  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    show:false,
    frame:true
  })
  
  electron.Menu.setApplicationMenu(null)
  mainWindow.loadFile('TaiwanCooperativeBank.html')
  
  mainWindow.once('ready-to-show', () =>{
    setTimeout(() => {
      mainWindow.maximize()
      loading.hide()
      loading.close()
      mainWindow.show()
    }, 1000);  
  })



}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('close', ()=>{
  app.quit()
})


