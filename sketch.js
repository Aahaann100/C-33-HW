

function preload() {
  snowImage=loadImage("Snow5.webp")
  backgroundImg=loadImage("Snow1.jpg")
}

function setup() {
  createCanvas(225,225);
  createSprite(400, 200, 50, 50);
  backgroundImg.scale=2
  for(i=0; i<50; i++){
    snow=createSprite(random(50, windowWidth), 0)
    snow.addImage("snow", snowImage)
    snow.scale=0.04
    snow.velocityY=3
  }
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}