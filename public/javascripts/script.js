document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


function goBack() {
  window.history.back();
 }

 let $riddleBox = document.getElementById('riddlebox')
 let $riddle = document.getElementById('riddle')

 console.log($riddleBox)

 $riddleBox.onclick = function() {
   $riddle.innerText = "Language!"
 }