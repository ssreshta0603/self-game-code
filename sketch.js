var manFroViewImg,manBackViewImg,manRightViewImg,manLeftViewImg;
var saniImg,virus1Img,virus2Img,virus3Img;
var man,sanitizer1,sanitizer2,sanitizer3,sanitizer4;
var virus1,virus2,virus3;
var win,lose;
var manStart,manEnd;
var gameState = "SERVE";
var sanScore = 0;
var winner,loser;
var playerScore = 1;
var check=0;
var door1,door2;
var axeImg;
var x;
//var danger = 0;
function preload(){
manFroViewImg = loadAnimation("manfroviews/manfroview1.png","manfroviews/manfroview2.png","manfroviews/manfroview3.png",
"manfroviews/manfroview4.png","manfroviews/manfroview5.png","manfroviews/manfroview6.png","manfroviews/manfroview7.png",
"manfroviews/manfroview8.png","manfroviews/manfroview9.png");

manBackViewImg = loadAnimation("mantopviews/mantopview1.png","mantopviews/mantopview2.png","mantopviews/mantopview3.png"
,"mantopviews/mantopview4.png","mantopviews/mantopview5.png","mantopviews/mantopview6.png","mantopviews/mantopview7.png"
,"mantopviews/mantopview8.png","mantopviews/mantopview9.png");

manRightViewImg  = loadAnimation("manrightviews/manrightview1.png","manrightviews/manrightview2.png",
"manrightviews/manrightview3.png","manrightviews/manrightview4.png","manrightviews/manrightview5.png",
"manrightviews/manrightview6.png","manrightviews/manrightview7.png","manrightviews/manrightview8.png",
"manrightviews/manrightview9.png");

manLeftViewImg = loadAnimation("manleftviews/manleftview1.png","manleftviews/manleftview2.png","manleftviews/manleftview3.png"
,"manleftviews/manleftview4.png","manleftviews/manleftview5.png","manleftviews/manleftview6.png","manleftviews/manleftview7.png"
,"manleftviews/manleftview8.png","manleftviews/manleftview9.png");

saniImg = loadImage("power/sanitizer.png");
virus1Img = loadImage("viruses/virus1.png");
virus2Img = loadImage("viruses/virus2.png");
virus3Img = loadImage("viruses/virus3.png");
virus4Img = loadImage("viruses/virus4.png");
maze = loadImage("MAZE2.png");
manStart = loadImage("mantopviews/mantopview1.png");
manEnd = loadImage("manfroviews/manfroview1.png");
win = loadImage("win.png");
lose = loadImage("game.png");
door1 = loadImage("door1.png");
door2 = loadImage("door2.png");
axeImg = loadImage("axe.png");
x = loadImage("texts.png");
}
function setup() {
createCanvas(1000,700);
//borders 1 to 6.
wall1= createSprite(10,150,20,300);
wall2= createSprite(10,540,20,320);
wall3= createSprite(500,10,1000,20);
wall4= createSprite(500,690,1000,20);
wall5= createSprite(990,150,20,300);
wall6= createSprite(990,540,20,320);
//hori.
wall7= createSprite(110,360,20,520);
wall8= createSprite(170,270,100,20);
wall9= createSprite(180,530,120,20);
wall10= createSprite(210,140,20,260);
wall11= createSprite(210,400,20,80);
wall12= createSprite(230,570,20,80);
wall13= createSprite(280,410,120,20);
wall14= createSprite(310,250,20,300);
wall15= createSprite(330,590,20,180);
wall16= createSprite(390,590,100,20);
wall17= createSprite(410,110,180,20);
wall18= createSprite(430,390,20,380);
wall19= createSprite(490,60,20,80);
wall20= createSprite(490,350,100,20);
wall21= createSprite(535,500,20,100);
wall22= createSprite(570,210,260,20);
wall23= createSprite(600,650,160,60);
wall24= createSprite(595,150,20,100);
wall25= createSprite(595,450,140,20);
wall26= createSprite(630,390,20,100);
wall27= createSprite(635,590,20,90);
wall28= createSprite(690,280,20,120);
wall29= createSprite(750,110,300,20);
wall30= createSprite(770,350,260,20);
wall31= createSprite(760,460,40,200);
wall32= createSprite(770,660,30,40);
wall33= createSprite(840,550,120,20);
wall34= createSprite(840,230,120,60);
wall35= createSprite(890,580,20,40);
wall36= createSprite(920,450,120,20);
wall37= createSprite(880,300,40,80);
//invisible wall
invWall = createSprite(560,310,240,20);
right = createSprite(5,340,10,80);
left = createSprite(995,340,10,80);
line = createSprite(520,300,10,100);
line.addImage(x);
line.scale = 1.5
// dark spots
spot1 = createSprite(60,600,80,20);
spot1.addImage("close",door2);
spot1.scale = 0.4 ;
spot2 = createSprite(330,460,20,80);
spot2.addImage("close",door1);
spot2.scale = 0.4 ;
spot3 = createSprite(482,450,85,20);
spot3.addImage("close",door2);
spot3.scale = 0.4 ;
spot4= createSprite(535,580,20,80);
spot4.addImage("close",door1);
spot4.scale = 0.4 ;
spot5 = createSprite(770,600,20,80);
spot5.addImage("close",door1);
spot5.scale = 0.4 ;
spot6 = createSprite(940,255,80,20);
spot6.addImage("close",door2);
spot6.scale = 0.4 ;
door = createSprite(990,340,20,80);
door.addImage("close",door1);
door.scale = 0.4 ;
door2 = createSprite(10,340,20,80);
door2.addImage("close",door1);
door2.scale = 0.4 ;
axe = createSprite(810,300,30,30);
axe.addImage(axeImg);
axe.scale = 0.04 ;
man = createSprite(450,550,20,20);
//man.debug = true;
man.setCollider("rectangle",0,0,30,50);
man.addImage(manStart);
man.addImage("manend",manEnd);
man.addAnimation("BackView",manBackViewImg);
man.addAnimation("frontView",manFroViewImg);
man.addAnimation("rightView",manRightViewImg);
man.addAnimation("leftView",manLeftViewImg);

sanitizer1 =createSprite(160,230,20,20);
sanitizer1.addImage(saniImg);
sanitizer1.scale = 0.15;

sanitizer2 = createSprite(450,70,20,20);
sanitizer2.addImage(saniImg);
sanitizer2.scale = 0.15;

sanitizer3 = createSprite(750,240,20,20);
sanitizer3.addImage(saniImg);
sanitizer3.scale = 0.15; 

sanitizer4 = createSprite(830,650,20,20);
sanitizer4.addImage(saniImg);
sanitizer4.scale = 0.15;

sanitizer5 = createSprite(695,400,20,20);
sanitizer5.addImage(saniImg);
sanitizer5.scale = 0.15;

sanitizer6 = createSprite(390,650,20,20);
sanitizer6.addImage(saniImg);
sanitizer6.scale = 0.15;
//man.scale = 0.5;
winner = createSprite(500,350);
winner.addImage(win);
winner.visible = false;



loser = createSprite(500,350);
loser.addImage(lose)
loser.visible = false;
virus1 = createSprite(970,330,20,20);
virus1.addImage(virus1Img);
virus1.scale = 0.1;
//
virus2 = createSprite(970,330,20,20);
virus2.addImage(virus2Img);
virus2.scale = 0.3;

virus3 = createSprite(970,330,20,20);
virus3.addImage(virus3Img);
virus3.scale = 0.3;

virus4 = createSprite(970,330,20,20);
virus4.addImage(virus4Img);
virus4.scale = 0.15;

walls = new Group();
viruses = new Group();
spots = new Group();
edges = createEdgeSprites();

virus1.velocityX = -5;
virus1.velocityY = -5;

virus2.velocityX = -6
virus2.velocityY = -5

virus3.velocityX =-7
virus3.velocityY = -5

virus4.velocityX =2
virus4.velocityY = -5


}

