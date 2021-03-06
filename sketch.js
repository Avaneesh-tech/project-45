var titleImage
var bgImg
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10;
var man,manimg,key,keyimg;


function preload(){
  titleImage=loadImage("images/th.png");
  bgImg=loadImage("images/bg1.jpg");
  manimg=loadAnimation("images/jump1.png","images/jump2.png","images/jump3.png","images/jump4.png","images/jump5.png")
  keyimg=loadImage("images/key.png")
}

function setup() {
  createCanvas(700,700);
  s1=createSprite(50,650,100,20)
  s1.shapeColor="blue"
  s2=createSprite(150,600,100,20)
  s2.shapeColor="blue"
  s3=createSprite(250,550,100,20)
  s3.shapeColor="blue"
  s4=createSprite(350,500,100,20)
  s4.shapeColor="blue"
  s5=createSprite(450,450,100,20)
  s5.shapeColor="blue"
  s6=createSprite(550,400,100,20)
  s6.shapeColor="blue"
  s7=createSprite(650,350,100,20)
  s7.shapeColor="blue"
  man=createSprite(50,600,10,10)
  man.addAnimation("m",manimg)
  man.scale=0.8;
 key=createSprite()
}

function draw() {
  background("black");
  imageMode(CENTER) ;
  image(bgImg,350,350,700,700) 
  image(titleImage,350,45,200,100);
  
  if(keyDown("space")&& man.y>300){
    man.velocityY=-10
  }

  if(keyDown("right")){
    man.x=man.x+5
  }
  if(keyDown("left")){
    man.x=man.x-5
  }
  man.velocityY=man.velocityY+0.8
  man.collide(s1)
  man.collide(s2)
  man.collide(s3)
  man.collide(s4)
  man.collide(s5)
  man.collide(s6)
  man.collide(s7)
  
  drawSprites();
}