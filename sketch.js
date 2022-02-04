var bg, bgImg
var rocket, rocketImg
var astroid, cloud
var spaceIsDown = false
var gameState = 0

function preload(){
 bgImg = loadImage("sky.jpg")
 rocketImg = loadImage("rocket.png")
 astroidImg = loadImage("astroid.png")
 cloudImg = loadImage("cloud.png")
}

function setup(){
  createCanvas(400,600)
  
  bg = createSprite(200, 300, 400, 600)
  bg.addImage("bg", bgImg)
  bg.scale = 3
  bg.velocityY = -3

  rocket = createSprite(200, 500, 10, 10)
  rocket.addImage("rocket", rocketImg)
  rocket.scale = 0.15
}

function draw(){
  background("white");
  if (bg.y < 0) {
    bg.y = bg.height/3
  }

  spawnClouds()
  spawnAstroids()
  drawSprites()

  if (keyDown("SPACE")){
    rocket.y -= 10
    spaceIsDown = true
  } else{
    spaceIsDown = false
  }

  if (keyDown("LEFT_ARROW")){
    rocket.x -= 5
  }

  if (keyDown("RIGHT_ARROW")){
    rocket.x += 5
  }

  if (spaceIsDown === false && gameState === 1){
    rocket.y += 5
  }
}

function spawnClouds(){
    if (frameCount%80 === 0){
      cloud1 = createSprite(random(150, 500), 0, 10, 10)
      cloud1.velocityY = 1.5
      cloud1.addImage("cloud", cloudImg)
      cloud1.scale = 0.1
      cloud1.lifetime = 1000
   }
}

function spawnAstroids(){
  if (frameCount%100 === 0){
    astroid = createSprite(random(250, 400), 0, 10, 10)
    astroid.velocityY = 1.5
    astroid.addImage("astroid", astroidImg)
    astroid.scale = 0.1
    astroid.lifetime = 1000
 }
}