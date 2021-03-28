
var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;

var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400, 400);
 monkey = createSprite(100, 350, 10, 10);
 monkey.addAnimation("running", monkey_running);
 monkey.scale = 0.07;
  
 ground = createSprite(200, 375, 400, 10);
 ground.velocityX = -5;
 
 bananaGroup = new Group;
  
 obstacleGroup = new Group;

}


function draw() {
background(rgb(201, 111, 15));
  
  if(ground.x < 200) {
    ground.x = 200;
  }
  
  if(keyDown("SPACE") && (monkey.y > 200)) {
    monkey.velocityY = -12; 
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  Bananas();
  
  Obstacles();
  
 fill("black"); 
 stroke("black"); 
 textSize(20);
 survivalTime = Math.ceil(frameCount/frameRate())
 text("Survival Time: " + survivalTime, 200, 50); 
 
  
drawSprites();

  
}

function Bananas(){
  
if(World.frameCount % 80 === 0) {
 banana = createSprite(400,random(120, 200), 10, 10);
 banana.addImage(bananaImage);
 banana.scale = 0.07;
 banana.velocityX = -5;
 banana.lifetime = 400;
 bananaGroup.add(banana);
  }
    
}


function Obstacles() {
  
if(World.frameCount % 300 === 0) {
  obstacle = createSprite(400, 360, 10, 10);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.07;
  obstacle.velocityX = -5;
  obstacle.lifetime = 400;
  obstacleGroup.add(obstacle);
  }
}






