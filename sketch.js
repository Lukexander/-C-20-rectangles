
var movingRect;
var staticRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 100, 50);
  movingRect.shapeColor = "blue";
  
  staticRect = createSprite(400,200, 50, 100);
  staticRect.shapeColor = "cyan";
}

function draw() {
  background(255,255,255);  
 movingRect.x = mouseX;
 movingRect.y = mouseY; 

 if(movingRect.x - staticRect.x < staticRect.width/2 + movingRect.width/2 && 
  staticRect.x - movingRect.x < staticRect.width/2 + movingRect.width/2 
  && staticRect.y-movingRect.y <staticRect.height/2+ movingRect.height/2 &&
  movingRect.y -staticRect.y <staticRect.height/2+ movingRect.height/2 ){
staticRect.shapeColor = "red";
movingRect.shapeColor = "green";
 }
 else 
 {
  staticRect.shapeColor = "cyan";
  movingRect.shapeColor = "blue";
 }
  drawSprites();
}