function draw() {
background(0,0,83);  
textSize(20)
// text(mouseX+" : "+mouseY,150,50);
invWall.visible = false;
right.visible = false;
left.visible = false;

spots.add(spot1)
spots.add(spot2)
spots.add(spot3)
spots.add(spot4)
spots.add(spot5)
spots.add(spot6)
spots.setColorEach("yellow");

walls.add(wall1)
walls.add(wall2)
walls.add(wall3)
walls.add(wall4)
walls.add(wall5)
walls.add(wall6)
walls.add(wall7)
walls.add(wall8)
walls.add(wall9)
walls.add(wall10)
walls.add(wall11)
walls.add(wall12)
walls.add(wall13)
walls.add(wall14)
walls.add(wall15)
walls.add(wall16)
walls.add(wall17)
walls.add(wall18)
walls.add(wall19)
walls.add(wall20)
walls.add(wall21)
walls.add(wall22)
walls.add(wall23)
walls.add(wall24)
walls.add(wall25)
walls.add(wall26)
walls.add(wall27)
walls.add(wall28)
walls.add(wall29)
walls.add(wall30)
walls.add(wall31)
walls.add(wall32)
walls.add(wall33)
walls.add(wall34)
walls.add(wall35)
walls.add(wall36)
walls.add(wall37)
walls.setColorEach("pink");
man.collide(door);
man.collide(door2);
viruses.add(virus1);
viruses.add(virus2);
viruses.add(virus3);
viruses.add(virus4);
man.collide(walls);
text("score : "+sanScore,50,40);
text("lives : "+playerScore,850,40);
//text("check : "+check,850,60);
if(spots.isTouching(man)){
  man.x = 30;
  man.y = 330;
}
if(gameState === "SERVE"){
  line.visible = true;
  
virus1.visible= false;
virus2.visible= false;
virus3.visible= false;
virus4.visible= false;
man.x = 30;
man.y = 330;

if(keyDown("space")){
  line.visible = false;
gameState = "PLAY";
}
}

if(gameState === "PLAY"){
virus1.visible= true;
virus2.visible= true;
virus3.visible= true;
virus4.visible= true;
line.visible = false;
if(man.isTouching(right)){
  man.x = 990;
}
if(man.isTouching(right)){
  man.x = 10;
}
if(keyDown(UP_ARROW)){
man.velocityY = -6;
man.velocityX = 0;
man.changeAnimation("BackView");
}

if(keyDown(DOWN_ARROW)){
man.velocityY = 6;
man.velocityX =0;
man.changeAnimation("frontView");
}

if(keyDown(RIGHT_ARROW)){
man.velocityX = 6;
man.velocityY = 0;
man.changeAnimation("leftView");
}

if(keyDown(LEFT_ARROW)){
man.velocityX = -6;
man.velocityY = 0;
man.changeAnimation("rightView");
}
if(man.isTouching(sanitizer1)){
sanitizer1.destroy()
spot1.destroy();
sanScore+=100;
playerScore+=1;
man.x = 60;
man.y = 650;
}

if(man.isTouching(sanitizer2)){
sanitizer2.destroy();
spot2.destroy();
sanScore+=100;
playerScore+=1;
man.x = 370;
man.y = 460;
}
if(man.isTouching(sanitizer3)){
sanitizer3.destroy();
spot6.destroy();
sanScore+=100;
playerScore+=1;
man.x = 940;
man.y = 295;

}
if(man.isTouching(sanitizer4)){
sanitizer4.destroy();
spot5.destroy();
playerScore+=1;
sanScore+=100;
man.x = 730 ;
man.y = 650;
}

if(man.isTouching(sanitizer5)){
  sanitizer5.destroy()
  spot4.destroy();
  playerScore+=1;
  sanScore+=100;
  man.x = 500 ;
  man.y = 590;
  }

  if(man.isTouching(sanitizer6)){
    sanitizer6.destroy()
    spot3.destroy();
    playerScore+=1;
    sanScore+=100;
    man.x = 510;
    man.y = 400;
    }
  
    if(axe.isTouching(man)){
      door.destroy();
      door2.destroy();
      axe.destroy();
    }

if(viruses.isTouching(walls)){
viruses.bounceOff(walls);
}
console.log(frameCount);
if(man.isTouching(viruses) || viruses.isTouching(man))
{  
  check+=1;}
if(check>10)
{ playerScore = playerScore-1;
  check = 0;
} 

if(playerScore === 0){
  gameState = "END";
}
};

viruses.bounceOff(edges);

man.collide(edges[2]);
man.collide(edges[3]);

if(gameState === "END"){
virus1.visible= false;
virus2.visible= false;
virus3.visible= false;
virus4.visible= false;
man.changeImage("manend");
man.velocityX = 0;
man.velocityY = 0;
loser.visible = true;
if(keyDown("r")){
gameState = " SERVE "
reset();
}
}

if(man.isTouching(invWall)){
gameState = "END"
loser.visible = false;
winner.visible = true;
}

drawSprites();
}

