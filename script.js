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
x:20,
y:100
}

var beam1 = {
  x:100,
  y: 0,
  width: 64,
  height: 220
}

var beam2 = {
  x: 100,
  y: 230,
  width: 64,
  height: 250
}

// var gap = 75;
// var constant = beam1.height + gap;

var lives = 3;

var beam = [];

beam[0] = {
  x: canvas.width,
  y: 0
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


//NB Order matters here - draw galaxy first
  context.drawImage(galaxy, 0, 0);

//This creates lasers at edge of screen & keeps moving them to the left
  for(var i = 0; i < beam.length; i++) {
    context.drawImage(laser, beam[i].x, beam[i].y, beam1.width, beam1.height);
    context.drawImage(laser, beam[i].x, beam2.y, beam2.width, beam2.height);
    context.drawImage(spaceship, ship.x, ship.y, 50, 50);
    beam[i].x--;

    if(beam[i].x == 125){
      beam.push({
        x: canvas.width,
        y: Math.floor(Math.random()* beam1.height)-beam1.height
      });
    }
  }

//Currently only changing top beam. If using gap & constant for bottom beam y need to also calculate gap between bottom of beam2 & size of canvas & increase beam2 height (or decrease) by as much every turn


  context.font = "15px Verdana";
  context.fillStyle = "white";
  context.fillText("Lives: " + lives, 5, 15);

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
