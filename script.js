var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// load images
var bat = new Image();
bat.src = "images/bat.png";
var bg = new Image();
bg.src = "images/bg.jpg";
var buffy = new Image();
buffy.src = "images/buffy.png";
var dracula = new Image();
dracula.src = "images/dracula.png";
var drusilla = new Image();
drusilla.src = "images/drusilla.png";
var fg = new Image();
fg.src = "images/fg.png";
var school = new Image();
school.src = "images/school.png";



// var audioName = new Audio();
// audioName.src = "audio/audio.wav";


var safeZone = {
x:0,
y:50
}

var player = {
x:20,
y:200
}

var enemyDracula = {
  x:400,
  y: 150
}

var enemyDrusilla = {
  x: 400,
  y: 230
}

var enemyBat = {
  x: 350,
  y: 200
}


var lives = 3;


//KeyClick Listeners
var keyClick = {};
document.addEventListener("keydown", function(event){
  keyClick[event.keyCode] = true;
  move(keyClick);
}, false);

document.addEventListener("keyup", function(event){
  delete keyClick[event.keyCode];
}, false);


buffy.ready = false;
bat.ready = false;
bg.ready = false;
dracula.ready = false;
drusilla.ready = false;
fg.ready = false;
school.ready = false;


buffy.onload = checkReady();

//Check Ready & PlayGame
function checkReady(){
   this.ready=true;
   bat.ready = true;
   bg.ready = true;
   dracula.ready = true;
   drusilla.ready = true;
   fg.ready = true;
   school.ready = true;
   playGame();
 }

 function playGame(){
    render();
    requestAnimationFrame(playGame);
  }


function render(){


//NB Order matters here - draw galaxy first
  context.drawImage(bg, 0, -20);
  context.drawImage(fg, 0, 5, 500, 300);

  context.drawImage(dracula, enemyDracula.x, enemyDracula.y, 40, 40);
  context.drawImage(drusilla, enemyDrusilla.x, enemyDrusilla.y, 40, 40);
  context.drawImage(bat, enemyBat.x, enemyBat.y, 40, 40);
  context.drawImage(school, safeZone.x, safeZone.y, 120, 100);
  context.drawImage(buffy, player.x, player.y, 32, 50);



  context.font = "15px Verdana";
  context.fillStyle = "white";
  context.fillText("Lives Saved: " + lives, 5, 15);

}



function move(keyClick){
   if(87 in keyClick){
     player.y-=10;
   }
   if(65 in keyClick){
     player.x-=10;
   }
   if(83 in keyClick){
     player.y+=10;
   }
   if(68 in keyClick){
     player.x+=10;
   }

   render();
 }
