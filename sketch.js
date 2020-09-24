var player,playerRightImg,playerLeftImg
var ground,ground1,ground2,ground3,groundImg
var monster,monster1,monster2,monsterRightImg,monsterLeftImg;
var groundGroup,bgImg;
var fruits,apple,banana,pineapple;
var fruitArray = [];
var monsterArray = [];
var heart,heart1,heart3,heartImg,heart1Img,heart2Img,gameOverImg
var heartArray = [];
function preload(){
  playerRightImg = loadAnimation("images/player1.png","images/player2.png","images/player3.png");
  playerLeftImg = loadAnimation("images/player4.png","images/player5.png","images/player6.png");
  groundImg = loadImage("images/ground.png");
  monsterLeftImg = loadAnimation("images/monster5.png","images/monster6.png","images/monster7.png","images/monster8.png")
  monsterRightImg = loadAnimation("images/monster1.png","images/monster2.png","images/monster3.png","images/monster4.png")
  bgImg = loadImage("images/bg.png");
  apple = loadImage("images/apple.png");
  banana = loadImage("images/banana.webp");
  pineapple = loadImage("images/pineapple.png");
  heartImg = loadImage("images/heart.png");
  heart1Img = loadImage("images/heart.png");
  heart2Img = loadImage("images/heart.png");
  gameOverImg = loadImage("images/gameOver.png");
}


function setup() {
  createCanvas(displayWidth-70,displayHeight-150);
  

  //creating player
  player = createSprite(50, 400, 50, 50);
  player.addAnimation("right",playerRightImg);
  player.addAnimation("left",playerLeftImg);
  player.scale = 0.8

  //creating ground
  ground = createSprite(displayWidth-340,displayHeight-400);
  ground.addImage("ground",groundImg);
  ground.scale =  1.1;

  ground1 = createSprite(displayWidth/2-30,displayHeight-550);
  ground1.addImage("ground1",groundImg);
  ground1.scale = 1.1;

  ground2 = createSprite(displayWidth/2-400,displayHeight-700);
  ground2.addImage("ground2",groundImg);
  ground2.scale = 1.1;

  ground3= createSprite(displayWidth/2,displayHeight-200);
  ground3.addImage("ground",groundImg);
  ground3.scale = 3.1

  

  monster = createSprite(displayWidth-430,displayHeight-450);
  monster.addAnimation("right",monsterRightImg);
  monster.addAnimation("left",monsterLeftImg);
  
  monster.velocityX=2;
  monster.scale = 0.7

  monster1 = createSprite(displayWidth-800,displayHeight-600);
  monster1.addAnimation("right",monsterRightImg);
  monster1.addAnimation("left", monsterLeftImg);
  monster1.velocityX=2;
  monster1.scale = 0.7

  monster2 = createSprite(displayWidth-1250,displayHeight-750);
  monster2.addAnimation("right",monsterRightImg);
  monster2.addAnimation("left",monsterLeftImg);
  monster2.velocityX=2;
  monster2.scale = 0.7

  monster3 = createSprite(displayWidth-200,displayHeight-300);
  monster3.addAnimation("right",monsterRightImg);
  monster3.addAnimation("left",monsterLeftImg);
  monster3.velocityX=2;
  monster3.scale = 0.7
  monsterArray = [monster,monster1,monster2,monster3];

  for(var i=0;i<3;i++){
    var randomFruits = Math.round(random(1,3));
    fruits = createSprite(random(ground.x-ground.width/2, ground.x+ground.width/2),ground.y-40);
    fruits1 = createSprite(random(ground1.x-ground1.width/2,ground1.x+ground1.width/2),ground1.y-40);
    fruits2 = createSprite(random(ground2.x-ground2.width/2,ground2.x+ground2.width/2),ground2.y-40);
    fruitArray.push(fruits,fruits1,fruits2);
    switch(randomFruits){
      case 1:
        fruits.addImage(apple);
        fruits1.addImage(banana);
        fruits2.addImage(pineapple);
         break;
      case 2:
        fruits.addImage(banana);
        fruits1.addImage(pineapple);
        fruits2.addImage(apple);
        break;
      case 3:
        fruits.addImage(pineapple);
        fruits1.addImage(apple);
        fruits2.addImage(banana);
        break;
      default: break;
      
      
    }
    
  }
  
  heart = createSprite(1000,30);
  heart.addImage("heart",heartImg);
  heart.scale = 0.5;
  heart1 = createSprite(1100,30);
  heart1.addImage("heart1",heart1Img);
  heart1.scale = 0.5;
  heart2 = createSprite(1200,30);
  heart2.addImage("heart2",heart2Img);
  heart2.scale = 0.5;
  heartArray = [heart,heart2,heart3];










  //groundGroup = new Group();
  //groundGroup.add(ground);
  //groundGroup.add(ground1);
  //groundGroup.add(ground2);
  //groundGroup.add(ground3);
  

}

function draw() {
  background(bgImg);  
  player.velocityY = player.velocityY+1  
   player.collide(ground3);
   player.collide(ground2);
   player.collide(ground1);
   player.collide(ground);
  // console.log("monster.x",monster.x);
   //console.log("hi",monster.x+monster.width/2)
  monsterChangePosition(monster,ground);
  monsterChangePosition(monster1,ground1);
  monsterChangePosition(monster2,ground2);
  monsterChangePosition(monster3,ground3);
  for (var index=0;index<fruitArray.length;index++){
    if (player.isTouching(fruitArray[index])) {
      fruitArray[index].destroy();


    }

  }
  for (var index=0;index<monsterArray.length;index++){
    if(player.isTouching(monsterArray[index])){
      player.x = 50;
      player.y = 400;
      heartArray[index].destroy();

      
    }
  }
 
  
  drawSprites();
 
}

function monsterChangePosition(monster,ground){
    if (monster.x<=(ground.x-ground.width/2)) {
      monster.changeAnimation("right",monsterRightImg);
      monster.velocityX = 2;
    
  }
  if(monster.x>=(ground.x+ground.width/2)){
    monster.changeAnimation("left",monsterLeftImg);
    monster.velocityX = -2;
  }
  
}
function keyPressed(){
  if (keyCode===RIGHT_ARROW){
    player.x = player.x+20;
    player.changeAnimation("right",playerRightImg);

    

  }
  if (keyCode===LEFT_ARROW){
    player.x = player.x-20;
    player.changeAnimation("left",playerLeftImg);

   
  }
  if (keyCode===32){
    player.velocityY = -10;
   


  }
  

}


