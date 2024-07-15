let maximize = true

//remember remove F12 keypress


window.onload=function(){
  function keyFuction(e){
    if(e.key == '1'){
      ipcRenderer.send('F12')
    }
  }

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

  document.body.addEventListener('keypress', keyFuction)

}