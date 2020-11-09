var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground , spawnBanana, spawnObstacle;
var survivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  foodGroup = createGroup();
  obstacleGroup = createGroup();

}


function draw() {
  background(255);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  if (keyDown("space")) {
    monkey.velocityY = -12
  }

  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke ("black");
  textSize (20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime,100,50);
  
  
  spawnBanana();
  spawnObstacle();

  drawSprites();
}


function spawnBanana(){
  
  if (frameCount%80===0){
    banana = createSprite(600, 120, 40, 10);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifeTime=50;
    
    foodGroup.add(banana);
  }
  
}

function spawnObstacle(){
  if (frameCount%300===0){
    obstacle=createSprite(600, 328, 10, 40);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.lifeTime= 50;
    obstacle.velocityX=-3
    obstacleGroup.add(obstacle);
  }
  
}








