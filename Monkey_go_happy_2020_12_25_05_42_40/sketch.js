
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
   
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {

  createCanvas(600, 300);
  ground = createSprite(0,300,600,10);
  ground.velocityX=-15;
  console.log(ground.x);
  
  monkey = createSprite(25,265,50,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
  monkey.collide(ground);
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
  
  
}


function draw() {
  background("beige");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -13;
        
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
  spawnObstacles();
  spawnBanana();
  drawSprites();
}


function spawnObstacles(){
  
 if (frameCount % 300 === 0){
   var obstacle = createSprite(700,250,10,40);
   
   
   obstacle.addImage(obstacleImage);
    
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.velocityX = -6;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}


function spawnBanana() {
  //write code here to spawn the banana
  if (frameCount % 150 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -8;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    banana.scale= 0.1;
    FoodGroup.add(banana);
    
    
  }
}


