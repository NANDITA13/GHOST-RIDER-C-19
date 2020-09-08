var tower ;
var towerImage ;
var  doorImage , climberImage ,ghostImage
var  door , climber , iBlock , iBlockImage, climberGroup , iBlockGroup;

var gameState = "play";



function preload (){
  
  towerImage = loadImage ("tower.png");

  doorImage = loadImage ("door.png");
  
  ghostImage = loadImage ("ghost-standing.png");
  
  climberImage = loadImage ("climber.png");

  iBlockImage = loadImage ("climber.png");
}

function setup (){
  createCanvas (600,600);

  
  tower = createSprite (300,300,600,600);
  tower.addImage (towerImage);
  tower.y = tower.height/2;
  tower.velocityY = -1;


  ghost = createSprite (200,200,50,50);
  ghost.addImage (ghostImage);
  ghost.scale = 0.3;

  
  climberGroup = new Group ();

  iBlockGroup = new Group ();

  iBlock = new Group();
  



}

function draw (){

  background (0);
  
if(gameState === "play"){
  if(tower.y <0 ){

   tower.y = tower.height/2;
}

if (keyDown ("space")){

  ghost.velocityY = -10;
}

ghost.velocityY = ghost.velocityY+ .8;

if ( keyDown("left")){

  ghost.x = ghost.x-5;

}

if ( keyDown("right")){

  ghost.x = ghost.x+5;

}

spawnObstacles ();

 ghost.collide (climberGroup);

if ((ghost.y > 600) || (ghost.isTouching (iBlock))) {

  gameState = "end";

}



  



  drawSprites();
}

else if (gameState === "end"){

  fill ("yellow");

  textSize (50);

  text ("GAME OVER", 160,300);


   
}
}

function spawnObstacles(){

  if (frameCount % 280 === 0){

      door = createSprite (200,-50);
      climber = createSprite (200,10);

      door.x = random (120,400);
      climber.x = door.x;

      door.addImage (doorImage);
      climber.addImage (climberImage);

      door.velocityY = 1;
      climber.velocityY  = 1;

      climberGroup.add (climber);

      climber.lifetime = 650;
      door.lifetime = 650;



      iBlock = createSprite (200,15);

      iBlock.addImage (iBlockImage);

      iBlock.velocityY = 1;

      iBlock.lifetime = 650

      iBlock.x = climber.x;

      iBlock.visible = false;



  }



}

