var block = document.getElementById("block");
var block = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
 
hole.addEventlistener('animationiteration', () => {
  var random = -(Math.random()*300)+150);
  var top = (random*100)+150;
  hole.style.top = random + "px";
  counter++;
}};
  setInterval(function(){
 var characterTop = 
     parsentInt(window.getComputedStyle(character).getPropertyValue("top");
 if(jumping==0){
 character.style.top = (characterTop+3)+"px";
 }
  var blockLeft = parsentInt(window.getComputedStyle(block).getPropertyValue("left");
  var holetop = parsentInt(window.getComputedStyle(hole).getPropertyValue("top");    
   var characterTop = 
     parsentInt(window.getComputedStyle(character).getPropertyValue("top");
  var cTop = -(500-characterTop);
  if((characterTop>480)||(()&&())){
    alert("Game Over. Score:"+counter);
    character.style.top = 100px;
    counter=0;
  }
},10);             
function jump(){
  jumping = 1;
  let jumpCount = 0;
  var jumpInterval = setInterval(function(){
    var characterTop = 
    parsentInt(window.getComputedStyle(character).getPropertyValue("top");
    if((characterTop>6)&&(counter<15)){
    character.style.top = (characterTop-5)+"px";
    }
    if(jumpCount>20){
      clearInterval(jumpInterval);
      jumping=0;
      jumpCount=0;
    }
      jumpCount++;
  },10)
}
