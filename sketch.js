
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var score = 0;
var Play = 1;
var End = 0;
var gameState = Play;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  monkey = createSprite(80, 315, 20, 20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)    
  
  stroke("white");
  textSize(20)
  fill("white")
  text("Survival Time: ", 100, 50)
  
}


function draw() {
  background(225);
  
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y >= 100){
    monkey.velcoityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  text("Survival Time: " + score, 135, 50)
  
  bananas();
  obstacles();
  drawSprites();
  
}

function bananas(){
  if(World.frameCount%100===0){
    banana = createSprite(400, 200, 20, 20)
    banana.scale = 0.08;
    banana.addImage("bananas", bananaImage);
    
    banana.y = Math.round(random(50, 300))
    banana.velocityX = -7;
    banana.setLifetime = 100;
  }
}
  
function obstacles(){
  if(World.frameCount%83===0){
    obstacle = createSprite(400, 200, 20, 20)
    obstacle.scale = 0.2;
    obstacle.addImage("obstacles", obstacleImage);
    
    obstacle.velocityX = -7;
    obstacle.setLifetime = 90;
    obstacle.y = 320;
  }
}
    
    
    
    