function reset(){
gameState = "SERVE";
line.visible = true;
playerScore = 1;
sanScore = 0;
winner.visible = false;
loser.visible = false;

sanitizer1 =createSprite(160,230,20,20);
sanitizer1.addImage(saniImg);
sanitizer1.scale = 0.15;

sanitizer2 = createSprite(450,70,20,20);
sanitizer2.addImage(saniImg);
sanitizer2.scale = 0.15;

sanitizer3 = createSprite(750,240,20,20);
sanitizer3.addImage(saniImg);
sanitizer3.scale = 0.15; 

sanitizer4 = createSprite(830,650,20,20);
sanitizer4.addImage(saniImg);
sanitizer4.scale = 0.15;

sanitizer5 = createSprite(695,400,20,20);
sanitizer5.addImage(saniImg);
sanitizer5.scale = 0.15;

sanitizer6 = createSprite(390,650,20,20);
sanitizer6.addImage(saniImg);
sanitizer6.scale = 0.15;
if(man.isTouching(sanitizer1)){
  sanitizer1.destroy()
  spot1.destroy();
  sanScore+=100;
  playerScore+=1;
  man.x = 60;
  man.y = 650;
  }
  
  if(man.isTouching(sanitizer2)){
  sanitizer2.destroy();
  spot2.destroy();
  sanScore+=100;
  playerScore+=1;
  man.x = 370;
  man.y = 460;
  }
  if(man.isTouching(sanitizer3)){
  sanitizer3.destroy();
  spot6.destroy();
  sanScore+=100;
  playerScore+=1;
  man.x = 940;
  man.y = 295;
  
  }
  if(man.isTouching(sanitizer4)){
  sanitizer4.destroy();
  spot5.destroy();
  playerScore+=1;
  sanScore+=100;
  man.x = 730 ;
  man.y = 650;
  }
  
  if(man.isTouching(sanitizer5)){
    sanitizer5.destroy()
    spot4.destroy();
    playerScore+=1;
    sanScore+=100;
    man.x = 500 ;
    man.y = 590;
    }
  
    if(man.isTouching(sanitizer6)){
      sanitizer6.destroy()
      spot3.destroy();
    playerScore+=1;
      sanScore+=100;
      man.x = 510;
      man.y = 400;
      }
      spot1 = createSprite(60,600,80,20);
      spot1.addImage("close",door2);
      spot1.scale = 0.4 ;
      spot2 = createSprite(330,460,20,80);
      spot2.addImage("close",door1);
      spot2.scale = 0.4 ;
      spot3 = createSprite(482,450,85,20);
      spot3.addImage("close",door2);
      spot3.scale = 0.4 ;
      spot4= createSprite(535,580,20,80);
      spot4.addImage("close",door1);
      spot4.scale = 0.4 ;
      spot5 = createSprite(770,600,20,80);
      spot5.addImage("close",door1);
      spot5.scale = 0.4 ;
      spot6 = createSprite(940,255,80,20);
      spot6.addImage("close",door2);
      spot6.scale = 0.4 ;
      door = createSprite(990,340,20,80);
      door.addImage("close",door1);
      door.scale = 0.4 ;
      door2 = createSprite(10,340,20,80);
      door2.addImage("close",door1);
      door2.scale = 0.4 ;
      axe = createSprite(810,300,30,30);
      axe.addImage(axeImg);
      axe.scale = 0.04 ;
}