var circleSize;
var xPos;
var yPos;

var xVelocity;
var yVelocity;

var xDirection;
var yDirection;

function preload(){

	bounceSound = loadSound('sound.mp3');

}

function setup(){

  createCanvas(600,600);
  background(255,255,255);
  circleSize = 80;
  
  xPos = 1;
  yPos = 1;
  
  xVelocity = 5;
  yVelocity = 3;
  
  xDirection = 1;
  yDirection = 1;

}

function draw(){
  background(255);
  ellipse(xPos, yPos, circleSize, circleSize);
  
  xPos = xPos + xVelocity;
  yPos = yPos + yVelocity;

  
  if (xPos >= width || xPos <= 0){
    xDirection = -xDirection;
    xVelocity = xVelocity * xDirection;
    bounceSound.play();
  }
  
  if(yPos >= height || yPos <= 0){
    yDirection = -yDirection;
    yVelocity = yVelocity * yDirection;
    bounceSound.play();
  }
  
}