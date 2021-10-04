var bgImg;
var doodle;
var doodleAnimate;
var bars;
var monsters;
var coin;
var score=0;
var ground;
var grndImg;

function preload(){
  bgImg = loadImage("background.png");
  doodleAnimate = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
 grndImg = loadImage("Road.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);




  ground = createSprite(width/2,height-50,width,10);
  ground.addImage(grndImg);
  ground.scale=0.1;
  ground.velocityX = -5;  

  doodle = createSprite(100,height-70,200,200);
  doodle.addAnimation("jumping",doodleAnimate);
  doodle.scale=0.5;

  

}

function draw(){
  background(bgImg);

  if(ground.x<0){
    ground.x = width/2;
  }

drawSprites();
}