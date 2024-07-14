let maximize = true

window.onload=function(){

  const { ipcRenderer } = require('electron');
  document.getElementById('closeApp').addEventListener('click', ()=>{
    ipcRenderer.send('close')
  })
  document.getElementById('unmaximizeApp').addEventListener('click', ()=>{
    if(maximize){
      ipcRenderer.send('unmaximize')
      maximize = false
    }
    else{
      ipcRenderer.send('maximize')
      maximize = true
    }
    
  })
  document.getElementById('minimizeApp').addEventListener('click', ()=>{
    ipcRenderer.send('minimize')
  })
}