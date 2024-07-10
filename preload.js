// const { ipcRenderer } = require('electron');

// document.getElementById('closeApp').addEventListener('click', () => {
//   ipcRenderer.invoke('quit-app');
// });
// const path = require('path')
// const {ipcRenderer} = require('electron')





// setTimeout(() => {
//   console.log('start')
//   const { ipcRenderer } = require('electron');
//   document.getElementById('closeApp').addEventListener('click', ()=>{
//     console.log(1)
//     ipcRenderer.send('close')
//   })
// }, 10000);

window.onload=function(){

  const { ipcRenderer } = require('electron');
  document.getElementById('closeApp').addEventListener('click', ()=>{
    ipcRenderer.send('close')
  })
}