var ship;
var sea;
var shipImage;
var seaImage;

function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(900,900);
  ship = createSprite(280,450,10,10);
  ship.addAnimation("ship_swimming",shipImage);
  ship.scale = 0.5;

  sea = createSprite(450,450,900,10);
  sea.addImage("sea",seaImage);
  sea.scale = 0.6;

  ship.depth = sea.depth + 1;

  
}

function draw() {
  background("blue");

  sea.velocityX = -3;
  

  if (sea.x<0){
    sea.x = width/2
  }


  drawSprites();
 
}