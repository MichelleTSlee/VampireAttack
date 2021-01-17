var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// load images
var spaceship = new Image();
spaceship.src = "images/ship.png";
var galaxy = new Image();
galaxy.src = "images/galaxy.jpg";
var laser = new Image();
laser.src = "images/laser.png";


// var audioName = new Audio();
// audioName.src = "audio/audio.wav";


var ship = {
x:10,
y:10
}





//KeyClick Listeners
var keyClick = {};
document.addEventListener("keydown", function(event){
  keyClick[event.keyCode] = true;
  move(keyClick);
}, false);

document.addEventListener("keyup", function(event){
  delete keyClick[event.keyCode];
}, false);



spaceship.ready = false;
galaxy.ready = false;
laser.ready = false;
spaceship.onload = checkReady();

//Check Ready & PlayGame
function checkReady(){
   this.ready=true;
   galaxy.ready = true;
   laser.ready = true;
   playGame();
 }

 function playGame(){
    render();
    requestAnimationFrame(playGame);
  }


function render(){

  context.drawImage(galaxy, 0, 0);
  context.drawImage(laser, 100, 0, 64, 200);
  context.drawImage(laser, 100, 275, 64, 200);
  context.drawImage(spaceship, ship.x, ship.y, 50, 50);
}



function move(keyClick){
   if(87 in keyClick){
     ship.y-=10;
   }
   if(65 in keyClick){
     ship.x-=10;
   }
   if(83 in keyClick){
     ship.y+=10;
   }
   if(68 in keyClick){
     ship.x+=10;
   }

   render();
 }
